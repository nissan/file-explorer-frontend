import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const sampleBreadCrumbData: breadCrumb[] = [
    {
        name: "root",
        link: "",
        active: false
    },
    {
        name: "Library",
        link: "https://getbootstrap.com/docs/4.0/components/breadcrumb/",
        active: false
    },
    {
        name: "Data",
        link: undefined,
        active: true
    }
]
type breadCrumb = {
    name: string;
    link?: string;
    active: boolean;
}
export type FolderBreadCrumbsProps = {
    crumbs: breadCrumb[]
}
export const FolderBreadCrumbs = ({ crumbs }: FolderBreadCrumbsProps) => (
    <Breadcrumb>
        {(crumbs.length === 0)
            ?
            <Breadcrumb.Item active={true}>root</Breadcrumb.Item>
            :

            crumbs.map((crumb) => {
                return crumb.active
                    ?
                    <Breadcrumb.Item active={true}>{crumb.name}</Breadcrumb.Item>
                    :
                    <Breadcrumb.Item
                        href={crumb.link}>{crumb.name}</Breadcrumb.Item>
            })

        }
    </Breadcrumb>
)

export default FolderBreadCrumbs;