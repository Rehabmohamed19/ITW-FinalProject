import * as React from 'react';
import { useEffect, createContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from "../store";
import { getTodoAsync } from '../features/API/apiSlice';
import "../App.css"
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import logo from '../images/Group 16 (1).png'
import { Link } from 'react-router-dom';
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
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Box, Typography, Button } from "@mui/material"
import {addCardAsync} from '../features/API/ListSlice'
import toggle from '../images/Group 8.png'
import sun from '../images/Combined Shape.png'
import moon from '../images/Combined Shape (1).png'



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

type FormValues = {
  name: string,
  desc: string,
  status: string,
}

export default function PersistentDrawerLeft() {
  const [openModal, setOpenModal] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [themes, setTheme] = useState('light');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [board, setBoards] = useState<any[]>([])


  const dispatch: AppDispatch = useAppDispatch();

  const todos = useSelector((state: any) => state.todos);
  const lists = useSelector((state: any) => state.lists);


  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch])

  const { reset } = useForm()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()
  const [data, setData] = useState<FormValues>({ name: "", desc: "" , status:""})


  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setData(data);
    console.log(data);
    dispatch(addCardAsync(data))

    reset({
      name: "",
      desc: "",
      status:"",
    });
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
    <>
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
                <Box sx={style} >
                  <button className='d-flex bg-primary mb-4 align-items-center justify-content-center' style={{ border: "none", color: "white", borderRadius: "20px", width: "40px", padding: "5px" }} onClick={handleClose}>X</button>
                  <h2>Add New Task</h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className="form-container" sx={{ display: "flex", flexDirection: "column" }}>
                      <TextField className="input-field" placeholder='Title' {...register("name")} />
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
                          {lists && lists.map((list:any , index:number) => (
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

                    </Box>
                  </form>



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
            <List>
          <Link to="/contact">
              <List>
              {todos && todos.map((text: { name: string }, index: number) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ViewQuiltIcon />
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
              </List>
          </Link>

              <div style={{ height: "200px" }}></div>

              <div className="mx-0 d-flex justify-content-center flex-column">
                <div className='mx-auto d-flex justify-content-center ' style={{gap:"10px"}} >
                <img onClick={toggleTheme} src={sun} alt="" width={"30px"} height={"30px"} />
                  <img onClick={toggleTheme} src={toggle} alt="" width={"60px"} height={"30px"} />
                  <img onClick={toggleTheme} src={moon} alt="" width={"30px"} height={"30px"} />

                </div>
                <div className='d-flex flex-row mt-3'>
                  <VisibilityOffIcon className='ms-2 ' sx={{color:"grey"}} />
                  <Typography onClick={handleDrawerClose} sx={{color:"grey"}} >Hide Sidebar</Typography>
                </div>
              </div>
            </List>
          {/* </Link> */}

        </Drawer>
        <Main open={open}>

          {/* ######################################################## */}
          {/* IMPOOOOO */}
          <DefaultScreen />
          {/* IMPOOOO */}
          {/* ######################################################## */}


        </Main>
      </Box>
    </>
  );
}