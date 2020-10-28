import React from 'react';
import { Form } from 'react-bootstrap';

const UploadFileButton = () => (
    <>
        <Form>
            <Form.Group>
                <Form.File 
                id="upLoadFileControl" 
                label="Upload File" 
                />
            </Form.Group>
        </Form>
    </>
)

export default UploadFileButton;