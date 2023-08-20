
import { useEffect, useState } from "react";
import React from "react";
import PuppyBox from './PuppyBox.jsx'
import './AllPlayers.css'
import { useNavigate } from "react-router-dom";

const cohortName = "2302-acc-pt-web-pt-e";
// Use the APIURL variable for fetch requests
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com';


function AllPlayers({ puppies, setPuppies }) {

    // const [puppies, setPuppies] = useState([])
    // console.log("dummy puppies: ", puppies)
    


    useEffect(() => {
        async function fetchPuppies() {
            try {
                // your fetch logic will go here
                // const response = await fetch(external_URL);
                // console.log("response: ", response)
                // const result = await response.json();
                // console.log("result: ", result)
                // setContacts(result);
                // console.log("external contacts: ", contacts)
                //end of sample code

                const rawData = await fetch(`${BASE_URL}/api/${cohortName}/players`)
                
                // console.log("after fetch")
                // console.log(rawData)
                const resultData = await rawData.text()
                
                // console.log("after text")
                // console.log(resultData)
                const resultJsonData = JSON.parse(resultData)
                
                // console.log("after JSON")
                // console.log(resultJsonData.data.players)
                setPuppies(resultJsonData.data.players);
                

            } catch (error) {
                console.error(error);
            }
        }
        // let ignore = false;
        fetchPuppies()

    }, [puppies])

    return (
        
        <div className="all-players-container">
            {puppies.map((puppy) => {
                return <PuppyBox key={puppy.id} puppy={puppy}  />;
            })}

        </div>
    )
}

export default AllPlayers
