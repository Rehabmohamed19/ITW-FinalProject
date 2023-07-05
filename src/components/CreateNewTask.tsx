import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import { Label } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';



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

export default function CreateNewTask({}) {

    const [openModal, setOpenModal] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  return (
    <>
           <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} component="form">
                <button className='d-flex bg-primary mb-4 align-items-center justify-content-center' style={{ border: "none", color: "white", borderRadius: "20px", width: "40px", padding: "5px" }} onClick={handleClose}>X</button>

                <TextField
                  style={{ width: "100%", margin: "5px",  marginTop:"15px" }}
                  required
                  id="outlined-required"
                  label="Title"
                  defaultValue="e.g. Take coffee break"


                />

                <br />
                <TextField
                  style={{ width: "100%", margin: "5px" ,  marginTop:"15px"}}
                  type="text"
                  label="Description"
                  defaultValue="e.g. It’s always good to take a break. This 15 minute break will 
                  recharge the batteries a little."
                  variant="outlined"
 


                />
                <br />
                <FormControl sx={{ m: 1, minWidth: "100%"  , marginTop:"15px"}}>
                  <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Status"


                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>
                <br />

                <Button variant="contained" sx={{ marginTop:"15px", width: "100%", margin: "6px", backgroundColor: "#635FC7", borderRadius: "30px" }} >
                  Create Task
                </Button>
              </Box>
            </Modal>
    </>
  )
}


