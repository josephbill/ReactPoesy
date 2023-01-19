import React, {useState, useRef} from 'react'

const NewPoemForm = ({poems,setPoems}) => {

const [formData,setFormData] = useState({
    title: '',
    content: '',
    author: ''
});

const form = useRef(null)
const url = 'http://localhost:3000/poems'

//capture text 
function handleChange(e){
    const name = e.target.name;
    const value =  e.target.value;

    setFormData({
        ...formData,
        [name]:value,
    })
}

function handleSubmit(e){
e.preventDefault();
fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => {
    const newPoems = [...poems,data]
    setPoems(newPoems)
})

//reset my form 
form.current.reset()
}


    return (
        <form className="new-poem-form" onSubmit={handleSubmit} ref={form}>
             <input placeholder="title" name="title" onChange={handleChange}/>
             <input placeholder="author" name="author" onChange={handleChange}/>
             <textarea placeholder="content" name="content" rows={10} onChange={handleChange} />
             <input type="submit" value="Share Your Poem"/>
        </form>
    )
}

export default NewPoemForm;