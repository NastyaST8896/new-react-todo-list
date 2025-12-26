import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ListItems({todos}) {
   return (
    <List>
        {todos.map((todo, index) => (
            <ListItem divider={true} key={todo.id}>{todo.text}</ListItem>
        ))}
    </List>
   ) 
}

export default ListItems;