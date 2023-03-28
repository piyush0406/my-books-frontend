import React, {useRef, useState} from 'react'

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

import Swal from 'sweetalert2';
import axios from 'axios';

import './AddBook.css'

function AddBook() {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [pdf, setPdf] = useState('');
    const [writer, setWriter] = useState('');
    const [readTime, setReadTime] = useState('');
    const [details, setDetails] = useState('');

    function onImageChange(e){
        // setCover([e.target.files][0])
        const img = {
            // preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          }
          setCover(img)
          console.log("Image", img);
    }
    
    function onPDFChange(e){
        // setPdf([e.target.files])
        const file = {
            // preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          }
          setPdf(file)
          console.log("PDF", file);
    }

    
    const createBook =  async(e) => {
        e.preventDefault()
        // const Data={"title":title,"cover":cover,"pdf":pdf,"writer":writer,"readTime":readTime,"details":details}
        // console.log("hello", Data);
        const formData = new FormData();

        formData.append("title",title);
        formData.append("cover",cover.data);
        formData.append("pdf",pdf.data);
        formData.append("writer",writer);
        formData.append("readTime",readTime);
        formData.append("details",details);
        
        console.log([...formData]);

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        const response = await axios.post("http://localhost:5000/book/createBook" , formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        console.log(response.data);
        // axios
        //   .post('http://localhost:5000/book/createBook' , Data)
        //   .then( async res => {
        //     await Swal.fire({
        //       icon: 'success',
        //       title: 'Book Created!',
        //       text: 'Book was added successfully.'
        //     })
        //     .then((result) => {
        //       if (result.isConfirmed){
        //         window.location.href='/';
        //       }
        //     })
        //   })
        //   .catch(err => {
        //     console.log(err);
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Oops...',
        //       text: 'Something went wrong!',
        //       footer: JSON.stringify(err.response.data)
        //     })
        //   });
      }

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
                <Form action="#" enctype="multipart/form-data" method="post">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name of the Book<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter the published name" required/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Author of the Book<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control type="text" onChange={e => setWriter(e.target.value)} value={writer} placeholder="Add all the authors comma seperated" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Book read time<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control type="text" onChange={e => setReadTime(e.target.value)} value={readTime} placeholder="Add time in mins" required/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Book Details<span><AiOutlineInfoCircle/></span></Form.Label>
                    <Form.Control as="textarea" rows={4} onChange={e => setDetails(e.target.value)} value={details} placeholder="Should not be more than 300 words" required/>
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
                    {/* <Form.Control accept="image/*" /> */}
                    <input name="cover" ref={bookCover} type="file" onChange={onImageChange} accept="image/png, image/jpeg"/>
                    <input name="pdf" ref={bookPDF} type="file" onChange={onPDFChange} accept="application/pdf" />
                    {/* <Form.Control  accept="application/pdf" /> */}
                </div>
                <Button onClick={createBook} variant="primary" type="submit">
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
