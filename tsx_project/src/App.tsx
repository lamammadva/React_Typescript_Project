import React, { ChangeEvent, useState, FC } from 'react';
import './App.css';
import { taskTypes } from './type';
import DeleteTask from './DeleteTask';

const App: FC = () => {
  const [product, setProduct] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<taskTypes[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'product') {
      setProduct(event.target.value);
    }
    else {
      setCount(Number(event.target.value))
    }
  }
  const newProducts = () => {
    const newProduct = {
      name: product,
      count: count,
    };
    setList([...list, newProduct
    ]);
    setProduct('');
    setCount(0)
    console.log(product,count);
  }
  const onDeleteTask=(nameDelete:string):void=>{
    setList(list.filter((task)=>{
      return task.name !== nameDelete
    }))

  }
  return (
    <div className="App">
      <div className='inputdiv'>
        <input type='text' name='product' onChange={handleChange} value={product} placeholder='Mehsul adi daxil edin' />
        <input type='number' name='count' onChange={handleChange} value={count} placeholder='Sayini daxil edin' />
        <button className='inputbutton' onClick={newProducts}>
          Button
        </button>

      </div>
     
      <div className='tasks'>
        {list.map((task:taskTypes,index:number)=>{
          return  <DeleteTask onDeleteTask={onDeleteTask} task={task} key={index}/>

        })}

      </div>
    </div>
  );
}

export default App;
