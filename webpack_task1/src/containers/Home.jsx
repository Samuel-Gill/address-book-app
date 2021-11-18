import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Contact from '../components/Contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux";
import { Input, Space, Spin } from 'antd';
const { Search } = Input;
let data_length = 50;
let change_nat = "";

import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions.js'

const Home = ({ userData, fetchUsers }) => {
    const [nat, setNat] = useState();
    const [contacts, setContacts] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [moreData, setMoreData] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(50);

    // it alternative to the useContext hooks in react / consumer from context API
    const changeNationality = useSelector(state => state.changeNationality);
    change_nat = changeNationality;

    const getContacts = async () => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?results=${results}&page=${page}&nat=${changeNationality}`);
            console.log(res.data.results);
            console.log(res.data.results.length);
            data_length = res.data.results.length;
            if (data_length > 900)
            {
                setMoreData(false);
                console.log(moreData);
            }
            console.log("data length" + data_length);
            setContacts([...contacts, ...res.data.results]);
            setLoading(true);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const onSearch = value => {
        console.log(value);
        setSearchInput(value.toLowerCase());
    }

    useEffect(() => {
        getContacts();
    }, [results, nat]);

    useEffect(() => {
        fetchUsers()
      }, [results, nat])

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

                <InfiniteScroll dataLength={data_length} next={() => setResults(results + 50)} hasMore={moreData}
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

const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: (nat=change_nat,results=data_length,page=1) => dispatch(fetchUsers(nat,results,page))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)

//export default Home;