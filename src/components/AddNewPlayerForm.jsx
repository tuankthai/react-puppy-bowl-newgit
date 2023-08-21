
import React from "react"
import { useState } from "react"
import './AddNewPlayerForm.css'

const cohortName = "2302-acc-pt-web-pt-e";
// Use the APIURL variable for fetch requests
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com';


function AddNewPlayerForm({puppies, setPuppies}) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("bench")
    const [imageUrl, setImageUrl] = useState("")
    const [teamId, setTeamId] = useState("")
    const [error, setError] = useState(null)

    

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello handleSubmit")

        try {
            //need to read status field value. 
            
            const playerObj = {
                name: name,
                breed: breed,
                status: status,
                imageUrl: image,
                teamId: teamId
            };

            console.log("before fetching: ", playerObj);

            const response = await fetch(`${BASE_URL}/api/${cohortName}/players`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify( playerObj ),
                    body: JSON.stringify({ name, breed, imageUrl, status, teamId }),
                }
            );
            console.log("response: ", response)

            const result = await response.json();

            console.log("after json: ", result.data.newPlayer);
            //update puppy array   // TO DO
            setPuppies(prev => [...prev, { name, breed, imageUrl, status, teamId }])

            //clear input form fields
            setName("")
            setBreed("")
            setImageUrl("")
            setTeamId("")                    

        } catch (error) {
            console.log("error: ", error)
            setError(error.message)

        }

    }



    return (

        <div className="new-player-form">

            <h3 id="form-h3">Add Your Puppy To The Roster:</h3><br></br>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label><br />

                <input value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    type="text" name="name" id="name"
                    placeholder="name" required
                
                />
                {/* <input type="text" name="name" id="name" placeholder required /> */}

                <br />
                <br />
                <label htmlFor="breed"> Breed: </label><br />

                <input value={breed} onChange={(e) => { setBreed(e.target.value) }}
                    type="text" name="breed" id="breed" placeholder="breed" required
                />

                {/* <input type="text" name="breed" id="breed" placeholder required /> */}

                <br />
                <br />
                <label htmlFor="status"> Status: </label>   <br />

                <select id="status" name="status" required
                
                    onChange={(e) => { setStatus(e.target.value) }}
                >
                    <option value="bench">bench</option>
                    <option value="field">field</option>
                </select>

                <br />
                <br />
                <label htmlFor="image"> ImageUrl: </label><br />

                <input value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }}
                    type="text" name="image" id="image" placeholder="image url" required
                />
                {/* <input type="text" name="image" id="image" placeholder required /><br></br> */}
                <br />
                <br />

                <label htmlFor="teamId"> Team Id: </label><br />

                <input value={teamId}
                    onChange={(e) => { setTeamId(e.target.value) }}
                    type="number" name="teamId" id="teamId"
                     required

                />
                <br />
                <br />
                <button >Add New Player</button>

            </form>
        </div>


    )
}

export default AddNewPlayerForm
