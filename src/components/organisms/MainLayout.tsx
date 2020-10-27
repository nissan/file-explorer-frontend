import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopRowControls from '../molecules/TopRowControls';

const MainLayout = () => (
    <Container fluid={true}>
        <Row>
            <Col>
                <TopRowControls />
            </Col>
        </Row>
        <Row>
            <Col md="2">
                <div>
                    This is the left menus
                </div>
            </Col>
            <Col md="10">
                <div>
                    This is the main area text
                </div>
            </Col>
        </Row>
    </Container>

)

export default MainLayout;