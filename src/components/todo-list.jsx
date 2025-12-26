import { useState } from 'react';
import Grid from '@mui/material/Grid';
import InputCustom from './input-new-todo';
import ListItems from './list-items';

function TodoList() {
    const [todo, setTodo] = useState([
        {id: 1, text:'gjlfhrb', checked: false},
        {id: 2, text:'klrf', checked: false},
        {id: 3, text:'cfkfn gjl ie,jq', checked: false},
    ]);

    const handleAddListItem = (inputValue) => {
        let text = inputValue;
        let newTodos = todo.slice();
        let newTodo = {id:Date.now(), text: text, checked: false}
        newTodos.push(newTodo)
        setTodo(newTodos);
    }
    
    return (
        <Grid container spacing={0} >
            <Grid size={{xs:1, md:2, lg:3, xl:4}}></Grid>

            <Grid size={{xs:10, md:8, lg:6, xl:4}}>
                <header>
                    <h1>todos</h1>
                </header>

                <main>
                    <InputCustom handleAddListItem={ handleAddListItem }/>

                    <ListItems todos={todo} />
                </main>
                   
            </Grid>

            <Grid size={{xs:1, md:2, lg:3, xl:4}}></Grid>
        </Grid>
    )
}

export default TodoList