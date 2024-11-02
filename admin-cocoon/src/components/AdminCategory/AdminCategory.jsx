import React, { useState } from "react";
import { WapperHeader } from "./style";
import { Button, Form, Input, Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import TableConponent from "../TableComponent/TableComponent";
import { createtProduct } from "../../services/CategorySevices";

const AdminCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        categoryId: '',
        categoryName: '',
        image: '',

    })

    const handleCancel = () => { setIsModalOpen(false); };

    const onFinish = () => {
        createtProduct()
        console.log('finish', stateProduct);
    };

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleOnchangeAvatar = (e) => {
        const url = e.target.value;
        setStateProduct({
            ...stateProduct,
            imageUrl: url,
        });
    };



    return (
        <div>
            <WapperHeader> AdminCategory </WapperHeader>
            <div style={{ padding: '10px' }}>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}
                    onClick={() => setIsModalOpen(true)}> <PlusOutlined style={{ fontSize: '40px' }} /> </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableConponent />
            </div>
            <Modal title="Tạo danh mục" open={isModalOpen} onCancel={handleCancel} onText="" >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <Form.Item
                        label="CategoryId"
                        name="CategoryId"
                        rules={[{ required: true, message: 'Please input your CategoryId!' }]}
                    >
                        <Input value={stateProduct.categoryId} onChange={handleOnchange} name="categoryId" />
                    </Form.Item>

                    <Form.Item
                        label="categoryName"
                        name="categoryName"
                        rules={[{ required: true, message: 'Please input your categoryName!' }]}
                    >
                        <Input value={stateProduct.categoryName} onChange={handleOnchange} name="categoryName" />
                    </Form.Item>

                    <Form.Item
                        label="ImageUrl"
                        name="ImageUrl"
                        rules={[{ required: true, message: 'Please input your ImageUrl!' }]}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Input onChange={handleOnchangeAvatar} style={{ flex: 1 }} />
                            {stateProduct.imageUrl && (
                                <img
                                    src={stateProduct.imageUrl}
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

export default AdminCategory;