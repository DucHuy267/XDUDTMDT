import React, { useState } from "react";
import { WrapperHeader } from './style';
import { Button, Form, Input, Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from "../TableComponent/TableComponent"; // Đảm bảo đường dẫn đúng
import { createUser } from '../../services/UserSevices';

const AdminUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateUser, setStateUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        role: '',
        avatarUrl: '',
    });

    const handleCancel = () => { setIsModalOpen(false); };

    const onFinish = () => {
        createUser(stateUser);
        console.log('User created:', stateUser);
    };

    const handleOnchange = (e) => {
        setStateUser({
            ...stateUser,
            [e.target.name]: e.target.value
        });
    };

    const handleOnchangeAvatar = (e) => {
        const url = e.target.value;
        setStateUser({
            ...stateUser,
            avatarUrl: url,
        });
    };

    return (
        <div>
            <WrapperHeader> Quản Lý Người Dùng </WrapperHeader>
            <div style={{ padding: '10px' }}>
                <Button
                    style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{ fontSize: '40px' }} />
                </Button>
            </div>

            {/* Bảng người dùng */}
            <div style={{ marginTop: '20px' }}>
                <TableComponent />
            </div>

            {/* Hộp thoại để tạo người dùng mới */}
            <Modal
                title="Tạo người dùng"
                open={isModalOpen}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the user name!' }]}
                    >
                        <Input value={stateUser.name} onChange={handleOnchange} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input the email!' }]}
                    >
                        <Input value={stateUser.email} onChange={handleOnchange} name="email" />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input the phone number!' }]}
                    >
                        <Input value={stateUser.phone} onChange={handleOnchange} name="phone" />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <Input value={stateUser.address} onChange={handleOnchange} name="address" />
                    </Form.Item>

                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: 'Please input the role!' }]}
                    >
                        <Input value={stateUser.role} onChange={handleOnchange} name="role" />
                    </Form.Item>

                    <Form.Item
                        label="Avatar URL"
                        name="avatarUrl"
                        rules={[{ required: true, message: 'Please input the avatar URL!' }]}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Input onChange={handleOnchangeAvatar} style={{ flex: 1 }} />
                            {stateUser.avatarUrl && (
                                <img
                                    src={stateUser.avatarUrl}
                                    alt="avatar"
                                    style={{
                                        height: '80px',
                                        width: '80px',
                                        borderRadius: '20%',
                                        marginLeft: '5px'
                                    }}
                                />
                            )}
                        </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AdminUser;
