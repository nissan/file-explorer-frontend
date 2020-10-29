import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Card, Form, ProgressBar } from 'react-bootstrap';
import { CreateFileDto } from '../../dtos/create-file.dto';
import { FileEntity } from '../../entities/FileEntity';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e: any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        const createFileDto:CreateFileDto = {
            originalName: fileName,
            parentFolderId: 1
        }
        formData.append('originalName', createFileDto.originalName);
        formData.append('parentFolderId', createFileDto.parentFolderId.toString());

        try {
            const res = await axios.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    setUploadPercentage(
                        parseInt(
                            (Math.round((progressEvent.loaded * 100) / progressEvent.total)).toString()
                        )
                    );

                    // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });

            const { id } = res.data as FileEntity;

            await setFile('');
            await setMessage(`File Uploaded. Assigned id of ${id}`);
        } catch (err) {
            if (err.response.status === 500) {
                setMessage(`There was a problem with the server: ${err.response.data.message}`);
            } else {
                setMessage(err.response.data.message);
            }
        }
    };

    return (
        <>
        <Card>
            <Card.Title>
                {message ? <Alert variant="success"> {message} </Alert> : null}
            </Card.Title>
            <Card.Body>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                <Form.File id="customFile" label={fileName?fileName:"Select File"} onChange={onChange}/>
                </Form.Group>
                <Button type="submit">Upload</Button>
                <ProgressBar now={uploadPercentage} />
            </Form>
            </Card.Body>
        </Card>
            
            
            
        </>
    );
};

export default FileUpload;