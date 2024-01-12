import { dataFetchById } from '../lib/fetch';
import { unstable_noStore as noStore } from 'next/cache';
import NavButton from '../components/NavButton';
import { ParamsProps, PostProps } from '@/app/model/modelProps';

export default async function Page({ params: { id } }: ParamsProps) {
  noStore();
  const currentPost: PostProps = await dataFetchById(id);

  return (
    <section className='flex flex-col justify-center items-center gap-3  h-lvh'>
      <h1 className='text-center'>{currentPost.title}</h1>
      <span>Post #{currentPost.id}</span>
      <p>{currentPost.body}</p>
      <NavButton path={'/'}>Назад</NavButton>
    </section>
  );
}
