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
    let soundObj = new Audio('/doneTodoSound.mp3');
    soundObj.play();
  };
  const handlerRemoveTodo = (indexId: any) => {
    let soundObj = new Audio('/deleteTodoSound.mp3');
    soundObj.play();
    dispatch(removePost(indexId));
  };
  return (
    <div className='flex flex-col'>
      <h2 className='text-white text-xl p-4 underline'>Todo list</h2>
      <ul
        className='flex flex-col gap-2 p-5 rounded-lg  w-full min-w-72 min-h-44'
        style={{ boxShadow: '0 0 10px #ffffff' }}
      >
        {todos &&
          todos.map((todo: any, index: any) => {
            return (
              <li className='flex justify-between text-white' key={index}>
                <p className={todo.check ? 'flex justify-between gap-2 line-through' : 'flex justify-between gap-2'}>
                  <span>{`${index + 1}`}.</span> {`${todo.todo}`} <span>{`${todo.datetime}`.slice(11)}</span>
                </p>
                <div className='flex gap-3'>
                  <button
                    className='bg-icon-1  bg-no-repeat bg-center rounded-md w-5 h-5 bg-slate-100'
                    onClick={() => handlerCheckTodo(index)}
                    type='button'
                  ></button>
                  <button
                    className='bg-icon-2 bg-no-repeat bg-center  rounded-md w-5 h-5 bg-slate-100'
                    onClick={() => handlerRemoveTodo(index)}
                    type='button'
                  ></button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
