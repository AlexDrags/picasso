import { Suspense } from 'react';
import TodoList from './components/TodoList';
import { dataFetch } from './lib/fetch';
import { PostProps } from '@/app/model/modelProps';
import AddTodo from '@/app/components/AddTodo';
export default async function Home() {
  return (
    <section className='flex flex-col items-center content-center px-2 min-w-72'>
      <div className='flex flex-col gap-3 sm:flex-row'>
        <AddTodo />
        <TodoList />
      </div>
    </section>
  );
}

{
  /* <Suspense fallback={<h2>Идет загрузка постов ...</h2>}>
  <PostList />
</Suspense>; */
}
