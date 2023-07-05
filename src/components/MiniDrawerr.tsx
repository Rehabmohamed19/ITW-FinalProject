import * as React from 'react';
import { useEffect, createContext, useState } from "react";
import "../App.css"
// import { useForm } from "react-hook-form";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import logo from '../images/Group 16 (1).png'
import { Link } from 'react-router-dom';
// import handleOpen from './CreateNewTask';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import options from '../images/Group 5.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import eye from '../images/eye.png'
import DefaultScreen from './DefaultScreen';
import { Label } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';





const drawerWidth = 240;

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

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}
const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [openModal, setOpenModal] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [themes, setTheme] = useState('light');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [board, setBoards] = useState<any[]>([])
  // const [tfValue, setTFValue] = useState("Original Val");
  // const [descValue, setdescValue] = useState("Original Val");
  // const [statusValue, setstatusValue] = useState("Original Val");



  const fetchBoards = () => {
      fetch("https://api.trello.com/1/members/me/boards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97")
          .then(response => {
              return response.json()
          })
          .then(data => {
              setBoards(data)
              // console.log(data)
          })
  }

  useEffect(() => {
      fetchBoards()
  }, [])


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const toggleTheme = () => {
    if (themes === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = themes;
  }, [themes]);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className={`App ${theme}`}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ backgroundColor: "white", mr: 2, ...(open && { display: 'none' }) }}

          >
            <img src={logo} />
          </IconButton>

          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
            <Typography variant="h6" component="div" sx={{ color: "black", paddingTop: "8px" }}>
              Platform Launch
            </Typography>
            <button color="inherit" onClick={handleOpen} className='add-task-btn'>
              + Add New Task
            </button>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src={logo} />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <h6 className='mt-4 ms-3' >ALL BOARDS (3)</h6>
        <Link to="/contact">
          <List>
            {board && board.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton >
                  <ListItemIcon >
                    <ViewQuiltIcon />
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <div style={{ height: "200px" }}></div>

            <div className="mx-0 d-flex justify-content-center flex-column">
              <button onClick={toggleTheme}>Toggle Theme</button>
              <div className='d-flex flex-row'>
                <VisibilityOffIcon className='me-3' />
                <Typography onClick={handleDrawerClose} >Hide Sidebar</Typography>
              </div>
            </div>
          </List>
        </Link>

      </Drawer>
      <Main open={open}>

        {/* ######################################################## */}
        {/* IMPOOOOO */}
        {/* <DefaultScreen /> */}
        {/* IMPOOOO */}
        {/* ######################################################## */}


      </Main>
    </Box>
  );
}