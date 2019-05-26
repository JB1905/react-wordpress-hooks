import { useApiRequest } from './useApiRequest';

type UseComments = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: number;
  after: string;
  author: number;
  author_exclude: number[];
  author_email: string;
  before: string;
  exclude: number[];
  include: number[];
  offset: number;
  order: 'asc' | 'desc';
  orderby: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
  parent: number;
  parent_exclude: number[];
  post: number[];
  status: string;
  readonly type: 'view' | 'edit' | 'embed';
  password: string;
};

type UseCreateComment = {
  author: number;
  author_email: string;
  author_ip: string;
  author_name: string;
  author_url: string;
  author_user_agent: string;
  content: string;
  date: string;
  date_gmt: string;
  parent: number;
  post: number;
  status: string;
  meta: object;
};

type UseRetriveComment = {
  id: number;
  context: 'view' | 'embed' | 'edit';
  password: string;
};

type UseUpdateComment = {
  id: number;
  author: number;
  author_email: string;
  author_ip: string;
  author_name: string;
  author_url: string;
  author_user_agent: string;
  content: string;
  date: string;
  date_gmt: string;
  parent: number;
  post: number;
  status: string;
  meta: object;
};

type UseDeleteComment = {
  id: number;
  force: boolean;
  password: string;
};

const endpoint = 'comments';

export const useComments = (options: UseComments) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateComment = (options: UseCreateComment) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetriveComment = (options: UseRetriveComment) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateComment = (options: UseUpdateComment) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteComment = (options: UseDeleteComment) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
