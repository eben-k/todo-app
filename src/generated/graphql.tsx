import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `Upload` scalar type represents a file upload promise that resolves an
   * object containing `stream`, `filename`, `mimetype` and `encoding`.
 **/
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  addTodo?: Maybe<Todo>,
  updateTodo?: Maybe<Todo>,
};


export type MutationAddTodoArgs = {
  type: Scalars['String']
};


export type MutationUpdateTodoArgs = {
  id: Scalars['String'],
  type: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  todos?: Maybe<Array<Maybe<Todo>>>,
  todo?: Maybe<Todo>,
};


export type QueryTodoArgs = {
  id: Scalars['String']
};

export type Todo = {
   __typename?: 'Todo',
  id: Scalars['String'],
  type: Scalars['String'],
};


export type AddTodoMutationVariables = {
  type: Scalars['String']
};


export type AddTodoMutation = ({ __typename?: 'Mutation' } & { addTodo: Maybe<({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>)> });

export type TodosQueryVariables = {};


export type TodosQuery = ({ __typename?: 'Query' } & { todos: Maybe<Array<Maybe<({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>)>>> });

export type TodoQueryVariables = {
  id: Scalars['String']
};


export type TodoQuery = ({ __typename?: 'Query' } & { todo: Maybe<({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>)> });

export type UpdateTodoMutationVariables = {
  id: Scalars['String'],
  type: Scalars['String']
};


export type UpdateTodoMutation = ({ __typename?: 'Mutation' } & { updateTodo: Maybe<({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>)> });

export type ToDoListItemsFragment = ({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>);

export type TodoListQueryVariables = {};


export type TodoListQuery = ({ __typename?: 'Query' } & { todos: Maybe<Array<Maybe<({ __typename?: 'Todo' } & ToDoListItemsFragment)>>> });

export type ToDoItemFragment = ({ __typename?: 'Todo' } & Pick<Todo, 'id' | 'type'>);

export const ToDoListItemsFragmentDoc = gql`
    fragment ToDoListItems on Todo {
  id
  type
}
    `;
export const ToDoItemFragmentDoc = gql`
    fragment ToDoItem on Todo {
  id
  type
}
    `;
export const AddTodoDocument = gql`
    mutation addTodo($type: String!) {
  addTodo(type: $type) {
    id
    type
  }
}
    `;
// export type AddTodoMutationFn = ReactApollo.MutationFn<AddTodoMutation, AddTodoMutationVariables>;
// export type AddTodoComponentProps = Omit<ReactApollo.MutationProps<AddTodoMutation, AddTodoMutationVariables>, 'mutation'>;

    // export const AddTodoComponent = (props: AddTodoComponentProps) => (
    //   <ReactApollo.Mutation<AddTodoMutation, AddTodoMutationVariables> mutation={AddTodoDocument} {...props} />
    // );
    
export type AddTodoProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<AddTodoMutation, AddTodoMutationVariables>> & TChildProps;
export function withAddTodo<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  AddTodoMutation,
  AddTodoMutationVariables,
  AddTodoProps<TChildProps>>) {
    return ReactApollo.withMutation<TProps, AddTodoMutation, AddTodoMutationVariables, AddTodoProps<TChildProps>>(AddTodoDocument, {
      alias: 'withAddTodo',
      ...operationOptions
    });
};

    export function useAddTodoMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
      return ReactApolloHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
    };
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export const TodosDocument = gql`
    query todos {
  todos {
    id
    type
  }
}
    `;
// export type TodosComponentProps = Omit<ReactApollo.QueryProps<TodosQuery, TodosQueryVariables>, 'query'>;

    // export const TodosComponent = (props: TodosComponentProps) => (
    //   <ReactApollo.Query<TodosQuery, TodosQueryVariables> query={TodosDocument} {...props} />
    // );
    
export type TodosProps<TChildProps = {}> = Partial<ReactApollo.DataProps<TodosQuery, TodosQueryVariables>> & TChildProps;
export function withTodos<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  TodosQuery,
  TodosQueryVariables,
  TodosProps<TChildProps>>) {
    return ReactApollo.withQuery<TProps, TodosQuery, TodosQueryVariables, TodosProps<TChildProps>>(TodosDocument, {
      alias: 'withTodos',
      ...operationOptions
    });
};

    export function useTodosQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<TodosQueryVariables>) {
      return ReactApolloHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
    };
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export const TodoDocument = gql`
    query todo($id: String!) {
  todo(id: $id) {
    id
    type
  }
}
    `;
// export type TodoComponentProps = Omit<ReactApollo.QueryProps<TodoQuery, TodoQueryVariables>, 'query'> & ({ variables: TodoQueryVariables; skip?: false; } | { skip: true; });

    // export const TodoComponent = (props: TodoComponentProps) => (
    //   <ReactApollo.Query<TodoQuery, TodoQueryVariables> query={TodoDocument} {...props} />
    // );
    
export type TodoProps<TChildProps = {}> = Partial<ReactApollo.DataProps<TodoQuery, TodoQueryVariables>> & TChildProps;
export function withTodo<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  TodoQuery,
  TodoQueryVariables,
  TodoProps<TChildProps>>) {
    return ReactApollo.withQuery<TProps, TodoQuery, TodoQueryVariables, TodoProps<TChildProps>>(TodoDocument, {
      alias: 'withTodo',
      ...operationOptions
    });
};

    export function useTodoQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<TodoQueryVariables>) {
      return ReactApolloHooks.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, baseOptions);
    };
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: String!, $type: String!) {
  updateTodo(id: $id, type: $type) {
    id
    type
  }
}
    `;
// export type UpdateTodoMutationFn = ReactApollo.MutationFn<UpdateTodoMutation, UpdateTodoMutationVariables>;
// export type UpdateTodoComponentProps = Omit<ReactApollo.MutationProps<UpdateTodoMutation, UpdateTodoMutationVariables>, 'mutation'>;

    // export const UpdateTodoComponent = (props: UpdateTodoComponentProps) => (
    //   <ReactApollo.Mutation<UpdateTodoMutation, UpdateTodoMutationVariables> mutation={UpdateTodoDocument} {...props} />
    // );
    
export type UpdateTodoProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<UpdateTodoMutation, UpdateTodoMutationVariables>> & TChildProps;
export function withUpdateTodo<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
  UpdateTodoProps<TChildProps>>) {
    return ReactApollo.withMutation<TProps, UpdateTodoMutation, UpdateTodoMutationVariables, UpdateTodoProps<TChildProps>>(UpdateTodoDocument, {
      alias: 'withUpdateTodo',
      ...operationOptions
    });
};

    export function useUpdateTodoMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
      return ReactApolloHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
    };
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export const TodoListDocument = gql`
    query todoList {
  todos {
    ...ToDoListItems
  }
}
    ${ToDoListItemsFragmentDoc}`;
// export type TodoListComponentProps = Omit<ReactApollo.QueryProps<TodoListQuery, TodoListQueryVariables>, 'query'>;

    // export const TodoListComponent = (props: TodoListComponentProps) => (
    //   <ReactApollo.Query<TodoListQuery, TodoListQueryVariables> query={TodoListDocument} {...props} />
    // );
    
export type TodoListProps<TChildProps = {}> = Partial<ReactApollo.DataProps<TodoListQuery, TodoListQueryVariables>> & TChildProps;
export function withTodoList<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  TodoListQuery,
  TodoListQueryVariables,
  TodoListProps<TChildProps>>) {
    return ReactApollo.withQuery<TProps, TodoListQuery, TodoListQueryVariables, TodoListProps<TChildProps>>(TodoListDocument, {
      alias: 'withTodoList',
      ...operationOptions
    });
};

    export function useTodoListQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<TodoListQueryVariables>) {
      return ReactApolloHooks.useQuery<TodoListQuery, TodoListQueryVariables>(TodoListDocument, baseOptions);
    };
export type TodoListQueryHookResult = ReturnType<typeof useTodoListQuery>;