import React, {useState} from 'react';
import {Treebeard} from 'react-treebeard';
import TreeStyle from './TreeStyle';

const sampleData = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};


const FolderTreeView = () => {
    const [data, setData] = useState(sampleData);
    const [cursor, setCursor] = useState({active:false});
    
    const onToggle = (node:any, toggled:any) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setData(Object.assign({}, data))
    }
    
    return (
       <Treebeard data={data} onToggle={onToggle} style={TreeStyle}/>
    )
}

export default FolderTreeView;