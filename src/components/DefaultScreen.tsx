import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eye from '../images/eye.png'
import { useState , useEffect } from 'react';


export default function DefaultScreen() {
    const [open, setOpen] = useState(false);
  //   const [users, setUsers] = useState<any[]>([])

  // const fetchUserData = () => {
  //   fetch("https://api.trello.com/1/board/4d5ea62fd76aa1136000000c?key=b620a81b756337cbe6af1ccc479dfca2")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setUsers(data)
  //     })
  // }
  // useEffect(() => {
  //   fetchUserData()
  // }, [])

    const handleDrawerOpen = () => {
      console.log(setOpen(true));
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
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
          <div style={{ height: "150px" }}>

          </div>
          <Row>
            <Col>
              <button onClick={handleDrawerClose} style={{ backgroundColor: "#635FC7", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", border: "none" }} >
                <img src={eye} />
              </button>
            </Col>
          </Row>

          <div>
      
    </div>
        </Container>
</>
  )
}
