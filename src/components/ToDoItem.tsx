import * as React from 'react';
import Card from 'antd/es/card';
import Icon from 'antd/es/icon';
import Button from 'antd/es/button';
import { Modal, Input } from 'antd';
import { useStoreFromProvider } from '../context/store';



interface Props {
    location: {
        pathname: string
    };
    history: {
        push: Function
    } 
}

export default ({ location, history }: Props) => { 

  const [visibility, setVisibility] = React.useState(false);
  const [todoText, setTodoText] = React.useState('');
  const [error, setError] = React.useState(null);
  const handleInput = (e) => setTodoText(e.target.value);
  const showModal = () => {
    setVisibility(true);
    setError(null);
  }
  const handleOk = async () => {
    if(todoText == '') return setError('The task cannot be empty');

      await store.updateTodo(store.item.id, todoText);
      
      setTodoText(''); 
      setVisibility(false);
    
  };

  const handleCancel = () => {
    setVisibility(false);
  };
   const store = useStoreFromProvider({
    item: { id: '', type: '' }
   }) 
    React.useEffect(() => {
        (async () => {
            const  todoId =  location.pathname.split('/')[1];
            await store.singlefetch(todoId);
        })();
    }, [store.item.type]);

    const updateTask = async () => {
        const input = prompt("edit your task");
        await store.updateTodo(store.item.id, input);
    };
    const goBackToToDos = () => history.push('/');
    return (
        <div style={{margin: '75px'}}>
        <Card style={{ width: 400 }} title={store.item.id}
        actions={[
        <Icon type="edit" key="edit" onClick={showModal} />]}>
        <Modal
          title="Edit your task"
          visible={visibility}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input onChange={(e)=>(handleInput(e))} value={todoText} placeholder={store.item.type} />
          {error && !todoText && <div style={{color: '#FF8800'}}>{error}</div>}
        </Modal>
            
        <p>{store.item.type}</p>
            
        </Card>    
        <Button type="default" onClick={goBackToToDos} style={{ marginTop: '20px' }}>Back To ToDos</Button>
        </div>
    ) 

}