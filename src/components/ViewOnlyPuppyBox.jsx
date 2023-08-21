
import React from "react";
import './AllPlayers.css'

import { useNavigate } from "react-router-dom";
// import { removePlayer } from "./delete.js"


export default function ViewOnlyPuppyBox({ puppy }) {
    const navigate = useNavigate();
    console.log("inside ViewOnlyPuppyBox")

    return (
        <div className="playerClass">
            <h2>{puppy.name}</h2>
            <h4>Id:     {puppy.id}</h4>
            <h4>Breed:  {puppy.breed}</h4>
            <h4>Status: {puppy.status}</h4>         
            {/* <h4>Team Id:{puppy.teamId}</h4>          */}
            <img src={puppy.imageUrl} alt={puppy.name}></img>
           
        </div>

    );
}