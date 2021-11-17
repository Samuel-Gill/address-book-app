import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux";
import { Input, Space } from 'antd';
const { Search } = Input;

let data_length = 15;
export const API = () => {
    const [nat, setNat] = useState();
    const [contacts, setContacts] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(15);

    // it alternative to the useContext hooks in react / consumer from context API
    const changeNationality = useSelector(state => state.changeNationality);

    const getContacts = async () => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?results=${results}&page=${page}&nat=${changeNationality}`);
            console.log(res.data.results);
            console.log(res.data.results.length);
            data_length = res.data.results.length;
            console.log("data length" + data_length);
            setContacts([...contacts, ...res.data.results]);

            var delayInMilliseconds = 500; //0.5 second

            setTimeout(function () {
                //Loading is artifically delayed for 0.5 second
                setLoading(true);
            }, delayInMilliseconds);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const onSearch = value => 
    {
        console.log(value);
        setSearchInput(value.toLowerCase());
    }

    useEffect(() => {
        getContacts();
    }, [results, nat]);


    return !loading ? (<h1> Loading ...</h1>) :
        (
            <>
                <br />
                <Row>
                    <Col span={12} offset={16}>

                        <Search
                            placeholder="Search user"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                            style={{ width: "51.5%" }}
                        />
                    </Col>
                </Row>                       
                <br />

                <InfiniteScroll dataLength={data_length} next={() => setResults(results + data_length)} hasMore={true} loader={<h3>Loading...</h3>}>
                    {
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                            {loading &&
                                contacts.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(searchInput)).map((contact) => (
                                    <Col className="gutter-row" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={contact.login.uuid}>
                                        <Contact contact={contact} />
                                    </Col>
                                ))}
                        </Row>
                    }
                </InfiniteScroll>
            </>
        )
}
