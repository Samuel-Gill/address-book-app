import React from 'react';
import { Card, Button, Modal } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

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
                style={{ width: 240 }}
                cover={<img alt="example" src={contact.picture.large} />}
            >
                <Meta title={`${contact.name.first + " " + contact.name.last}`} />
                <p>{contact.email}</p>
                <p>Nationality: {contact.nat}</p>
                <p>User Name: {contact.login.username}</p>
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
                        <p>Nationality: {contact.nat}</p>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.cell}</p>
                        <p>Cell: {contact.phone}</p>
                        <p>Street: {`${contact.location.street.number + " " + contact.location.street.name}`}</p>
                        <p>City: {contact.location.city}</p>
                        <p>State: {contact.location.state}</p>
                        <p>Postcode: {contact.location.postcode}</p>
                        <p>Country: {contact.location.country}</p>
                    </Card>
                </Modal>
            </Card>
        </>
    )
}

export default Contact
