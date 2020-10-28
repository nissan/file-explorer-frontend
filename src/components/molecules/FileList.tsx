import React, { useEffect, useState } from 'react';
import { File, FileType, sampleFiles } from '../atoms/FileItem';

export const FileList = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [selectedFolder, setSelectedFolder] = useState<File>()
    const [selectedFile, setSelectedFile] = useState<File>();
    useEffect(() => {
        async function fetchData() {
            setFiles(sampleFiles);
            if (files) setSelectedFolder(sampleFiles.filter(file => file.fileType === FileType.folder)[0]);
            if (selectedFolder) setSelectedFile(sampleFiles.filter(file => file.folderId === selectedFolder.folderId)[0]);
            //     const res = await fetch("https://swapi.co/api/planets/4/");
            //     res
            //         .json()
            //         .then(res => setFiles(res))
            //         .catch(err => setSelectedFile(err));
        }
        fetchData();
    });
    return (
        <>
            <div>File List</div>
            <ul>
                {files.map(file => (
                    <li key={file.id} onClick={(e: any) => {
                        setSelectedFile(file)
                    }
                    }>
                        {selectedFile && (selectedFile.id === file.id)
                            ? <b>{file.name}</b>
                            :
                            <span>{file.name}</span>
                        }

                    </li>
                ))}
            </ul>
        </>
    )
}

export default FileList;