import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap"
import {BiCheckDouble} from "react-icons/bi"

const Todos = ({todos, markComplete}) => {
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span 
                    onClick={() => markComplete(todo.id)}>
                       <BiCheckDouble style={{float:"right"}}/>  
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;