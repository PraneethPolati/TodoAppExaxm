import React,{useState} from 'react';
import axios from 'axios';
const AddTodo =()=>{
    const [title,setTitle]=useState("");
    const [description,setDescirption]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    
    axios.post('http://localhost:5000/todos',{title,description})
    .then(()=>{
        setTitle("");
        setDescription("");
    })
    .catch(error=>console.error('error adding todo: ',error));
    
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e)=>
                setTitle(e.targetvalue)}
                placeholder = "Description"/>
                <button type="submit">ADD To-Do
                </button>
                </form>
    );
};

export default AddTodo;