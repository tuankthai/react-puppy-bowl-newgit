import { useEffect, useState } from 'react';
import './SinglePlayerId.css'
import { useParams, useNavigate , useLocation} from 'react-router-dom';

const cohortName = "2302-acc-pt-web-pt-e";
// Use the APIURL variable for fetch requests
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com';


function SinglePlayerId() {

    const navigate = useNavigate();
    const { puppyId } = useParams();
    // const obj = useParams();
    const location = useLocation();
    const data = location.state;

    console.log("useParams puppyId: ", { puppyId } );
    console.log("location data: ", data);

    const selectedPuppyId = data ? data : { puppyId }.puppyId ;
          
    console.log(" selectedPuppyId: ", selectedPuppyId)

    //get puppy data
    const [puppy, setPuppy] = useState({});
    console.log("current puppy: ", puppy)

useEffect(() => {
    async function fetchPuppy() {
        try {
                
            console.log("inside fetchSinglePlayer")
            // const response = await fetch(`${PARTIES_API_URL}/${id}`);
            const response = await fetch(`${BASE_URL}/api/${cohortName}/players/${selectedPuppyId}`)

            console.log(response)
            const party = await response.json();
            console.log(party.data.player)
                
            setPuppy(party.data.player);

        } catch (error) {
            console.error(error);
        }
    }

    fetchPuppy()
}, [])

    return (
        <div className="detailsClass">
            
            <h2 id="details-h2">PLAYER DETAILS </h2>

            <h3>   Name: {puppy.name}  ***  Id: {puppy.id}   </h3>
            {/* <h3>    </h3> */}
            <h3>Breed: {puppy.breed}     </h3>
            <h3>Status: {puppy.status}      </h3>
            <h3>Team Id: {puppy.teamId}</h3>
            <h3>Cohort Id: {puppy.cohortId}</h3>
            <h3>Created At: {puppy.createdAt}</h3>
            <h3>Updated At: {puppy.updatedAt}</h3>
            <img src={puppy.imageUrl} alt={puppy.name}></img>

            <button onClick={
                () => {
                    console.log("back to all players list button clicked");
                    
                    navigate('/')
                    
                }}>
                Back to All Players List</button>



        </div>
    )
}

export default SinglePlayerId
