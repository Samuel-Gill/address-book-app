import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<>
			{/* <Search /> */}
			<div className="menu_style">
				{/* <Search /> */}
				<NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
				<NavLink exact activeClassName="active_class" to="/settings"> Settings </NavLink>
				<NavLink exact activeClassName="active_class" to="/search"> Search </NavLink>
				<NavLink exact activeClassName="active_class" to="/redux"> Redux </NavLink>
				<NavLink exact activeClassName="active_class" to="/api"> api </NavLink>
			</div>
		</>
	);
}

export default Menu;