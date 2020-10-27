import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterLayout from '../organisms/FooterLayout';
import HeaderLayout from '../organisms/HeaderLayout';
import MainLayout from '../organisms/MainLayout';


const MainPageTemplate = () => (
    <Container fluid={true}>
        <Row>
            <Col>
                <HeaderLayout />
            </Col>
        </Row>
        <Row>
            <Col>
                <MainLayout />
            </Col>
        </Row>
        <Row>
            <Col>
                <FooterLayout />
            </Col>
        </Row>

    </Container>
)

export default MainPageTemplate;