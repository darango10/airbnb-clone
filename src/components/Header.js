import React from 'react';
import '../css/header.css'
import {ExpandMore, Language, Search} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

const Header = () => {
    return (
        <div className='header'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="logo"/>

            <div className="header__center">
                <input type="text"/>
                <Search/>
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <ExpandMore/>
                <Language/>
                <Avatar src={''}/>
            </div>
        </div>
    );
};

export default Header;
