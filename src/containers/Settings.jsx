import React, { useEffect, useState } from "react";
import { Select, Button, Typography } from 'antd';
import { Row, Col } from 'antd';
const { Option } = Select;
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Nationality } from "../redux/actions/settings.js";
import { useSelector, useDispatch } from "react-redux";
import { clearUsers } from "../redux/actions/user.js";
const { Title } = Typography;


function Settings(props) {

    const [nat, setNat] = useState();

    // it alternative to the useContext hooks in react / consumer from context API
    const nationality = useSelector(state => state.Nationality);

    const dispatch = useDispatch();

    function onChange(value) {
        dispatch(clearUsers());
        setNat(value);
    }

    return (
        <>
            <br />
            <Row>
                <Col span={12} offset={10}>
                    <Title level={3}>You choose {nationality} as Nationality</Title>
                    <Select
                        showSearch
                        placeholder="Select a nationality"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="">default</Option>
                        <Option value="AU">AU</Option>
                        <Option value="BR">BR</Option>
                        <Option value="CA">CA</Option>
                        <Option value="CH">CH</Option>
                        <Option value="DE">DE</Option>
                        <Option value="DK">DK</Option>
                        <Option value="ES">ES</Option>
                        <Option value="FI">FI</Option>
                        <Option value="FR">FR</Option>
                        <Option value="GB">GB</Option>
                        <Option value="IE">IE</Option>
                        <Option value="IR">IR</Option>
                        <Option value="NO">NO</Option>
                        <Option value="NL">NL</Option>
                        <Option value="NZ">NZ</Option>
                    </Select>
                    <NavLink to="/">
                        <Button type="primary" onClick={() => dispatch(Nationality(nat))}>
                            Search
                        </Button>
                    </NavLink>
                </Col>
            </Row>
            <br />
        </>
    )
}

export default Settings;
