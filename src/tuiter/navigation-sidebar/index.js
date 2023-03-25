import React from "react";
import {useLocation} from "react-router";
import "./index.css";
import NavItem from "./nav-item";
import navItems from "./nav-items";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <span className="list-group-item">Tuiter</span>
            {navItems.map(navItem => <NavItem navItem={navItem} active={active}/>)}
        </div>
    );
};
export default NavigationSidebar;
