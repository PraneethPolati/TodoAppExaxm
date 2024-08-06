import React ,{useEffect,useState} from 'react';
import axios from 'axios';

const TodoList= ()=>{
    const [todos,setTodos] = useState([]);

    useEffeect(()=>{
        axios.get('http://localhost:5000/todos')
        .then(response=> setTodos(response.data))
        .catch(error=>console.error('error fetching todos:',error));
    },[]);

    return(
        <div>
            <h1>To-Do-List</h1>
            <ul>
                {todos.map(todo=>(
                    <li key={todo._id}>
                        <h2>{todo.little}</h2>
                        <p>{todo.description}</p>
                        <p>{todo.completed?'completed':'not completed'}</p>
                        </li>
                ))}
            </ul>
            </div>
    );

};

export default TodoList;