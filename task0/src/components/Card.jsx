import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Card() {

        const [data, setData] = useState({
            fname: '',
            lname: '',
            email: '',
            picture: '',
            nat: ''
        });
         
        const getUserData = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/');
                const actualData = await res.json();
                console.log("Data from fetch random users")
                console.log(actualData);
                console.log(" " + actualData.results[0].name.last);

                //setData(actualData.results[0].name);

                const userData = actualData.results[0];

                setData({...data,fname: userData.name.first, lname: userData.name.last, email: userData.email, picture: userData.picture.large, nat: userData.nat});
                //const f_name = actualData.results[0].name.first;
                //const l_name = actualData.results[0].name.last;
                console.log("    ");
            } catch (error) {
                console.log(error);
            } 
        }

        useEffect(() => {
            getUserData();
        },[]);
        
    return (
        <>
            <div className="cards">
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
            </div>
        </>
    )
}

export default Card;