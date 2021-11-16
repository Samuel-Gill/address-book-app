import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Contact from '../components/Contact';

export const API = () => {
    const [nat, setNat] = useState();
    const [contacts, setContacts] = useState();
    const [loading, setLoading] = useState(false);

    const Nationality = (e) => {
        setNat(e.target.value);
    }

    async function getUserData() {
        const res = await axios.get(`https://randomuser.me/api/?nat=${nat}`);
        console.log(res.data.results[0].name.first);
        const api_name = res.data.results[0].name.first;
        const user_name = nat;
        // if (api_name.toLoweCase() == user_name.toLoweCase())
        // {
        //     console.log("usermached");
        // }
        // else{
        //     console.log("not matched")
        // }
        console.log(res.data.results[0].nat);
    }

    // const Contacts = () => {
    //     useEffect(() => {
    //         getContacts();
    //     },[]);
    // }

    const getContacts = async () => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?results=100`);
            console.log(res.data.results);
            setContacts(res.data.results);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getUserData();
        getContacts();
    }, []);





    return (
        <>
            {/* <h1>You choose {nat} as Nationality</h1>
            
            <select
            value={nat}
            onChange={Nationality}
            >
                <option value="AU">AU</option>
                <option value="BR">BR</option>
                <option value="CA">CA</option>
                <option value="CH">CH</option>
                <option value="DE">DE</option>
                <option value="DK">DK</option>
                <option value="ES">ES</option>
                <option value="FI">FI</option>
                <option value="FR">FR</option>
                <option value="GB">GB</option>
                <option value="IE">IE</option>
                <option value="IR">IR</option>
                <option value="NO">NO</option>
                <option value="NL">NL</option>
                <option value="NZ">NZ</option>
            </select> */}

            <Row gutter={[24, 24]}>
                {loading &&
                    contacts.map((contact) => (
                        <Col span={8} push={2} key={contact.login.uuid}>
                            <Contact contact={contact} />
                        </Col>
                    ))}
            </Row>
        </>
    )
}
