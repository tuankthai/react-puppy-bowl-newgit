
import React from "react";
import './AllPlayers.css'

import { useNavigate } from "react-router-dom";

export default function PuppyBox({ puppy}) {
    const navigate = useNavigate();

    return (
        <div className="playerClass">
            <h2>{puppy.name}</h2>
            <h4>{puppy.breed}</h4>
            <h4>{puppy.status}</h4>
            <img src={puppy.imageUrl} alt={puppy.name}></img>
            <div>
                <button id="{puppy.id}"
                    onClick={
                    () => {
                        console.log("see details button clicked");
                        
                        navigate('/:puppyId', { state: puppy.id });
                        
                    }}>
                    See Player Details</button>

                <button className="delete-button" id="{puppy.id}">Delete From Roster</button>
            </div>
        </div>

    );
}