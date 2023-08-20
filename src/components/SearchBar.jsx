import { useState } from "react"
import './SearchBar.css'

function SearchBar() {
    const [searchText, setSearchText] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello handleSubmit")
        console.log("text to search: ", searchText)

    }


    return (
        <div className="searchText">

            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="searchText"> Search Playewr Name:  */}
                {/* <label> Search for Player Name:  <span>     </span>  */}
                <label> Search for Player Name: 

                <input value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}

                    type="text" name="searchText" id="searchText"
                    placeholder="searchText" 
                />

                </label>
                <br />
                <br />
                <div>              
                    <button >Search Your Players</button>
                    <button >Back to All Players List</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
