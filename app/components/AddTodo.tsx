'use client';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/redux/slices/todoSlice';

export default function AddTodo() {
  const dispatch = useDispatch();
  async function createData(formData: FormData) {
    const formObj = {
      todo: formData.get('todo'),
      datetime: formData.get('datetime'),
      check: false,
    };
    let soundObj = new Audio('/addTodoSound.mp3');
    soundObj.play();
    dispatch(addTodo(formObj));
  }

  return (
    <div className='flex flex-col'>
      <h2 className=' text-white text-xl p-4 underline'>Create todo</h2>
      <form
        className='flex gap-5 flex-col p-5 rounded-lg w-full min-w-72'
        style={{ boxShadow: '0 0 10px #ffffff' }}
        action={createData}
      >
        <input
          className='shadow-none py-1 px-2 rounded-lg'
          style={{ boxShadow: '0 0 10px #000000' }}
          type='text'
          name='todo'
          id='todo'
          placeholder='Todo name'
          autoComplete='off'
          onChange={() => {
            let soundObj = new Audio('/btnSound.mp3');
            soundObj.play();
          }}
        />
        <input
          className='py-1 px-2 rounded-lg'
          style={{ boxShadow: '0 0 10px #000000' }}
          name='datetime'
          id='datetime'
          type='datetime-local'
        />
        {/* <textarea name='body' id='body' cols={30} rows={10}></textarea> */}

        <button
          className='px-3 py-1 text-white rounded-lg hover:bg-white hover:text-black'
          style={{ boxShadow: '0 0 10px #ffffff' }}
          type='submit'
        >
          AddTodo+
        </button>
      </form>
    </div>
  );
}
