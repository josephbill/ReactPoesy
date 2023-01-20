import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const GLOBAL = require('../../utils/Constants')
const Poem = ({id,title,content,author,poems,setPoems,favouritePoems,setFavouritePoems}) => {
    const navigate = useNavigate();

    //Logics for a singular poem 
    // mark a poem as read 
    const [isRead,setIsRead] = useState(false);
    const url = 'http://localhost:3000/poems/${id}'

    function handleIsRead(){
        setIsRead(true)
    }

    function handleDelete(){
        const answer = window.confirm('Are you sure you want to delete this poem ?')
        if(answer === true){
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => {
                //updating the state to remove deleted poem
                const newPoems  = poems.filter(poem=>poem.id !== id)
                setPoems(newPoems);
            })
        } 
        console.log(answer)
    }

    //add favs 

    function handleAddToFav(){
        const favPoem = {
            title: title,
            content: content,
            author: author
        }
        //push to favs api
        fetch(GLOBAL.BASE_URL + GLOBAL.FAVPOEMS,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(favPoem)
        })
        .then(res=>res.json())
        .then(data => {
               const newFavPoem = [favouritePoems,data]
               setFavouritePoems(newFavPoem)
               navigate('/favourites')
        })
    }
   // ??

    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p> <strong>By {author}</strong></p>
            <button style={{
                 backgroundColor: 'orange',
            }} 
            onClick={handleIsRead}>{!isRead ? 'Mark as Read' : 'Mark as Unread'}</button>
            <button 
            style={{
                backgroundColor: 'yellow',
                marginLeft: '80px',
                float: 'center'
           }} 
            onClick={handleAddToFav}>Add to Favourites</button>
            <button 
            style={{
                backgroundColor: 'red',
                marginLeft: '20px',
                float: 'center'
           }} 
            onClick={handleDelete}>Delete</button>
        </div> 
    );
   
}

export default Poem;