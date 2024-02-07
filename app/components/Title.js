'use client';

export default function Title() {
  const counter = useSelector((state) => state.reducer.value);
  console.log(counter);
  return <h1 className=' text-xl p-4'>Список постов</h1>;
}
