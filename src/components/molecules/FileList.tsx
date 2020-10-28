import React, { useEffect, useState } from 'react';

export const sampleFiles: File[] = [
    {
        id: "1",
        name: "File1",
        link: "File1"
    },
    {
        id: "2",
        name: "File2",
        link: "File2"
    },
    {
        id: "3",
        name: "File3",
        link: "File3"
    }
]

type File = {
    id: string;
    name: string;
    link: string;

}

export const FileList = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>({
        id: "",
        name: "",
        link: ""
    });
    useEffect(() => {
        async function fetchData() {
            setFiles(sampleFiles);
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
                        {(selectedFile.id === file.id)
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