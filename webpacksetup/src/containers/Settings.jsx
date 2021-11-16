import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import 'antd/dist/antd.less';
const { Meta } = Card;
import Sdata from "../components/Sdata.jsx";

function Settings(props) {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        picture: '',
        nat: ''
    });

    console.log(props.nat);

    useEffect(() => {
        console.log("----------------name", props.nat);
    }, [props.nat]);

    const getUserData = async () => {
        try {
            //console.log(props.name);
            const res = await fetch(`https://randomuser.me/api/?nat=${props.nat}`);
            const actualData = await res.json();
            console.log(actualData.results[0].nat);
            console.log(" " + actualData.results[0].name.first);

            //setData(actualData.results[0].name);

            const userData = actualData.results[0];

            setData({ ...data, fname: userData.name.first, lname: userData.name.last, email: userData.email, picture: userData.picture.large, nat: userData.nat });
            //const f_name = actualData.results[0].name.first;
            //const l_name = actualData.results[0].name.last;
            console.log("    ");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            {Sdata.map((value, index) => {
                return (
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
                );
            })}

            {/* <div className="cards">
                <div className="card">
                    <img className="card_img" src={data.picture} alt="userimg" />

                    <div className="card_info">
                        <h5 className="card_title"> {data.fname} {data.lname} {data.nat} </h5>
                        <p className="card_text"> {data.email} </p>
                        <NavLink to="/search">
                            <button>Get Details</button>
                        </NavLink>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Settings;
