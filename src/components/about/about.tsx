import React from 'react';
import { AboutContainer } from "./styles/about.styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from "react-bootstrap";

const About = () => {
    return (
        <AboutContainer className="bg--light" id="about">
            <Container fluid className="py-lg-24 px-lg-80 p-24">
                <div className="d-flex justify-content-center align-items-center">
                    <h1>About Me</h1>
                </div>
                <Row className="pt-24">
                    <Col lg={6} sm={12} className="pb-20">
                        <h3>Hello, I'm Passang Wangmo</h3>
                        <h4 className="color--gray-600 lh-base pe-12">
                            A teacher-trainee, currently pursuing Postgraduate Diploma in Education in Information Technology
                            at Samtse College of Education.
                        </h4>
                    </Col>
                    <Col lg={6} sm={12}>
                        <h3 className="d-flex align-items-center justify-content-center mb-12">
                            Qualification:
                        </h3>
                        <Row>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Qualification 1</Accordion.Header>
                                    <Accordion.Body>
                                        Qualification 1 details content here
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Qualification 2</Accordion.Header>
                                    <Accordion.Body>
                                        Qualification 2 details content here
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Qualification 3</Accordion.Header>
                                    <Accordion.Body>
                                        Qualification 3 details content here
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AboutContainer>
    );
};

export default About;
