import React from 'react';
import { Card, Button } from 'antd';
const { Meta } = Card;

const Contact = ({contact  }) => {
    return (
        <>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={contact.picture.large} />}
                    >
                        <Meta title={`${contact.name.first + " " + contact.name.last}`} description={contact.email} />
                        <p>Nationality: {contact.nat}</p>
                        <Button type="primary" style={{padding: "2px", marginLeft:"10px"}} className="w-100" size={'medium'} shape={'default'}>Get Details</Button>
                    </Card>                    
        </>
    )
}

export default Contact
