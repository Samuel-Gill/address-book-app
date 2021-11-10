import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "core-js";
import { Card } from 'antd';
import 'antd/dist/antd.less';
const { Meta } = Card;

function Cards() {

    const [data, setData] = useState({
        fname: 'Samuel',
        lname: 'Gill',
        email: 'samuel@gmail.com',
        picture: "https://picsum.photos/200/100",
        nat: 'PK'
    });

    const getUserData = async () => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const actualData = await res.json();
            console.log(actualData.results[0]);
            console.log(" " + actualData.results[0].name.last);

            setData(actualData.results[0].name);

            const userData = actualData.results[0];

            setData({ ...data, fname: userData.name.first, lname: userData.name.last, email: userData.email, picture: userData.picture.large, nat: userData.nat });
            const f_name = actualData.results[0].name.first;
            const l_name = actualData.results[0].name.last;
            console.log("   ");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <div className="cards">
                <div className="card">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={data.picture} />}
                >
                    <Meta title={data.fname} description={data.email} />
                    <p>Nationality: {data.nat}</p>
                </Card>
            </div>
            </div>
        </>
    )
}

export default Cards;