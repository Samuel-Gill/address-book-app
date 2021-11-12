import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Cards.jsx';
import '../index.css';
import Sdata from '../components/Sdata.jsx';
import Settings from './Settings.jsx';
import { Row, Col } from 'antd';
//import { Card } from 'antd';
//import 'antd/dist/antd.less';
//import { Button } from 'antd';

//const { Meta } = Card;

export default function Home() {
    return (
        <>
            <h1>Home page</h1>
            {Sdata.map((value, index) => {
                return (
                    <>
                        <Row gutter={[24, 24]}>
                            <Col span={8} push={2}>
                                <Card />
                            </Col>
                            <Col span={8} push={2}>
                                <Card />
                            </Col>
                            <Col span={8} push={2}>
                                <Card />
                            </Col>
                        </Row>
                    </>
                );
            })}
        </>
    )
}
