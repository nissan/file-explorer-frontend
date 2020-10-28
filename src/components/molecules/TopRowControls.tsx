import React from 'react';
import UploadFileButton from '../atoms/UploadFileButton';
import CreateFolderButton from '../atoms/CreateFolderButton';
import { Container, Row, Col } from 'react-bootstrap';
import CreateFolderInput from '../atoms/CreateFolderInput';

const TopRowControls = () => (
    <>
        <Container fluid={true}>
            <Row>
                <Col md="2">
                    <UploadFileButton />
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <CreateFolderInput />
                </Col>
                <Col md="2">
                    <CreateFolderButton />
                </Col>
            </Row>
        </Container>
    </>
)
export default TopRowControls;