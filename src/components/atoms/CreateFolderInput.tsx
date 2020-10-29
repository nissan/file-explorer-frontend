import React from 'react';
import { InputGroup, FormControl, Card } from 'react-bootstrap';

const CreateFolderInput = () => (
  <>
    <InputGroup className="mb-3">
      <Card>
        <Card.Title>
          <InputGroup.Prepend>
            <InputGroup.Text id="folder-name">Folder Name</InputGroup.Text>
          </InputGroup.Prepend>
        </Card.Title>
        <Card.Body>
          <FormControl
            placeholder="Folder Name"
            aria-label="Folder Name"
            aria-describedby="folder-name" />
        </Card.Body>
      </Card>

    </InputGroup>
  </>
)

export default CreateFolderInput;