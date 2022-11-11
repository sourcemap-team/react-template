import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import {
  authActions,
  LoginSchema,
  useLoginMutation,
} from "features/auth/auth-by-username/model";

import { APP_ROUTES } from "shared/config/routes";
import usePersist from "shared/lib/hooks/usePersist";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [persist, setPersist] = usePersist();

  const onFinish = async (values: LoginSchema) => {
    try {
      const { accessToken } = await login(values).unwrap();
      dispatch(authActions.setCredentials({ accessToken }));
      navigate(APP_ROUTES.HOME);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangePersist = () => {
    setPersist(!persist);
  };

  return (
    <Form name="login" className={styles.form} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.button}
          loading={isLoading}
        >
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Checkbox checked={persist} onClick={handleChangePersist}>
          Remember me
        </Checkbox>
        <Link to={APP_ROUTES.FORGOT} className={styles.forgot}>
          Forgot password
        </Link>
      </Form.Item>
    </Form>
  );
};
