'use server';

export const dataFetch = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}`, {
      method: 'GET',
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const dataFetchById = async (id: number) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/${id}`, {
      method: 'GET',
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
