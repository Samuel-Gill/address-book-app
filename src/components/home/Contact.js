import React from 'react';
import { Card, Button, Modal, Typography, Divider, Space } from 'antd';
import { useState } from 'react';
const { Meta } = Card;
const { Text } = Typography;

const Contact = ({ contact }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src={contact.picture.large} />}
            >
                <Meta title={`${contact.name.first + " " + contact.name.last}`} />
                <Space align="center">
                    <Text>{contact.email}</Text>
                </Space>
                <Space align="center">
                    <Text>Nationality: {contact.nat}</Text>
                </Space>
                <Space align="center">
                    <Text>User Name: {contact.login.username}</Text>
                </Space>
                <Divider />
                <Button type="primary" onClick={showModal}>
                    Get Details
                </Button>
                <Modal title={`${contact.name.first + " " + contact.name.last}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    <Card
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="user_pic" src={contact.picture.large} />}
                    >
                        <Meta title={`${contact.name.first + " " + contact.name.last}`} />
                        <Space align="center">
                            <Text>Nationality: {contact.nat}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Email: {contact.email}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Phone: {contact.cell}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Cell: {contact.phone}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Street: {`${contact.location.street.number + " " + contact.location.street.name}`}</Text>
                        </Space>
                        <Space align="center">
                            <Text>City: {contact.location.city}</Text>
                        </Space>
                        <Space align="center">
                            <Text>State: {contact.location.state}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Postcode: {contact.location.postcode}</Text>
                        </Space>
                        <Space align="center">
                            <Text>Country: {contact.location.country}</Text>
                        </Space>
                    </Card>
                </Modal>
            </Card>
        </>
    )
}

export default Contact
