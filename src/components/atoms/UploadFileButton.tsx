import React from 'react';
import { Button, Form } from 'react-bootstrap';

const UploadFileButton = () => (
    <>
        <Form onSubmit={()=>{alert('File upload detected')}}>
            <Form.Group>
                <Form.File 
                id="upLoadFileControl" 
                label="Upload File" 
                 
                />
            <Button type="submit">Upload</Button>
            </Form.Group>
        </Form>
    </>
)

export default UploadFileButton;