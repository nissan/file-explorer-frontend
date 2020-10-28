import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FolderTreeView from '../atoms/FolderTreeView';
import FileList from '../molecules/FileList';
import { FolderBreadCrumbs, sampleBreadCrumbData } from '../molecules/FolderBreadCrumbs';
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
                    <FolderTreeView />
                </div>
            </Col>
            <Col md="10">
                <Row>
                    <Col>
                        <FolderBreadCrumbs crumbs={
                            sampleBreadCrumbData
                        } />
                    </Col>
                </Row>
                <Row>
                    <Col md="10">
                        <div>
                            <FileList />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>

)

export default MainLayout;