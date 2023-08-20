
import { useState } from 'react'

import AllPlayers from './AllPlayers.jsx'
import AddNewPlayerForm from './AddNewPlayerForm.jsx'


import '../App.css'
import './Home.css'
import SearchBar from './SearchBar.jsx'


export default function Home() {
    const [puppies, setPuppies] = useState([])

    return (
        <div className="home">
            <div>

            
            <br /><br />
            <h1 id="form-h1">Welcome To 2023 PuppyBowl !!!</h1> <br /><br />
                <AddNewPlayerForm puppies={puppies} setPuppies={setPuppies} />
            </div>

            <div>
                <br /><h2 id="page-h2">Search Your Puppy Players</h2><br />
                <SearchBar/>
            </div>
            <div>

            <br /><h2 id="page-h2">Meet The Puppy Players</h2><br />
            
                <AllPlayers puppies={puppies} setPuppies={setPuppies}  />
            </div>

        </div>
    );
}
