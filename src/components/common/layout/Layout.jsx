import React from "react";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
	return (
		<>
			<div className={props.class}>
				<div className="menu_style">
					<NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
					<NavLink exact activeClassName="active_class" to="/settings"> Settings </NavLink>
				</div>

				{props.children}
			</div>
		</>
	);
}

export default Layout;