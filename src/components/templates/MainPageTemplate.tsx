import React, { ReactNode } from 'react';

type PageLayoutProps = {
    headerLayout?: ReactNode,
    mainLayout: ReactNode,
    footerLayout?:ReactNode
}

const PageLayout = ({headerLayout,mainLayout, footerLayout}:PageLayoutProps) => (
    <div>
        <header>{headerLayout}</header>
        <main>{mainLayout}</main>
        <footer>{footerLayout}</footer>
    </div>
)

export default PageLayout;