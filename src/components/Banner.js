import React, {useState} from 'react';
import '../css/banner.css'
import Button from "@material-ui/core/Button";
import Search from "./Search";

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className="banner__search">
                <Button
                    className='banner__searchButton'
                    variant='outlined'
                    onClick={(e)=>setShowSearch(!showSearch)}
                >{showSearch ? 'Hide' : 'Search Dates'}</Button>
                {showSearch && <Search/>}
            </div>
            <div className="banner__info">
                <h1>Get out and strectch your imagination</h1>
                <h5>Plan different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    );
};

export default Banner;
