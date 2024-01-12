import Link from 'next/link';
import { PostProps } from '@/app/model/modelProps';
import { unstable_noStore as noStore } from 'next/cache';
import NavButton from './NavButton';
export default function PostList({ posts }: { posts: Array<PostProps> }) {
  noStore();
  return (
    <ul className='flex flex-col items-center justify-center gap-6 bg-bg-desk bg-cover'>
      {posts &&
        posts.map(({ id, title, body }: PostProps) => {
          return (
            <li className='flex max-w-72 md:max-w-96 lg:max-w-4xl' key={id}>
              <p className='whitespace-nowrap truncate ...'>
                #{id} {title} {body}
              </p>
              <NavButton path={`/${id}`}>Просмотр</NavButton>
            </li>
          );
        })}
    </ul>
  );
}
