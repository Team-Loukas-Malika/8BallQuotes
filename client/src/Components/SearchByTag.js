import { useState } from "react";
import axios from "axios";

function SearchByTag() {
  const [tag, setTag] = useState("");

  async function handleSearch(event) {
    event.preventDefault();
    try {
      let response = await axios.get(`http://localhost:3636/quote/tags/${tag}`)
      console.log("response", response);
    } catch (error) {
      console.log("Error searching quotes", error);
    }
  }

  return ( 
    <div>
      This is the search by tag page.
      <form onSubmit={handleSearch}>
        
        <label htmlFor="
        tag-name"></label>
        <input type="text"
         placeholder="Enter tag"
        id="tag-name"
        value={tag}
        onChange={(e)=>setTag(e.target.value)}
        />
        <button type="submit" >Search By Tag</button>
      </form>
    </div>
   );
}

export default SearchByTag;