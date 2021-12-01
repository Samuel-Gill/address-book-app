import React from 'react';
import { Card, Button, Modal, Typography, Divider } from 'antd';
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
                <Text>{contact.email}</Text>
                <Text>Nationality: {contact.nat}</Text>
                <Text>User Name: {contact.login.username}</Text>
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
                        <Text>Nationality: {contact.nat}</Text>
                        <Text>Email: {contact.email}</Text>
                        <Text>Phone: {contact.cell}</Text>
                        <Text>Cell: {contact.phone}</Text>
                        <Text>Street: {`${contact.location.street.number + " " + contact.location.street.name}`}</Text>
                        <Text>City: {contact.location.city}</Text>
                        <Text>State: {contact.location.state}</Text>
                        <Text>Postcode: {contact.location.postcode}</Text>
                        <Text>Country: {contact.location.country}</Text>
                    </Card>
                </Modal>
            </Card>
        </>
    )
}

export default Contact
