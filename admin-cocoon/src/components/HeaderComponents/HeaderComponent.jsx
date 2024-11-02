import React from "react";
import { Col } from 'antd';
import { TextHeader, WrapperHeader, AccoutHeader } from "./style";
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <TextHeader>
                        COCOON ORIGINAL
                    </TextHeader>
                </Col>
                <Col span={14}></Col>
                <Col span={4}>
                    <AccoutHeader>
                        <div>
                            <UserOutlined style={{ fontSize: '25px' }} />
                        </div>
                        <div>
                            <span>Đăng xuất</span>
                            <div>
                                <span>Tài khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>

                    </AccoutHeader>
                </Col>

            </WrapperHeader>
        </div >
    )
}

export default HeaderComponent