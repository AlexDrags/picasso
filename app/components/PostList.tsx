'use client';
import { PostProps } from '@/app/model/modelProps';
import { dataFetch } from '../lib/fetch';
import { InfiniteLoader, List, WindowScroller, AutoSizer } from 'react-virtualized';
import { unstable_noStore as noStore } from 'next/cache';
import NavButton from './NavButton';
import { useEffect, useState } from 'react';
//export default function PostList({ posts }: { posts: Array<PostProps> }) {
export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const data = (async function () {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
      });
      return res;
    })();
    async function load() {
      const p = (await data).json();
      setPosts(await p);
    }
    load();
  });
  return (
    <>
      <div style={{ display: 'flex', width: '95vw', height: '90vh', paddingLeft: '10px' }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={50}
              rowCount={posts!.length}
              rowRenderer={({ key, index, style, parent }) => {
                const post = posts![index];
                const { id, title, body } = post;
                return (
                  <li
                    className='flex items-center w-full min-w-80 max-w-72 md:max-w-96 lg:max-w-4xl'
                    key={key}
                    style={style}
                  >
                    <p className='whitespace-nowrap truncate ...'>
                      #{id} {title} {body}
                    </p>
                    <NavButton path={`/${index}`}>Просмотр</NavButton>
                  </li>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </>
    // <ul className='flex flex-col items-center justify-center gap-6 bg-bg-desk bg-cover'>
    //   {posts &&
    //     posts.map(({ id, title, body }: PostProps) => {
    //       return (
    //         <li className='flex max-w-72 md:max-w-96 lg:max-w-4xl' key={id}>
    //           <p className='whitespace-nowrap truncate ...'>
    //             #{id} {title} {body}
    //           </p>
    //           <NavButton path={`/${id}`}>Просмотр</NavButton>
    //         </li>
    //       );
    //     })}
    // </ul>
  );
}
