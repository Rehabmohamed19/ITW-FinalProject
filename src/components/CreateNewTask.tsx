// // import React from 'react'
// // import Box from '@mui/material/Box';
// // import Modal from '@mui/material/Modal';
// // import TextField from "@mui/material/TextField";
// // import { Label } from '@mui/icons-material';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select, { SelectChangeEvent } from '@mui/material/Select';
// // import Button from '@mui/material/Button';



// // const style = {
// //     position: 'absolute' as 'absolute',
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     width: 600,
// //     bgcolor: 'background.paper',
// //     border: '2px solid #000',
// //     boxShadow: 24,
// //     p: 4,
  
// //   };

// // export default function CreateNewTask({}) {

// //     const [openModal, setOpenModal] = React.useState(false);
// //     const [open, setOpen] = React.useState(false);
// //     const handleOpen = () => setOpenModal(true);
// //     const handleClose = () => setOpenModal(false);
// //   return (
// //     <>
// //            <Modal
// //               open={openModal}
// //               onClose={handleClose}
// //               aria-labelledby="modal-modal-title"
// //               aria-describedby="modal-modal-description"
// //             >
// //               <Box sx={style} component="form">
// //                 <button className='d-flex bg-primary mb-4 align-items-center justify-content-center' style={{ border: "none", color: "white", borderRadius: "20px", width: "40px", padding: "5px" }} onClick={handleClose}>X</button>

// //                 <TextField
// //                   style={{ width: "100%", margin: "5px",  marginTop:"15px" }}
// //                   required
// //                   id="outlined-required"
// //                   label="Title"
// //                   defaultValue="e.g. Take coffee break"


// //                 />

// //                 <br />
// //                 <TextField
// //                   style={{ width: "100%", margin: "5px" ,  marginTop:"15px"}}
// //                   type="text"
// //                   label="Description"
// //                   defaultValue="e.g. It’s always good to take a break. This 15 minute break will 
// //                   recharge the batteries a little."
// //                   variant="outlined"
 


// //                 />
// //                 <br />
// //                 <FormControl sx={{ m: 1, minWidth: "100%"  , marginTop:"15px"}}>
// //                   <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
// //                   <Select
// //                     labelId="demo-simple-select-autowidth-label"
// //                     id="demo-simple-select-autowidth"
// //                     // value={age}
// //                     // onChange={handleChange}
// //                     autoWidth
// //                     label="Status"


// //                   >
// //                     <MenuItem value="">
// //                       <em>None</em>
// //                     </MenuItem>
// //                     <MenuItem value={10}>Twenty</MenuItem>
// //                     <MenuItem value={21}>Twenty one</MenuItem>
// //                     <MenuItem value={22}>Twenty one and a half</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //                 <br />

// //                 <Button variant="contained" sx={{ marginTop:"15px", width: "100%", margin: "6px", backgroundColor: "#635FC7", borderRadius: "30px" }} >
// //                   Create Task
// //                 </Button>
// //               </Box>
// //             </Modal>
// //     </>
// //   )
// // }

// import { reduxForm, Field } from 'redux-form';
// import React from 'react';
// import {store} from "../store"

// interface Props {}

// let SignInForm: React.FC<Props> = (props) => {

  
//   return <form className="form">
//     <div className="field">
//       <div className="control">
//         <label className="label">First Name</label>
//         <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Last Name</label>
//         <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Email</label>
//         <Field className="input" name="email" component="input" type="email" placeholder="Email Address"/>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Proficiency</label>
//         <div className="select">
//           <Field className="input" name="proficiency" component="select">
//             <option />
//             <option value="beginner">Beginner Dev</option>
//             <option value="intermediate">Intermediate Dev</option>
//             <option value="expert">Expert Dev</option>
//           </Field>
//         </div>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Age</label>
//         <Field className="input" name="age" component="input" type="number" placeholder="Age"/>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="checkbox">
//           <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
//           Save Details
//         </label>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Message</label>
//         <Field className="textarea" name="message" component="textarea" />
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <button className="button is-link">Submit</button>
//       </div>
//     </div>

//   </form>;
// };


// export default SignInForm;

import React from 'react'

export default function CreateNewTask() {
  return (
    <div>CreateNewTask</div>
  )
}



