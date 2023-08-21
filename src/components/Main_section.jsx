import { Routes, Route , useParams} from "react-router-dom";
import { useState } from "react";


import SinglePlayerId from "./SinglePlayerId.jsx";
import FilterList  from "./FilterList.jsx";
import Home from "./Home.jsx";

import '../App.css'

export default function Main_section() {
       
    return (
        // <div id="main÷-section">
        <div>
            <Routes>
                           
                <Route path="/:puppyId" element={<SinglePlayerId />} />
                <Route path="/newlist" element={<FilterList />} />
                <Route path="/" element={<Home/>} />
            </Routes>

        </div>

    );
}