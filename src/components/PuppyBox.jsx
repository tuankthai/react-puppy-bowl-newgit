
import React from "react";
import './AllPlayers.css'

import { useNavigate } from "react-router-dom";
import { removePlayer } from "./delete.js"


export default function PuppyBox({ puppy, puppies, setPuppies }) {
    const navigate = useNavigate();

    async function removeFromArray(puppyId) {
        console.log(" delete button clicked: ", puppyId);

        //send DELETE API 
        const response = await removePlayer(puppyId)
        console.log(response)

        if (response.status === 200) {
            console.log("inside 200 if")
            //remove from array and update state .... TO DO
            const index = puppies.indexOf(puppy);
            if (index > -1) { // only splice array when item is found
                puppies.splice(index, 1); // 2nd parameter means remove one item only
                setPuppies(puppies); //update state
            }
        }

    }

    return (
        <div className="playerClass">
            <h2>{puppy.name}</h2>
            <h4>Id: {puppy.id}</h4>
            <h4>Breed: {puppy.breed}</h4>
            <h4>Status: {puppy.status}</h4>
            <img src={puppy.imageUrl} alt={puppy.name}></img>
            <div>
                <button id="{puppy.id}"
                    onClick={
                        () => {
                            console.log("see details button clicked");

                            navigate('/:puppyId', { state: puppy.id });

                        }}>
                    See Player Details</button>

                <button className="delete-button" id="{puppy.id}"
                    onClick={
                        () => {
                            removeFromArray(puppy.id)
                        }}  >


                    Delete From Roster</button>
            </div>
        </div>

    );
}