import { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../assets/images/coffee.avif"

function QuoteLibrary() {
  const [allQuotes, setAllQuotes] = useState([]);

  async function getQuotes() {
    try {
      let response = await axios.get("http://localhost:3636/quote")
      // console.log(response)
      setAllQuotes(response.data)
      console.log(allQuotes)
    } catch (error) {
      console.log('Error fetching quotes', error)
    }
  }

  useEffect(() =>{
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return ( 
    <div>
      {allQuotes.map(quote =>{
        return (
          <div key={quote._id} >
            <div>
              <p>Content: {quote.content}</p>
              <p>Author: {quote.author}</p>
              <p>Content: {quote.content}</p>
              <p>Created At: {new Date(quote.createdAt).toLocaleString()} </p>
            </div>

            <div>
              {quote.urlImage} ? (<img src={quote.urlImage} alt="urlImage" />) : (<img src={defaultImage} alt="defaultImage" />)
            </div>
          </div>
        )
      })}
      

    </div>
   );
}

export default QuoteLibrary;