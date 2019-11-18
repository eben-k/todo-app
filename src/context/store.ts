import React, { useState, useContext } from 'react';
import { getTodoList, getTodoItem, updateTodoItem } from '../generated';
import { ToDoListItemsFragment, ToDoItemFragment } from '../generated/graphql';


export class Store {
    static fromHooks(init: Partial<Store>): Store {
        const [store,setStore] = useState(new Store(init));
        store._setStore = setStore;
        return store;
    }

    constructor(init: Partial<Store>) {
        Object.assign(this, init);
    }

    lists: ToDoListItemsFragment[] = [];
    item: ToDoItemFragment;
    loading: boolean;

    private _setStore: React.Dispatch<React.SetStateAction<Store>> = () => {};
    private refresh() {
        this._setStore(new Store(this))
    }

    async refetch() {
        this.loading = true;
       const data = (await getTodoList()).data;
        if (data) {
         this.lists = data.todos;
         this.loading = false;
        }
        this.refresh();
      }
    
    async singlefetch(id: string) {
        this.loading = true;
        const data = (await getTodoItem(id)).data;
        if (data) {
            this.item = data.todo;
            this.loading = false;
        }
        this.refresh();
    }

    async updateTodo(id: string, type: string) {
        this.loading = true;
        const data = (await updateTodoItem(id, type)).data;
        if (data) {
            this.item = data.updateTodo;
            this.loading = false;
        }
        this.refresh();
    }
      
      
    }

    export const StoreContext = React.createContext<Store>(new Store({}));

    export function useStore(): Store {
        return useContext(StoreContext);
    }

    export function useStoreFromProvider(init: Partial<Store>): Store {
      const store = Store.fromHooks(init);
      return store;  
    }
