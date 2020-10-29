import React from 'react';

export enum FileType {
    csv, //= "CSV",
    geojson, // = "GeoJSON",
    folder, // = "Folder",
    other // = "Other"
}

export const sampleFiles: File[] = [
    {
        id: 1,
        name: "root",
        fileType: FileType.folder,
        folderId:1
    },
    {
        id: 2,
        name: "documents",
        fileType: FileType.folder,
        folderId: 1
    },
    {
        id: 3,
        name: "sales.csv",
        fileType: FileType.csv,
        folderId: 1
    },
    {
        id: 4,
        name: "geodata.json",
        fileType: FileType.geojson,
        folderId:2
    },
    {
        id: 5,
        name: "readme.md",
        fileType: FileType.other,
        folderId:2
    }
]


export type File = {
    id: number;
    name: string;
    fileType: FileType;
    folderId:number;

}

export const FileItem = ({id,name,fileType,folderId}:File) => {
    // const [file, setFile] = useState<File>({
    //     id:0,
    //     name:"",
    //     fileType:FileType.other,
    //     folderId:0
    // })
    // useEffect(()=>{

    // })
    return (
    <>
    {(fileType===FileType.csv) && <p>{name} - CSV</p>}
    {(fileType===FileType.geojson) && <p>{name} - Map</p>}
    {(fileType===FileType.folder) && <p>{name} - Folder</p>}
    {(fileType===FileType.other) && <p>{name} - Other</p>}
    </>
)}

export default FileItem;