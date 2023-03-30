import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {RiBookMarkFill} from 'react-icons/ri'

import './index.css'
import axios from 'axios';


function HeroSection() {
    const [bookData,setBookData]=useState([])
    useEffect(() => {
    fetchData()
    }, [])
    
    const fetchData = () => {
        axios
        .get('http://localhost:5000/book/getBook')
        .then( async(res) => {
            setBookData(res.data)
        });
    }

    
    
  return (
    <Container fluid>
        <div className='mt-5 mx-5 hero-header'>
            <RiBookMarkFill/>&nbsp;My Books
        </div>        
        <div className='mr-1 mt-3 hero-cards'>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={6} className="g-0">
        {bookData?.books?.map((item, idx) => (
            <Col>
            <Card className='mb-2 mx-5' border="light" style={{ width: '240px', height: '405px' }}>
            <a href={`/viewbook/${item._id}`}>
            <Card.Img variant="top" width='240px' height='332px' src={`http://localhost:5000/${item.cover}`} />
            <Card.Body className='px-0 py-0'>
                <Card.Title className='my-0'>{item.title}</Card.Title>
                <Card.Text>{item.writer}</Card.Text>
            </Card.Body>
            </a> 
            </Card>           
            </Col>
        ))}
        <Card className='mb-2 mx-5 new-book' border="none" style={{ width: '240px', height: '332px' }}>
            <a href="/addbook">
            <Card.Body className='new-card px-0 d-flex align-items-center justify-content-center'>
                <div className='new-header'>+</div>
                <div className='new-title'>Add a Book</div>
            </Card.Body>
            </a>
        </Card>
        </Row>
        </div>
    </Container>
    )
}

export default HeroSection