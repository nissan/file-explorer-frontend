import React from 'react';

export enum FileItemType {
    csv,json,folder
}
type FileItemProps = {
    name:string;
    type: FileItemType
}
export const FileItem = (props:FileItemProps) => {
    const {name, type} = props;
    return (
    <>
    {(type===FileItemType.csv) && <p>CSV</p>}
    {(type===FileItemType.json) && <p>Map</p>}
    {(type===FileItemType.folder) && <p>Folder</p>}
    <p>{name}</p>
    </>
)}

export default FileItem;