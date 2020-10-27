import React from 'react';
import Title from '../molecules/Title';
import MainPageTemplate from '../templates/MainPageTemplate';

export const FolderExplorerPage = () => (
<MainPageTemplate 
    headerLayout={<Title heading="Welcome to Folder Explorer" />}
    mainLayout={ <p>This is the body</p>
    
} />
    
)

export default FolderExplorerPage;