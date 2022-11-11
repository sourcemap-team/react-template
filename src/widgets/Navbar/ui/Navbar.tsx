import React from "react";
import { Link } from "react-router-dom";

import { AppstoreOutlined } from "@ant-design/icons";

import { APP_ROUTES } from "shared/config/routes";

import styles from "./Navbar.module.scss";

const links = [
  {
    name: "Dashboard",
    to: APP_ROUTES.INDEX,
    icon: <AppstoreOutlined />,
  },
];

export const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.logoContainer}>
      <h2 className={styles.logo}>Admin.</h2>
    </div>
    {links.map((link) => (
      <Link key={link.name} to={link.to} className={styles.link}>
        <span className={styles.linkIcon}>{link.icon}</span>
        {link.name}
      </Link>
    ))}
  </div>
);
