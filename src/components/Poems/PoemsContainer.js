import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Poem from "./Poem";

function PoemsContainer({poems, setPoems,favouritePoems,setFavouritePoems}) {

  const [isLoaded, setIsLoaded] = useState(false);
  //fetch the poems from the db.json
  //useEffect hoooks to load the poems once the dom has loaded
  const url = 'http://localhost:3000/poems'
  useEffect(()=>{
    fetch(url,{
      method: 'GET',
      headers:{
        "Content-Type": "text/plain"
      }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      setPoems(data) 
      console.log(poems)
     setIsLoaded(true);  // i make it true  : correction 
      //console.log(data)
    })
  }, [setPoems])


  if (isLoaded===false){
    console.log(isLoaded)
    return <h1 style={{textAlign: 'right'}}>Loading...</h1>
  }else{
    //use the set data to get the poems content
  const poemsToDisplay = poems.map((poem)=>{
    return <Poem 
      key={poem.id} 
      id = {poem.id} 
      title={poem.title} 
      content={poem.content} 
      author={poem.author} 
      poems = {poems}
      setPoems = {setPoems}
      favouritePoems={favouritePoems}
      setFavouritePoems={setFavouritePoems}
      />
  })
  
  return (
    <div className="poems-container">
      {poemsToDisplay}
    </div>
  );
  }
  
}

export default PoemsContainer;
