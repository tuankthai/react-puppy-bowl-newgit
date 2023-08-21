import { useState } from "react"
import './SearchBar.css'
import FilterList from "./FilterList";
import { useNavigate } from "react-router-dom";

function SearchBar({ puppies }) {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    return (
        // <div className="searchText">
        <div className="searchText">
           
            <label htmlFor="searchText"> Search Player Name: </label> 
            {/* <label> Search for Player Name: </label> */}

                <input value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        console.log(searchText)
                    }}

                    type="text" name="searchText" id="searchText"
                    placeholder="searchText" 
                />

                
                <br />
                <br />
                
            <div> 
                    <button 
                        onClick={
                            () => {
                                console.log("Search Your Players clicked: ", searchText) ;
                                const newPuppyArr = puppies.filter(function (puppy) {
                                    //find puppy has name containing search text
                                    return puppy.name.includes(searchText);
                                });
                                console.log("new newPuppyArr: ", newPuppyArr)
                                
                                //display new puppies array... TODO
                                navigate('/newlist', { state: newPuppyArr });

                                setSearchText("")

                            }}>
                        Search Player Name</button>
                    
               
            </div>
        </div>
    )
}

export default SearchBar
