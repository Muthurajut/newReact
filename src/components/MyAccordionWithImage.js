import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './MyAccordionWithImage.css';
import imgd from '../assets/images/imgtwo22.jpg'


const MyAccordionWithImage = () => {
    return (
        <Container className="py-5">
            <Row>

                <Col md={6} className='p-0 my-auto'>
                    <img
                        src={imgd}  // Replace this with your actual image URL or import
                        alt="Example"
                        className="img-fluid"
                    />
                </Col>

                <Col md={6} className='my-auto'>

                    <Accordion defaultActiveKey="0" className='mainacc'>
                        <Accordion.Item eventKey="0" className='accitm'>
                            <Accordion.Header className='acched'>First try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the first item's accordion body. It is shown by default.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className='mt-3'>
                            <Accordion.Header>Second try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the second item's accordion body. Click to toggle visibility.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className='mt-3'>
                            <Accordion.Header>Third try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the third item's accordion body. Add any relevant content.
                            </Accordion.Body>
                        </Accordion.Item>

                        
                        <Accordion.Item eventKey="3" className='mt-3'>
                            <Accordion.Header>Third try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the third item's accordion body. Add any relevant content.
                            </Accordion.Body>
                        </Accordion.Item>

                        
                        <Accordion.Item eventKey="4" className='mt-3'>
                            <Accordion.Header>Third try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the third item's accordion body. Add any relevant content.
                            </Accordion.Body>
                        </Accordion.Item>

                        
                        <Accordion.Item eventKey="5" className='mt-3'>
                            <Accordion.Header>Third try</Accordion.Header>
                            <Accordion.Body className='accbody'>
                                This is the third item's accordion body. Add any relevant content.
                            </Accordion.Body>
                        </Accordion.Item>

                       
                    </Accordion>
                </Col>


            </Row>
        </Container>
    );
};

export default MyAccordionWithImage;
