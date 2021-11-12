import React from "react";
import Cards from "../components/Cards.jsx";

const Fetchapi = () => {

    const getUsers = async () => {
        const response = await fetch("https://randomuser.me/api/");

        const data = await response.json();
        console.log(response);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
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
    )
}

export default Fetchapi;