import React, { ReactNode } from "react";
import { Layout as LayoutComponent } from "antd";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const { Content, Sider, Header } = LayoutComponent;

const Layout = ({
  children,
  sider,
  header,
}: {
  children?: ReactNode;
  sider?: ReactNode;
  header?: ReactNode;
}) => (
  <LayoutComponent
    hasSider
    className={styles.layout}
    style={{ background: "var(--white)" }}
  >
    <Sider
      style={{
        padding: 0,
        background: "var(--dark)",
        color: "transparent",
      }}
      className={styles.sider}
    >
      {sider}
    </Sider>
    <LayoutComponent style={{ background: "var(--white)" }}>
      <Header
        style={{
          padding: 0,
          background: "transparent",
          color: "transparent",
          height: "auto",
        }}
      >
        {header}
      </Header>
      <Content className={styles.content}>{children || <Outlet />}</Content>
    </LayoutComponent>
  </LayoutComponent>
);

const Additional = ({ children }: { children?: ReactNode }) => (
  <LayoutComponent
    className={styles.additional}
    style={{ background: "var(--white)" }}
  >
    {children || <Outlet />}
  </LayoutComponent>
);

Layout.Additional = Additional;

export { Layout };
