import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import TodoList from './src/components/TodoList';
import AddTodo from './src/components/AddTodo';

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path ="/" element={<TodoList/>}/>
                    <Route path ="/add" element={<AddTodo/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default AddTodo;