import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Card, Form, ProgressBar } from 'react-bootstrap';
import { File, FileType } from '../atoms/FileItem';
import { CreateFileDto } from '../../dtos/create-file.dto';

const CreateFolder = () => {

    const [folderName, setFolderName] = useState('');
    const [currentFolder, setCurrentFolder] = useState<File>({
        id: 0,
        name: "",
        fileType: FileType.other,
        folderId: 0
    });
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const handleFolderNameChange = async (e: any) => {
        setFolderName(e.target.value)
    }
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const createFileDto: CreateFileDto = {
            //TODO: Modify the DTO or make a CreateFolderDto to handle this case
            // originalFileName: folderName,
            parentFolderId: currentFolder.id,
        }

        try {
            const res = await axios.post('/files/upload', {
                headers: {
                    'Content-Type': 'text/json'
                },
                body: createFileDto,
                onUploadProgress: (progressEvent: any) => {
                    setUploadPercentage(
                        parseInt(
                            (Math.round((progressEvent.loaded * 100) / progressEvent.total)).toString()
                        )
                    );

                    // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });

            const { folderName, folderath } = res.data;

        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
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
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Folder Name" onChange={handleFolderNameChange} />
                        </Form.Group>
                        <Button type="submit">Create Folder</Button>
                    </Form>
                </Card.Body>
            </Card>
            <ProgressBar now={uploadPercentage} />

        </>
    );
};

export default CreateFolder;