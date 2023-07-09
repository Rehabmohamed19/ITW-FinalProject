import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { addCardAsync } from '../features/API/ListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from "../store";
import { updateCardAsync } from '../features/API/UpdateCardSlice';
import { deleteCardAsync } from '../features/API/DeleteCardSlice'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { formValues } from 'redux-form';


type ListType = {
  list: any
}


type UpdateCardType = {
  cards: any
}


type deleteCardType = {
  cards: any
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

export default function Cards({ list }: ListType) {

  // const [lists, setLists] = useState<any[]>([])
  const [board, setBoards] = useState<any[]>([])
  const [card, setCards] = useState<any[]>([])
  const [selectedCard, setselectedCard] = useState<any>([])
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = useState<FormValues>({ name: "", desc: "", status: "", id: "" })


  const handleClose = () => setOpenModal(false);

  type FormValues = {
    name: string,
    desc: string,
    id: string,
    status: string,
  }


  const dispatch: AppDispatch = useAppDispatch();

  const todos = useSelector((state: any) => state.todos);
  const lists = useSelector((state: any) => state.lists);
  const updatecards = useSelector((state: any) => state.updatecards);


  const { reset } = useForm()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(selectedCard)
    data.id = selectedCard
    setData(data);
    dispatch(updateCardAsync(data))



    reset({
      name: "",
      desc: "",
      status: "",
      // id:""
    });
  };

  const handleOpen = (user: any) => {
    setselectedCard(user.id)
    setOpenModal(true);
  }

  // const handleDelete = (user: any, action: any) => {

  //   dispatch(deleteCardAsync(data))

  // }



  const fetchCard = () => {
    // if (lists && lists[0]) {
    // lists.map(list => {
    fetch("https://api.trello.com/1/lists/" + list.id + "/cards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97")
      .then(response => {
        return response.json()

      })
      .then(data => {
        setCards(data)
        console.log(data)
      })

    // })
    // }
  }
  useEffect(() => {
    fetchCard()
  }, [list])
  // function handleOpen(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //     throw new Error('Function not implemented.');
  // }

  return (
    <>


      <Container>
        <Row>
          <Col>
            <div >
              {card && card.map((user, index) => {
                return (
                  <div key={index} onClick={() => handleOpen(user)}>
                    <Card className='mt-3' sx={{ maxWidth: 150 }} >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {user.name}
                          </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                            {user.desc}
                            </Typography> */}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                )
              })}
            </div>
          </Col>

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} >
              <button className='d-flex bg-primary mb-4 align-items-center justify-content-center' style={{ border: "none", color: "white", borderRadius: "20px", width: "40px", padding: "5px" }} onClick={handleClose}>X</button>

              <h2>Edit Task</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="form-container" sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField className="input-field" placeholder='Title' {...register("name")} >{list.name}</TextField>
                  <br></br>
                  <TextField className="input-field" placeholder='Description' {...register("desc")} />

                  <br></br>


                  <FormControl sx={{ m: 1, minWidth: "100%", marginTop: "15px" }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      {...register("status")}
                      id="demo-simple-select-autowidth"
                      autoWidth
                      label="Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {lists && lists.map((list: any, index: number) => (
                        <MenuItem key={index} value={list.id}>{list.name}</MenuItem>

                      ))}

                    </Select>
                  </FormControl>

                  <Button
                    type="submit"
                    className="submit"
                    variant="contained"
                    size="large"
                    sx={{ marginTop: "15px", width: "100%", margin: "6px", backgroundColor: "#635FC7", borderRadius: "30px" }}
                  >
                    Submit
                  </Button>
                  {/* <Button color="inherit" onClick={() => handleOpen()} className='add-task-btn'>
                    Delete Task
                  </Button> */}

                </Box>
              </form>



            </Box>
          </Modal>
        </Row>
      </Container>
    </>
  )
}
