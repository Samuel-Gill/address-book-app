import React, {useEffect, useState} from "react";
import Sdata from "../components/Sdata";
import Sresult from "../components/Sresult";

 const Search = (props) => {
    const [name, setName] = useState("");

    const [find, setFind] = useState("");

    const [status, setStatus] = useState(false);

    const inputEvent = (event) => {
        const data = event.target.value;
        setName(data);
    }

    useEffect(() => {
        setStatus(false);
    }, [name]);

    const onSubmit = (event) => {
        event.preventDefault();
        setStatus(true);
        setFind(name);
    }

	return (
		<>
			<h1 className="heading_style">Search User</h1>
            <form onSubmit={onSubmit}>
            <div className="searchbar">
                <input type='text' placeholder="Search User" value={name} onChange={inputEvent}/>
                <br />
                <button type='submit'>Search</button>                
            </div> 
            </form>
            {status ? <Sresult name={find}/> : null}
		</>
	);
}

export default Search;