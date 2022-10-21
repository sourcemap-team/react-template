import React from 'react';
import {
    Button, Form, Input,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { LoginSchema, useLoginUserMutation } from 'features/auth/auth-by-username';

import { APP_ROUTES } from 'shared/config/routes';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const onFinish = (values: LoginSchema) => {
        loginUser(values);
    };

    return (
        <Form
            name="login"
            className={styles.form}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
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
                <Link to={APP_ROUTES.FORGOT}>
                    Forgot password
                </Link>
                <Link to={APP_ROUTES.REGISTER} className={styles.register}>Register</Link>
            </Form.Item>
        </Form>
    );
};
