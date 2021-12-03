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
                <br />
                <Text>Nationality: {contact.nat}</Text>
                <br />
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
                        <br />
                        <Text>Email: {contact.email}</Text>
                        <br />
                        <Text>Phone: {contact.cell}</Text>
                        <br />
                        <Text>Cell: {contact.phone}</Text>
                        <br />
                        <Text>Street: {`${contact.location.street.number + " " + contact.location.street.name}`}</Text>
                        <br />
                        <Text>City: {contact.location.city}</Text>
                        <br />
                        <Text>State: {contact.location.state}</Text>
                        <br />
                        <Text>Postcode: {contact.location.postcode}</Text>
                        <br />
                        <Text>Country: {contact.location.country}</Text>
                    </Card>
                </Modal>
            </Card>
        </>
    )
}

export default Contact
