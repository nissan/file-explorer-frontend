import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import FileUpload from './FileUpload';
import CreateFolder from './CreateFolder';

const TopRowControls = () => (
    <>
        <Container fluid={true}>
            <Row>
                <Col md="12">
                    <FileUpload />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <CreateFolder />
                </Col>
            </Row>
        </Container>
    </>
)
export default TopRowControls;