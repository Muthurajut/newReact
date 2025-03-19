import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './ColorSection.css';

const ColorSection = () => {
    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col md={1}>

                    </Col>

                    <Col md={10}>
                    
                    <h2 className="redh2 text-center">WE THINK DIGITAL & BREATHE DESIGN</h2>
                    <p className="defpara text-center mt-3">At Bud, we go above & beyond the focus of an ordinary digital marketing agency in Bangalore, and stand with you as creative digital partners. Media-savvy marketers, creative writers & designers, tech heads & web experts come together to develop integrated communications & digital solutions that drive your business objectives forward on the #BudDigitalLane.</p>
                    <p className="defpara text-center">This multi-industry and multi-dimensional approach has helped us establish win-win relationships with our clients across industries - Real Estate, FMCG, Furniture, Broadband & Telecom, etc. elevating our stature as one of the best digital marketing agencies in Bangalore.</p>
                    <p className="defpara text-center">This line is added for fourth page and fourth changes</p>

                    </Col>

                    <Col md={1}>

                    </Col>

                </Row>
            </Container>

            <section className="clrsection py-5">
                <Container>
                    <Row>
                        <Col md={5}>
                            <img src="https://www.budindia.com/images/digital-marketing/img1.png" className='img-fluid' alt="sm-image" />
                        </Col>

                        <Col md={7} className="my-auto ps-5">
                            <h2 className="redh2">WE THINK DIGITAL & BREATHE DESIGN IS BEST FOR SEO</h2>
                            <p className="defpara mt-3">At Bud, we go above & beyond the focus of an ordinary digital marketing agency in Bangalore, and stand with you as creative digital partners. Media-savvy marketers, creative writers & designers, tech heads & web experts come together to develop integrated communications & digital solutions that drive your business objectives forward on the #BudDigitalLane.</p>
                            <p className="defpara">This multi-industry and multi-dimensional approach has helped us establish win-win relationships with our clients across industries - Real Estate, FMCG, Furniture, Broadband & Telecom, etc. elevating our stature as one of the best digital marketing agencies in Bangalore.</p>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ColorSection;