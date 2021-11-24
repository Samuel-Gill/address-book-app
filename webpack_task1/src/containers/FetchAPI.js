import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/Home/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersRequest } from '../redux/actions/userActions.js';
import { Input, Space, Spin } from 'antd';
const { Search } = Input;

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [moreData, setMoreData] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(50);
    const [filter, setFilter] = useState("");

    // it alternative to the useContext hooks in react / consumer from context API
    const Nationality = useSelector(state => state.nationality);
    const userData = useSelector(state => state.user);

    const dispatch = useDispatch();
    const getContacts = async () => {
        try {
            dispatch(fetchUsersRequest());
            const res = await axios.get(`https://randomuser.me/api/?results=${results}&page=${page}&nat=${Nationality}`);
            const users = res.data.results;
            dispatch(fetchUsersSuccess(users));
            

            /* Set limit for maxium users */
            if (res.data.results.length > 100)
            {
                setMoreData(false);
                console.log(moreData);
            }
            console.log("data length" + userData.users.length);
            setLoading(true);
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersFailure(error.message));
            setLoading(false);
        }
    }

    const onSearch = value => {
        console.log(value);
        setSearchInput(value.toLowerCase());
    }

    useEffect(() => {
        getContacts();
    }, [results, Nationality]);

    return !loading ? (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col span={12} offset={12}>
                <Spin size={"large"} />
            </Col>
        </Row>) :
        (
            <>
                <br />
                <Row>
                    <Col span={12} offset={17}>
                        <Space direction="vertical">
                            <Search
                                placeholder="Search user"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                                style={{ width: "100%" }}
                            />
                        </Space>
                    </Col>
                </Row>
                <br />

                <InfiniteScroll dataLength={userData.users.length} next={() => setResults(results+50)} hasMore={moreData}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>End of user catalogue!</b>
                        </p>}
                    loader={<Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                        <Col span={12} offset={12}>
                            <Spin size={"large"} />
                        </Col>
                    </Row>}>
                    {
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                            {userData.users.filter((item) => `${item.name.title} ${item.name.first} ${item.name.last}`.toLowerCase().includes(searchInput)).map((contact) => (
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

export default Home;