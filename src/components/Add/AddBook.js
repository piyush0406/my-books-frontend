import React, {useRef} from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';

import {MdOutlineArrowBackIos} from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {RiUploadCloud2Fill} from 'react-icons/ri'

import NavElement from '../Header/index'
import { Button, Card } from 'react-bootstrap';

import './AddBook.css'

function AddBook() {

    const bookCover= useRef(null);
    const bookPDF= useRef(null);

    const handleClickCover = () => {
        bookCover.current.click();
        }
    
    const handleClickPDF = () => {
        bookPDF.current.click();
        }

    return (
        <div>
            <Helmet>
                <title>My Book | Add a Book</title>
            </Helmet>
            <NavElement/>
            <Container fluid>
           <div className='btn-top-add'>
           <Button onClick={(e) => {e.preventDefault(); window.location.href='/';}} className='btn-back mt-5 ml-5' variant="outline-primary"><MdOutlineArrowBackIos />&nbsp;Back to Home</Button>{' '}
           </div>
           <div className='content-add'>
            <Row>
                <Col className='mt-4' md={12} lg={6} xl={5} xxl={4}>
                    <div className='book-cover-add'>
                        <Card onClick={handleClickCover} className='mb-2 new-cover-add' border="none" style={{ width: '400px', height: '632px' }}>
                            <Card.Body className='new-card py-0 px-0 d-flex align-items-center justify-content-center'>
                                <div className='new-header'>+</div>
                                <div className='new-title'>Add a Book Cover</div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>                
                <Col className='mt-4' sm={12} lg={4} xl={5} xxl={6}>
                <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name of the Book<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control placeholder="Enter the published name" required/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Author of the Book<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control type="text" placeholder="Add all the authors comma seperated" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Book read time<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control type="text" placeholder="Add time in mins" required/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Book Details<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Should not be more than 300 words" required/>
                </Form.Group>
                
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload PDF<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Card className='new-cover-pdf' border="none" style={{ width: '360px', height: '180px' }}>
                        <Card.Body onClick={handleClickPDF} className='new-card-pdf py-0 px-0 d-flex align-items-center justify-content-center'>
                            <div className='icon-pdf'><RiUploadCloud2Fill/></div>
                            <div className='header-pdf my-2'><span>Browse</span> or drop file here</div>
                            <div className='title-pdf'>Supports: PDF; upto 10MB</div>
                        </Card.Body>
                    </Card>
                </Form.Group>
                <div className='hidden-input'>
                    <Form.Control ref={bookCover} type="file" accept="image/*" required/>
                    <Form.Control ref={bookPDF} type="file" accept="application/pdf" required/>
                </div>
                <Button variant="primary" type="submit">
                    Add a Book
                </Button>
                </Form>                    
                </Col>
            </Row>

            
            </div>
           </Container>
        </div>
    )
}

export default AddBook
