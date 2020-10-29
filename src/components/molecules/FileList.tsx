import { faFile, faFileCode, faFileCsv, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { File, FileType, sampleFiles } from '../atoms/FileItem';

export const FileList = () => {
    const [loaded, setLoaded] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [selectedFolder, setSelectedFolder] = useState<File>()
    const [selectedFile, setSelectedFile] = useState<File>();
    useEffect(() => {
        async function fetchData() {
            if (!loaded) {
                await setFiles(sampleFiles);
                if (files) await setSelectedFolder(sampleFiles.filter(file => file.fileType === FileType.folder)[0]);
                if (selectedFolder) await setSelectedFile(sampleFiles.filter(file => file.folderId === selectedFolder.folderId)[0]);
                //     const res = await fetch("https://swapi.co/api/planets/4/");
                //     res
                //         .json()
                //         .then(res => setFiles(res))
                //         .catch(err => setSelectedFile(err));
                await setLoaded(true);
            }
        }
        fetchData();
    });
    return (
        <>
            <div>File List</div>
            <ListGroup>
                {files.map((file, index) => (
                    <ListGroup.Item key={index} active={selectedFile && (selectedFile.id === file.id)}
                        onClick={async(e: any) => {
                            await setSelectedFile(file);
                            alert(`Previewing ${selectedFile?.fileType.toString()}`)
                        }
                        }>
                        {file.fileType === FileType.csv && (<FontAwesomeIcon icon={faFileCsv} />)}
                        {file.fileType === FileType.geojson && (<FontAwesomeIcon icon={faFileCode} />)}
                        {file.fileType === FileType.folder && (<FontAwesomeIcon icon={faFolder}/>)}
                        {file.fileType === FileType.other && (<FontAwesomeIcon icon={faFile} />)}

                        <span>{file.name}</span>

                    </ListGroup.Item>
                ))}
            </ListGroup>

        </>
    )
}

export default FileList;