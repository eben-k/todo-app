import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'antd/es/button';

import ToDo from './ToDo';
import { ToDoListItemsFragment } from '../generated/graphql';


interface Props {
    list: ToDoListItemsFragment,
    history: {
        push: Function
    } 
}

const todoList = ({ list: {id, type}, history }: Props) => {
    const viewSingleToDo = () => history.push(`/${id}`);
    return (
        <div className="todo-holder">
            <ToDo id={id} type={type} />
             <Button type="default" onClick={viewSingleToDo} style={{marginTop: 5}}>
                View Task
             </Button>
        </div>
    );
};

export default withRouter(todoList);
