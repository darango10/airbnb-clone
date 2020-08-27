import React, {useState} from 'react';
import '../css/search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range'
import {People} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate((ranges.selection.startDate))
        setEndDate((ranges.selection.endDate))
    }

    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <People/>
            </h2>
            <input
                min={0}
                defaultValue={2}
                type="number"/>
                <Link to={'/search'}>
                    <Button>Search Airbnb</Button>
                </Link>

        </div>
    );
};

export default Search;
