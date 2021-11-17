import React from "react";
import Sdata from "./Sdata";
import Card from './Card';
import '../index.css';
import Userdetails from "./Userdetails";

const Sresult = (props) => {
    const searchName = props.name;
    //console.log(searchName);
    let userID;

    const result = Sdata.filter((post, index) => {
        if (post.name === searchName) {
            console.log(`Find name ${post.name}`);
            userID = post.id;
            //console.log(post.name);
            console.log(post.id);

        }

        return (post.name === searchName)
    });

    console.log(result.length);

    if (result.length == 0)
    {
        return (
            <>
                <h1 className="usernotfound">User Not Found</h1>
            </>
        )
    }
    else {
        return ( 
            <>
                <Userdetails
                    key={result[0].id}
                    name={result[0].name}
                    phone={result[0].phone}
                    address={result[0].address}
                    email={result[0].email}
                />
            </>
        );
    }

    // return ( 
    //     <>
    //         <Userdetails
    //             key={result[0].id}
    //             name={result[0].name}
    //             phone={result[0].phone}
    //             address={result[0].address}
    //             email={result[0].email}
    //         />
    //     </>
    // );
}

export default Sresult;