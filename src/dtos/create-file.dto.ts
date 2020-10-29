import { FileType } from "../components/atoms/FileItem";

export type CreateFileDto = {
  fileName: string;
  originalFileName: string;
  fileType: FileType;
  parentFolderId: number;
};
