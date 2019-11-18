import React, { useState, useEffect } from 'react';
import ToDoListContainer from './components/ToDoList';
import Button from 'antd/es/button';
import Layout from 'antd/es/layout';
import { Modal, Col, Row, Input } from 'antd';
import Header from 'antd/es/page-header/';
import './App.css';
import { useStoreFromProvider, StoreContext } from './context/store';
import { addTodoItem } from './generated';


const App = () => {
  const [visibility, setVisibility] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [error, setError] = useState(null);
  const handleInput = (e) => setTodoText(e.target.value);
  const showModal = () => {
    setVisibility(true);
    setError(null);
  }
  const handleOk = async () => {
    if(todoText == '') return setError('The task cannot be empty');

      await addTodoItem(todoText);
      await store.refetch();
      setTodoText(''); 
      setVisibility(false);
    
  };

  const handleCancel = () => {
    setVisibility(false);
  };
  const store = useStoreFromProvider({
    lists: []
  });
  useEffect(() => {
    let isCancelled = false;

    if(!isCancelled) {
      (async () => {
        await store.refetch(); 
      })();
    } 
    return () => {
      isCancelled = true;
    };
  }, []);

 
  return (
    <Layout style={{ margin: 50, height: 800 }}>
    <StoreContext.Provider value={store}>
    <div className="App">
      <Header className="logo" title="ToDo App"></Header>
      <div className="header">
      <h3>Your ToDo List</h3>
      <div>
        <Button type="primary" onClick={showModal}>
          Create Task
        </Button>
        <Modal
          title="Enter your task"
          visible={visibility}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input onChange={(e)=>(handleInput(e))} value={todoText} />
          {error && !todoText && <div style={{color: '#FF8800'}}>{error}</div>}
        </Modal>
      </div>
      </div>
      <div>
      <Row gutter={16}>
      
        {store.lists.map(list => {
         return <Col span={8} key={list.id}>
           <ToDoListContainer list={list} />
          </Col>
        })}
      </Row>
      </div>
    </div>
    </StoreContext.Provider>
    </Layout>
  );
}

export default App;
