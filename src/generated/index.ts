import { client } from '../index';
import {  
    AddTodoMutationVariables, 
    AddTodoMutation, 
    AddTodoDocument, 
    TodoQuery, 
    TodoQueryVariables, 
    TodoDocument, 
    UpdateTodoMutation, 
    UpdateTodoMutationVariables, 
    UpdateTodoDocument, 
    TodoListQuery,
    TodoListDocument} from './graphql';


export interface ExecutionResult<T> {
    data?: Readonly<T>;
}

export async function getTodoList(): Promise<
 ExecutionResult<TodoListQuery>> {
     return await client.query<TodoListQuery>({
         query: TodoListDocument,
         fetchPolicy: 'no-cache'
     });
 }

 export async function addTodoItem(
     type: string
 ) : Promise<ExecutionResult<AddTodoMutation>> {
     return await client.mutate<
     AddTodoMutation,
     AddTodoMutationVariables
     >({
         mutation: AddTodoDocument,
         variables: { type }
     })
 }

 export async function getTodoItem(
     id: string
 ) : Promise<ExecutionResult<TodoQuery>> {
     return await client.query<TodoQuery,
     TodoQueryVariables>({
         query: TodoDocument,
         variables: { id }
     })
 }

 export async function updateTodoItem(
     id: string,
     type: string,
 ) : Promise<ExecutionResult<UpdateTodoMutation>> {
     return await client.mutate<UpdateTodoMutation,
     UpdateTodoMutationVariables>({
         mutation: UpdateTodoDocument,
         variables: {
             id,
             type
         }
     })
 }
