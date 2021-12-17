import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/home/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Spin, Typography } from 'antd';
import { fetchUsers } from '../redux/actions/user.js';
import { filterSelector, fetchMoreSelector } from '../redux/selectors/filter.js';
const { Text } = Typography;
const { Search } = Input;

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [moreData, setMoreData] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(100);
    const userLimit = -50;

    // it alternative to the useContext hooks in react / consumer from context API
    const nationality = useSelector(state => state.nationality);
    const userData = useSelector(state => state.user);
    const users = useSelector((state) => filterSelector(state, searchInput, userLimit));
    const fetchMore = useSelector((state) => fetchMoreSelector(state));

    const dispatch = useDispatch();

    const fetchMoreData = () => {
        if (!fetchMore) {
            setMoreData(false);
        }
        else {
            setPage(page + 1);
            setMoreData(true);
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

                <InfiniteScroll dataLength={users.length} next={() => searchInput == '' && fetchMoreData()} hasMore={moreData}
                    endMessage={
                        <Text strong>End of user catalogue!</Text>}
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