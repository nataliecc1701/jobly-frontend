import React, { useContext } from "react"
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "./NavBar.css"
import LoginContext from "./LoginContext";

const NavBar = () => {
    const user = useContext(LoginContext)
    
    function userInfo() {
        if (!("username" in user)) return <div className="NavBar-user-info">
            <NavItem>
                <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup">Register</NavLink>
            </NavItem>
        </div>
        
        return <div className="NavBar-user-info">
            <NavItem>
            Welcome, {user.username}
            </NavItem>
        </div>
    }
    
    return <div>
        <Navbar expand="md">
            <NavLink to="/" className="navbar-brand">
                Jobly
            </NavLink>
            
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jobs">Jobs</NavLink>
                </NavItem>
                {userInfo()}
            </Nav>
        </Navbar>
    </div>
}

export default NavBar;