import { Suspense } from 'react';
import PostList from './components/PostList';
import { dataFetch } from './lib/fetch';
import { PostProps } from '@/app/model/modelProps';

export default async function Home() {
  const posts: Array<PostProps> = await dataFetch();

  return (
    <section className='flex flex-col items-center content-center px-2 '>
      <h1 className=' text-xl p-4'>Список постов</h1>
      <Suspense fallback={<h2>Идет загрузка постов ...</h2>}>
        {/* <PostList posts={posts} /> */}
        <PostList />
      </Suspense>
    </section>
  );
}
