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

export default function PlatformLaunch() {

    const [users, setUsers] = useState<any[]>([])
    const [lists, setLists] = useState<any[]>([])
    const [board, setBoards] = useState<any[]>([])
    const [card, setCards] = useState<any[]>([])


    const fetchUserData = () => {
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
        fetchUserData()
    }, [])

    const fetchList = () => {
        if (board && board[0]) {
            fetch("https://api.trello.com/1/boards/" + board[0].id + "/lists?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97")
                .then(response => {
                    return response.json()

                })
                .then(data => {
                    setLists(data)
                    console.log(data)
                })
        }
    }
    useEffect(() => {
        fetchList()
    }, [board])


    const fetchCard = () => {
        if (lists && lists[0]) {
            lists.map(list => {
                fetch("https://api.trello.com/1/lists/"+ list.id +"/cards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97")
                .then(response => {
                        return response.json()
    
                    })
                    .then(data => {
                        setCards(data)
                        console.log(data)
                    })

            })
        }
    }
    useEffect(() => {
        fetchCard()
    }, [board])

    return (
        <>

            <Container className='mt-5'>
                <Row>
                    <Col style={{ display: "flex", flexDirection: "column" }}>
                        <div className='d-flex justify-content-between' >

                            {lists.map((list, index) => {
                                return (
                                    <div key={index}>
                                    <div className='d-flex ' >
                                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#49C4E5", margin: "2px 5px 0 0" }}></span>
                                        <span style={{ color: "black" }} >{list.name}</span>
                                    </div>
                                    <Cards list={list}/>
                                    </div>
                                )
                            })}
                        </div>
                        {/* {card && card.map((user, index) => {
                            return (
                                <div key={index}>
                                    <Card className='mt-3' sx={{ maxWidth: 150 }} >
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {user.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            )
                        })} */}

                    </Col>

                </Row>
            </Container>

        </>
    )
}




