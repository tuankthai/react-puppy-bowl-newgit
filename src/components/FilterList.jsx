
import { useEffect, useState } from "react";
import React from "react";
import ViewOnlyPuppyBox from './ViewOnlyPuppyBox.jsx'
import './AllPlayers.css'
import './SearchBar.css'
import { useNavigate, useLocation } from "react-router-dom";



function FilterList() {

    const navigate = useNavigate();
    const location = useLocation();
    const filterArray = location.state;

    console.log("FilterList location data: ", filterArray);

    return (

        <div className="searchResults">
            <br /><h2 id="page-h2">Search Results</h2><br />
            <div className="center">
                <button onClick={
                    () => {
                        console.log("Search Result, back to all players list button clicked");

                        navigate('/')

                    }}>
                    Back to All Players List</button>
            </div>

            <div className="all-players-container">
                {filterArray.map((puppy) => {
                    // console.log("map puppy: ", puppy)
                    return <ViewOnlyPuppyBox key={puppy.id} puppy={puppy}
                    />;
                })}
            </div>
        </div>
    )
}

export default FilterList
