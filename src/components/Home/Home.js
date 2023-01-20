
import React, {useState} from "react";
import NewPoemForm from "../Poems/NewPoemForm";
import Poem from "../Poems/Poem";
import PoemsContainer from "../Poems/PoemsContainer";


const Home = () => {
    //manage our state here 
    const [poems,setPoems] = useState([]);
    const [favouritePoems,setFavouritePoems] = useState([]);

    const [show,setShow] = useState(false);

    function handleClick(){
        setShow(show=>!show)

    }
    return(
        <div className='app'>
            <div className="sidebar">
              <button onClick={handleClick}>Show/Hide Form</button>
              {show ? <NewPoemForm poems={poems} setPoems={setPoems}/> : null}
            </div>
              <PoemsContainer
                 poems={poems}
                 setPoems={setPoems}
                 favouritePoems={favouritePoems}
                 setFavouritePoems={setFavouritePoems}
              />
        </div>
    )

}

export default Home;