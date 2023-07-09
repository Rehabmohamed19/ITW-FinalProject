import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eye from '../images/eye.png'
import { useState , useEffect } from 'react';
import { Box, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { Modal, FormControl, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { SubmitHandler, reset } from 'redux-form';
import { updateCardAsync } from '../features/API/UpdateCardSlice';
import { useSelector } from 'react-redux';
import { AppDispatch, useAppDispatch } from '../store';


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

export default function DefaultScreen() {
    const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = useState<FormValues>({ name: "", desc: "", status: "", id: "" })

  //   const [users, setUsers] = useState<any[]>([])
  const handleClose = () => setOpenModal(false);


    const handleDrawerOpen = () => {
      console.log(setOpen(true));
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
const dispatch: AppDispatch = useAppDispatch();

  const todos = useSelector((state: any) => state.todos);
  const lists = useSelector((state: any) => state.lists);
  const updatecards = useSelector((state: any) => state.updatecards);

    
  type FormValues = {
    name: string,
    desc: string,
    id: string,
    status: string,
  }

  const { reset } = useForm()


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  // const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {

  //   setData(data);
  //   dispatch(updateCardAsync(data))

  //   reset({
  //     name: "",
  //     desc: "",
  //     status: "",
  //     // id:""
  //   });
  // };

  return (
<>
<Container>
          <Row >
            <Col className='d-flex align-items-center justify-content-center' style={{ height: "300px" }}>
              <div className='flex-column d-flex align-items-center justify-content-center'>
                <p>This board is empty. Create a new column to get started.</p>
                <button className='add-column-btn '>
                  + Add New Column
                </button>
              </div>
            </Col>
          </Row>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} >
              <button className='d-flex bg-primary mb-4 align-items-center justify-content-center' style={{ border: "none", color: "white", borderRadius: "20px", width: "40px", padding: "5px" }} onClick={handleClose}>X</button>

              <h2>Edit Task</h2>
              <form >
                <Box className="form-container" sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField className="input-field" placeholder='Title' {...register("name")} ></TextField>
                  <br></br>
                  <TextField className="input-field" placeholder='Description' {...register("desc")} />

                  <br></br>
                  <FormControl>
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
          <div style={{ height: "150px" }}>

          </div>

          <div>
      
    </div>
        </Container>
</>
  )
}
