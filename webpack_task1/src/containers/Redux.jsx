import React, { useEffect } from 'react'
import "./Redux.css";
import { incNumber } from "../actions";
import { decNumber } from "../actions";

import { useSelector, useDispatch } from "react-redux";

const Redux = () => {

    // it alternative to the useContext hooks in react / consumer from context API
    const changeTheNumber = useSelector(state => state.changeTheNumber);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(decNumber())
    }, [])

    return (
        <>
            <h1>Hello Redux</h1>
            <div className="main-div">


                <div class="container">

                    <h1>Increment/Decrement counter</h1>
                    <h4>using React and Redux</h4>

                    <div class="quantity">
                        <span class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></span>
                        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
                        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Redux;