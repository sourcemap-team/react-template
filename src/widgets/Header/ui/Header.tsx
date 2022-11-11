import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BellOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

import { useSendLogoutMutation } from "features/auth/auth-by-username/model";

import { getUserData } from "entities/User";

import { APP_ROUTES } from "shared/config/routes";

import styles from "./Header.module.scss";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [sendLogout] = useSendLogoutMutation();

  const handleLogout = async () => {
    sendLogout();
    navigate(APP_ROUTES.LOGIN);
  };

  return (
    <Menu
      className={styles.menu}
      items={[
        {
          key: "profile",
          label: <h3 className={styles.menuItem}>Profile</h3>,
        },
        {
          key: "logout",
          label: <h3 className={styles.menuItem}>Logout</h3>,
          danger: true,
          onClick: () => handleLogout(),
        },
      ]}
    />
  );
};

export const Header = () => {
  const user = useSelector(getUserData);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.notifications}>
          <BellOutlined className={styles.icon} />
          <MailOutlined className={styles.icon} />
        </div>
        <Dropdown overlay={<DropdownMenu />} className={styles.dropdown}>
          <div className={styles.profile}>
            <Avatar
              size={40}
              icon={<UserOutlined />}
              className={styles.avatar}
            />
            <h3 className={styles.name}>
              {user?.firstName} {user?.lastName}
            </h3>
          </div>
        </Dropdown>
      </div>
      <hr className={styles.line} />
    </div>
  );
};
