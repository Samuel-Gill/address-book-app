import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Contact from '../components/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';

let data_length = 15;
export const API = () => {
    const [nat, setNat] = useState();
    const [contacts, setContacts] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(15);

    const Nationality = (e) => {
        setNat(e.target.value);
    }

    async function getUserData() {
        const res = await axios.get(`https://randomuser.me/api/?nat=${nat}`);
        console.log(res.data.results[0].name.first);
        const api_name = res.data.results[0].name.first;
        const user_name = nat;

        console.log(res.data.results[0].nat);
    }

    const getContacts = async () => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?results=${results}&page=${page}`);
            console.log(res.data.results);
            console.log(res.data.results.length);
            data_length = res.data.results.length;
            console.log("data length" + data_length);
            setContacts([...contacts,...res.data.results]);
            var delayInMilliseconds = 1000; //1 second

            setTimeout(function() {
            //Loading is artifically delayed for 1 second
            setLoading(true);
            }, delayInMilliseconds);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }

    useEffect(() => {
        getUserData();
        getContacts();
    }, [results]);


    return !loading ? ( <h1> Loading ...</h1>) :
        (
        <>
            <h1>You choose {nat} as Nationality</h1>
            
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
            </select>

            
            <InfiniteScroll dataLength={data_length} next={() => setResults(results+data_length)} hasMore={true} loader={<h3>Loading...</h3>}>
                {                     
                    <Row gutter={[24, 24]}>
                        {loading &&
                            contacts.map((contact) => (
                                <Col span={8} push={2} key={contact.login.uuid}>
                                    <Contact contact={contact} />
                                </Col>
                            ))}
                    </Row>
                }
            </InfiniteScroll>)
        </>
        
    )
}
