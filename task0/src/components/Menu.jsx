import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Menu = () => {
	return (
		<>
			<div className="menu_style">
				<NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
				<NavLink exact activeClassName="active_class" to="/search"> Search </NavLink>
				<NavLink exact activeClassName="active_class" to="/bookresult"> BookSearch </NavLink>
				<NavLink exact activeClassName="active_class" to="/settings"> Settings </NavLink>
			</div>

			{/* <Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Settings
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1" eventKey="CH">CH  </Dropdown.Item>
					<Dropdown.Item href="#/action-2" eventKey="ES">ES  </Dropdown.Item>
					<Dropdown.Item href="#/action-3" eventKey="FR">FR  </Dropdown.Item>
					<Dropdown.Item href="#/action-4" eventKey="GB">GB  </Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
		</>
	);
}

export default Menu;