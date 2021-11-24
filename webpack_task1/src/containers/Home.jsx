import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/Home/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Spin } from 'antd';
const { Search } = Input;
import { fetchUsers } from '../redux/actions/userActions.js'


const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [dataLength, setDataLength] = useState(50);
    const [moreData, setMoreData] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(100);

    // it alternative to the useContext hooks in react / consumer from context API
    const Nationality = useSelector(state => state.nationality);
    const userData = useSelector(state => state.user);

    const dispatch = useDispatch();

    const fetchMoreData = () => {
        console.log("Fetch More Data length ");
        if (userData.users.length > 100) {
            setMoreData(false);
        }
        else {
            setPage(page+1);
            setMoreData(true);
        }
    }

    const onSearch = value => {
        console.log(value);
        setSearchInput(value.toLowerCase());
    }

    useEffect(() => {
        console.log("Fetch More Data length "+userData.users.length);    
        dispatch(fetchUsers(Nationality, results, page));
    }, [page, Nationality]);

    return userData.loading ? (
        <Row type="flex" justify="center" align="middle" >
            <Col span={12} offset={12}>
                <Spin size={"large"} />
            </Col>
        </Row>)
        : userData.error ? (
            <h2>{userData.error}</h2>
        )
        : (
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
                            />
                        </Space>
                    </Col>
                </Row>
                <br />

                <InfiniteScroll dataLength={userData.users.length} next={() => fetchMoreData()} hasMore={moreData}
                    endMessage={
                        <p style={{ textAlign: "center" }} >
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