import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img className="card_img" src="https://picsum.photos/200/100" alt="userimg" />

                    <div className="card_info">
                        <h5 className="card_title"> {props.name} </h5>
                        <p className="card_text"> {props.email} </p>
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