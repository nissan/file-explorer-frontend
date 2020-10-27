import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const CreateFolderInput = () => (
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="folder-name">Folder Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Folder Name"
      aria-label="Folder Name"
      aria-describedby="folder-name"
    />
  </InputGroup>
)

export default CreateFolderInput;