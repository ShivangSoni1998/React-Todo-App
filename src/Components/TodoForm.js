import React, { useState } from "react";
import {
    Form,
    Input,
    InputGroup,
    Button,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        
        if(todoString === ""){
            return alert('Please fill some value')
        }
        const todo = {
            todoString,
            id: v4()
        }
        
        addTodos(todo)
        setTodoString("")
    }
    return (
        <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input 
                        type="text"
                        name="Todo"
                        id="Todo"
                        placeholder="Enter a Todo String ..."
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <Button 
                        color="success"
                    >Add Todo</Button>
                </InputGroup>
        </Form>
    )
}

export default TodoForm;
