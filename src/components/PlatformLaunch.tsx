import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { CardActionArea } from '@mui/material';
import Cards from './Cards';
import { useSelector , useDispatch} from 'react-redux';

import { useAppDispatch, AppDispatch } from "../store";
import { getListAsync } from '../features/API/ListSlice';
 



export default function PlatformLaunch() {

    const [board, setBoards] = useState<any[]>([])
    const [card, setCards] = useState<any[]>([])
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  

    const dispatch: AppDispatch = useAppDispatch();

    const lists= useSelector((state:any)=> state.lists);
  
    useEffect(()=>{
        dispatch(getListAsync());
    },[dispatch])



    return (
        <>

            <Container className='mt-5'>
                <Row>
                    <Col style={{ display: "flex", flexDirection: "column" }}>
                        <div onClick={handleOpen} className='d-flex justify-content-between' >
                            {lists && lists.map((text: { name: string }, index: number) => {
                                return (
                                    <div key={index}>
                                    <div className='d-flex ' >
                                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#49C4E5", margin: "2px 5px 0 0" }}></span>
                                        <span style={{ color: "black" }} >{text.name}</span>
                                    </div>
                                    <Cards list={text}/>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}




