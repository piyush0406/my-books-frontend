import React from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {RiBookMarkFill} from 'react-icons/ri'

import './index.css'

function HeroSection() {
  return (
    <Container fluid>
        <div className='mt-5 mx-5 hero-header'>
            <RiBookMarkFill/>&nbsp;My Books
        </div>        
        <div className='mr-1 mt-3 hero-cards'>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={6} className="g-0">
        {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
            <Card className='mb-2 mx-5' border="light" style={{ width: '240px', height: '405px' }}>
            <a href="/viewbook">
            <Card.Img variant="top" width='240px' height='332px' src="https://1.bp.blogspot.com/-BYonzSS5IQg/VVnWtaZYLII/AAAAAAAACI4/2NLQXx0Jaso/s1600/Book-Review-The-Martian.jpg" />
            <Card.Body className='px-0 py-0'>
                <Card.Title className='my-0'>The Martian</Card.Title>
                <Card.Text>Andy Weir</Card.Text>
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