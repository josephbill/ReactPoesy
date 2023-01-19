import React,{useState} from 'react';

const Poem = ({id,title,content,author,poems,setPoems}) => {

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
   // ??

    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p> <strong>By {author}</strong></p>
            <button style={{
                 backgroundColor: 'orange',
                 marginLeft: '80px',
                 float: 'center'
            }} 
            onClick={handleIsRead}>{!isRead ? 'Mark as Read' : 'Mark as Unread'}</button>
            <button 
            style={{
                backgroundColor: 'red',
                marginLeft: '60px',
                float: 'center'
           }} 
            onClick={handleDelete}>Delete</button>
        </div> 
    );
   
}

export default Poem;