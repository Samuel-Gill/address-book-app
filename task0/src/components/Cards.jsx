import React from "react";
//import { Card } from 'antd';
import sara from "./sara.jpg"
import 'antd/dist/antd.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//const { Meta } = Card;

// function Cards() {
//     return (
//         <>
//             <Card
//                 hoverable
//                 style={{ width: 240, height:10}}
//                 cover={<img alt="example" src={sara} />}
//             >
//                 <Meta title="Europe Street beat" description="www.instagram.com" />
//             </Card>
//         </>
//     )
// }

function Cards() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards;