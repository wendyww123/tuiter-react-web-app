import React from "react";
import {Link} from "react-router-dom";
const NavItem = ({navItem, active}) => {
    return(
        <Link to={navItem.link} className={`list-group-item
                    ${active === navItem.active ? 'active':''}`}>
            <span className="wd-nav-icon"><i className={`fa ${navItem.icon}`}/></span>
            <span className="d-xl-inline d-none ">{navItem.title}</span>
        </Link>
    );
};
export default NavItem;