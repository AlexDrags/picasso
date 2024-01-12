'use server';

export const dataFetch = async () => {
  const res = await fetch(`${process.env.BASE_URL}`, {
    method: 'GET',
  });
  return res.json();
};

export const dataFetchById = async (id: number) => {
  const res = await fetch(`${process.env.BASE_URL}/${id}`, {
    method: 'GET',
  });
  return res.json();
};
