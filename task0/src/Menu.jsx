import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<div className="menu_style">
				<NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
				<NavLink exact activeClassName="active_class" to="/search"> Search </NavLink>
			</div>
		</>
	);
}

export default Menu;