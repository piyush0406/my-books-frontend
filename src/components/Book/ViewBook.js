import React, {useEffect, useState} from 'react'

import NavElement from '../Header/index'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Helmet } from 'react-helmet';

import ReactStars from "react-rating-stars-component";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';


import {MdOutlineArrowBackIos} from 'react-icons/md'
import {FaStar} from 'react-icons/fa'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

import './ViewBook.css'
import { Button, Image, ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewBook() {

    const { _id } = useParams();

    const [bookDetail,setBookDetail]=useState([])

    useEffect(() => {
        fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const fetchData = () => {
        axios
        .get(`http://localhost:5000/book/getBookById/${_id}`)
        .then( async(res) => {
            console.log("res.data : ",res.data);

            // const data =await res.data?.books?.map(async(item)=>{
            //     console.log(item.cover);
            //     const re=await import `${item.cover}`
            //     return{ ...item, cover: re.default}
            // })
            console.log("Data mod : ",res.data);
            setBookDetail(res.data.book[0])
        });
      }

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack(){
        changePage(-1)
    }

    function changePageNext(){
        changePage(+1)
    }

    console.log("ide",bookDetail);

    return (
        <div>
            <Helmet>
                <title>My Book | Book Details</title>
            </Helmet>
           <NavElement />           
           <Container fluid>
           <div className='btn-top'>
           <Button onClick={(e) => {e.preventDefault(); window.location.href='/';}} className='btn-back mt-5 ml-5' variant="outline-primary"><MdOutlineArrowBackIos />&nbsp;Back to Home</Button>{' '}
           </div>
           <div className='content'>
            <Row>
                <Col className='mt-4' md={12} lg={6} xl={5} xxl={4}>
                    <div className='book-cover'>
                    <Image
                        src={bookDetail.cover}
                    />
                    </div>
                </Col>                
                <Col className='mt-4' sm={12} lg={4} xl={5} xxl={6}>
                    <div>
                        <div className='book-header'>{bookDetail.title}</div>
                        <div className='book-writer'>{bookDetail.writer}</div>
                        <div className='book-read-time'>Book Read Time: {bookDetail.readTime} mins</div>
                        <div className='book-detail'>{bookDetail.details}</div>
                        <div className='book-rate mt-5'>
                            <Row md={2}>
                                <Col md={5}>
                                    <div className='rating-bar'>
                                        <div>
                                            <div className='rate-header'>
                                                Summary
                                            </div>
                                            <Row md={2} className='mt-2'>
                                                <Col md={8}>
                                                    <div className='rate-meter'>5<ProgressBar variant="warning" now={60} /></div>
                                                    <div className='rate-meter'>4<ProgressBar variant="warning" now={50} /></div>
                                                    <div className='rate-meter'>3<ProgressBar variant="warning" now={40} /></div>
                                                    <div className='rate-meter'>2<ProgressBar variant="warning" now={30} /></div>
                                                    <div className='rate-meter'>1<ProgressBar variant="warning" now={20} /></div>
                                                </Col>
                                                <Col md={4}>
                                                    <div>
                                                        <div>
                                                            <div className='overall-rating'>
                                                                4.5 <span><FaStar /></span>
                                                            </div>
                                                            <div className='total-rating'>
                                                                274 Reviews
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='overall-rating'>
                                                                88%
                                                            </div>
                                                            <div className='total-rating'>
                                                                Recommended
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='star-heading'>
                                        Rating
                                    </div>
                                    <div>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={40}
                                        activeColor="#ffd700"
                                    />
                                    </div>
                                    <div className='star-btn'>
                                        <Button className='btn-back mt-5' variant="outline-primary">Rate this Book</Button>{' '}                                        
                                    </div>
                                </Col>
                            </Row>
                        
                        </div>
                        <div className='book-read'><Button onClick={handleShow} className='btn-back mt-5' variant="primary">Read this Book</Button>{' '}</div>
                    </div>
                </Col>
            </Row>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Book Name PDF</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="">
                    <center>
                    <Document file={bookDetail.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="600" pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>                    
                    <p> Page {pageNumber} of {numPages}</p>
                    { pageNumber > 1 && 
                    <Button variant='outline-dark' size="sm" onClick={changePageBack}><AiOutlineArrowLeft/></Button>
                    }
                    {
                    pageNumber < numPages &&
                    <Button className='mx-2' variant='outline-dark' size="sm" onClick={changePageNext}><AiOutlineArrowRight/></Button>
                    }
                    </center>           
                </div>                   
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
            </div>
           </Container>
        </div>
    )
}
