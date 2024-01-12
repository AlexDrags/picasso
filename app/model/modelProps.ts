export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface ParamsProps {
  params: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
