import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/home/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Spin } from 'antd';
import { fetchUsers } from '../redux/actions/user.js';
import { filterSelector } from '../redux/selectors/filter.js';
const { Search } = Input;

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [moreData, setMoreData] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(100);

    // it alternative to the useContext hooks in react / consumer from context API
    const nationality = useSelector(state => state.nationality);
    const userData = useSelector(state => state.user);
    const users = useSelector((state) => filterSelector(state, searchInput));

    const dispatch = useDispatch();

    const fetchMoreData = () => {

        if (userData.users.length > 1000) {
            setMoreData(false);
        }
        else {
            setPage(page + 1);
            setMoreData(true);
            console.log(`user data length ${showUsers}`)
        }
    }

    const onSearch = e => {
        setSearchInput(e.target.value.toLowerCase());
    }

    useEffect(() => {
        dispatch(fetchUsers(nationality, results, page));
    }, [page, nationality]);

    return userData.error ? (
        <h2>{userData.error}</h2>
    )
        : (
            <Spin size={"large"} spinning={userData.loading}>

                <div className="searchBar" >
                    <Row>
                        <Col span={12} offset={17}>
                            <Space direction="vertical">
                                <Search
                                    placeholder="Search user"
                                    allowClear
                                    enterButton="Search"
                                    size="large"
                                    value={searchInput}
                                    onChange={onSearch}
                                />
                            </Space>
                        </Col>
                    </Row>
                </div>
                <br />

                <InfiniteScroll dataLength={userData.users.length - 50} next={() => searchInput == '' && fetchMoreData()} hasMore={moreData}
                    endMessage={
                        <p style={{ textAlign: "center" }} >
                            <b>End of user catalogue!</b>
                        </p>}
                >
                    {
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                            {users.map((contact) => (
                                <Col className="gutter-row" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={contact.login.uuid}>
                                    <Contact contact={contact} />
                                </Col>
                            ))}
                        </Row>
                    }
                </InfiniteScroll>
            </Spin>
        )
}

export default Home;