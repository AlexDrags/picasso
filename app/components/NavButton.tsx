import Link from 'next/link';

export interface NavBtnProps {
  path: string;
  children: string;
}

export default function NavButton({ path, children }: NavBtnProps) {
  return (
    <Link
      className='bg-black rounded-md whitespace-nowrap border-gray-200 text-white px-2 py-1 hover:bg-slate-400 focus:bg-slate-400'
      href={path}
    >
      {children}
    </Link>
  );
}
