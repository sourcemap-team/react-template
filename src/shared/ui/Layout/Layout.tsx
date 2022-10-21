import React, { ReactNode } from 'react';
import { Layout as LayoutComponent } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

const {
    Content, Sider,
} = LayoutComponent;

const Layout = ({ children } : { children?: ReactNode }) => (
    <LayoutComponent hasSider>
        <Sider className={styles.sider}>Sider</Sider>
        <LayoutComponent className={styles.layout}>
            <Content className={styles.content}>
                {children || <Outlet />}
            </Content>
        </LayoutComponent>
    </LayoutComponent>
);

const Additional = ({ children } : { children?: ReactNode }) => (
    <LayoutComponent className={styles.additional}>
        {children || <Outlet />}
    </LayoutComponent>
);

Layout.Additional = Additional;

export {
    Layout,
};
