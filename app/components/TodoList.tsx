'use client';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, lineThrough } from '@/redux/slices/todoSlice';
import { useState } from 'react';

export default function TodoList() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const handlerCheckTodo = (indexId: any) => {
    dispatch(lineThrough(indexId));
  };
  const handlerRemoveTodo = (indexId: any) => {
    dispatch(removePost(indexId));
  };
  return (
    <div className='flex flex-col'>
      <h2 className='text-xl p-4 underline'>Todo list</h2>
      <ul
        className='flex flex-col gap-2 p-5 rounded-lg  w-full min-w-72 min-h-44'
        style={{ boxShadow: '0 0 10px #000000' }}
      >
        {todos &&
          todos.map((todo: any, index: any) => {
            return (
              <li className='flex justify-between' key={index}>
                <p className={todo.check ? 'flex justify-between gap-2 line-through' : 'flex justify-between gap-2'}>
                  <span>{`${index + 1}`}.</span> {`${todo.todo}`} <span>{`${todo.datetime}`.slice(11)}</span>
                </p>
                <div className='flex gap-3'>
                  <button onClick={() => handlerCheckTodo(index)} type='button'>
                    &#128504;
                  </button>
                  <button onClick={() => handlerRemoveTodo(index)} type='button'>
                    &#10799;
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
