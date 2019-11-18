import gql from 'graphql-tag';

export const MUTATION_ADD_TODO = gql`
mutation addTodo($type: String!){
    addTodo(type: $type){
      id
      type
    }
  }`;
  
export const QUERY_TODO_LIST = gql`
query todos{
    todos {
      id
      type
    }
  }`;

export const QUERY_TODO = gql`
query todo($id: String!) {
    todo(id: $id) {
        id
        type
    }
}`;

export const MUTATION_UPDATE_TODO = gql`
mutation updateTodo($id: String!, $type: String!){
    updateTodo(id: $id, type: $type) {
       id
       type
    }
}`;

export const FRAGMENT_LIST = gql`
fragment ToDoListItems on Todo {
  id
  type
}
`
export const QUERY_ALL = gql`
query todoList {
   todos {
     ...ToDoListItems
   }
}
`
export const FRAGMENT_ITEM = gql`
fragment ToDoItem on Todo {
  id
  type
}`
