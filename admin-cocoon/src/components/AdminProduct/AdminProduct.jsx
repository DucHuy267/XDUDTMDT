import React, { useEffect, useState } from "react";
import { WapperHeader } from "./style";
import { Button, Form, Input, Modal } from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TableComponent from "../TableComponent/TableComponent";
import { addProduct, getAllProduct } from "../../services/ProductServices";

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowSelected, setRowSelected] = useState('')
    const [stateProduct, setStateProduct] = useState({
        productId: '',
        name: '',
        price: '',
        description: '',
        quantity: '',
        categoryId: '',
        imageUrl: '',
    });
    const [product, setAllProduct] = useState([]);
    const [form] = Form.useForm();

    const handleDetailsProduct = () => {
        console.log('rowSelected', rowSelected)
    }
    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                <EditOutlined style={{ color: 'orange', fontSize: '20px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
            </div>
        )
    }
    const columns = [
        // { title: 'Mã sản phẩm', dataIndex: 'productId', render: (text) => <a>{text}</a> },
        { title: 'Tên', dataIndex: 'name' },
        { title: 'Giá', dataIndex: 'price' },
        // { title: 'Mô tả', dataIndex: 'description', render: (text) => text.length > 50 ? `${text.slice(0, 50)}...` : text },
        { title: 'Số lượng', dataIndex: 'quantity' },
        { title: 'Mã loại', dataIndex: 'categoryId' },
        {
            title: 'URL hình ảnh', dataIndex: 'imageUrl',
            render: (imageUrl) => (
                <img
                    src={imageUrl}
                    alt="product"
                    style={{ height: '80px', width: '80px', borderRadius: '20%', marginLeft: '5px' }}
                />
            ),
        },
        { title: 'Action', dataIndex: 'action', render: renderAction },
    ];

    const fetchProducts = async () => {
        try {
            const res = await getAllProduct();
            setAllProduct(res.map(item => ({ ...item, key: item.productId })));
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = async () => {
        try {
            await addProduct(stateProduct);
            alert("Thêm sản phẩm thành công");
            setIsModalOpen(false);
            fetchProducts(); // Refetch products to update the table
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <WapperHeader> AdminProduct </WapperHeader>
            <div style={{ padding: '10px' }}>
                <Button
                    style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{ fontSize: '40px' }} />
                </Button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <TableComponent columns={columns} data={product}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {
                                setRowSelected(record.id)
                            }, // click row

                        };
                    }} />
            </div>

            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    {['productId', 'name', 'description', 'price', 'quantity', 'categoryId'].map(field => (
                        <Form.Item
                            key={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            name={field}
                            rules={[{ required: true, message: `Please input your ${field}!` }]}
                        >
                            <Input value={stateProduct[field]} onChange={handleOnchange} name={field} />
                        </Form.Item>
                    ))}
                    <Form.Item
                        label="ImageUrl"
                        name="imageUrl"
                        rules={[{ required: true, message: 'Please input your ImageUrl!' }]}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Input onChange={handleOnchange} name="imageUrl" style={{ flex: 1 }} />
                            {stateProduct.imageUrl && (
                                <img
                                    src={stateProduct.imageUrl}
                                    alt="avatar"
                                    style={{ height: '80px', width: '80px', borderRadius: '20%', marginLeft: '5px' }}
                                />
                            )}
                        </div>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminProduct;
