import * as React from 'react';
import Card from 'antd/es/card';

interface Props {
    id: string;
    type: string;
}

export default ({ id, type }: Props) => {
    return (
        <div className="todo-card">
         <Card title={id} bordered={false}>
          <p className="todo-text">{type}</p>
        </Card>
        </div>
    )
}