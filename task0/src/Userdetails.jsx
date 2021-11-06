import React from "react";

function Userdetails(props) {
    return (
        <>
            <div className="cards">
                <div className="User">
                    <img className="card_img" src="https://picsum.photos/200/100" alt="userimg" />

                    <div className="card_info">
                        <h5 className="card_title"> {props.name} </h5>
                        <h5 className="card_title"> {props.phone} </h5>
                        <h5 className="card_title"> {props.address} </h5>
                        <p className="card_text"> {props.email} </p>
                        <a href="/" target="_blank">
                            <button>Go Home</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userdetails;