import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import '../index.css';
import Sdata from "../components/Sdata";
//import Cards from './Cards';
import Settings from './Settings';

const Nat = "CH";

const Home = (value, index) => {
    return (
        <>
            <div id="loading">
                <h1 className="heading_style">Home</h1>
                {/* <Cards /> */}
                <input type="text" name="name" />
                
                
                {Sdata.map((value, index) => {
                    return (
                        <Settings name={Nat} nat="National"/>,
                        <Card
                            // key={value.id}
                            // name={value.name}
                            // email={value.email}
                        />
                    );
                })}
            </div>

        </>
    );
}

export default Home;