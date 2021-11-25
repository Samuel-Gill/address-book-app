/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from 'react-dom';
import Settings from "../Settings";
import App from "../../App";
import {cleanup} from '@testing-library/react'

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App></App>,div)
})

afterAll(cleanup)