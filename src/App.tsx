import React from 'react';
import './styles/App.css';
import { FolderExplorerPage } from './components/pages/FolderExplorerPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faFolder, faFolderOpen, faFolderPlus, faFileExcel, faFileCsv } from '@fortawesome/free-solid-svg-icons'

library.add(faFile, faFolder, faFolderOpen, faFolderPlus, faFileExcel, faFileCsv)

const App = ()=> (
<FolderExplorerPage />
  )

export default App;
