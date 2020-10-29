export type FileEntity = {
    id: number;
    originalFileName: string;
    storedFileName: string;
    fileTypeEntityId: number;
    parentFolderId: number;
    dateCreated: Date;
    dateLastUpdated: Date;
    isDeleted:boolean;
}