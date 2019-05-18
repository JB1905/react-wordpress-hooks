import { useApiRequest } from './useApiRequest';

type UsePages = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: number;
  after: string;
  author: number;
  author_exclude: number[];
  before: string;
  exclude: number[];
  include: number[];
  menu_order: string;
  offset: number;
  order: 'asc' | 'desc';
  orderby:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title'
    | 'menu_order';
  parent: number;
  parent_exclude: number[];
  slug: string;
  status: string;
};

type UseCreatePage = {
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password: string;
  parent: number;
  title: string;
  content: string;
  author: number;
  excerpt: string;
  featured_media: number;
  comment_status: 'open' | 'close';
  ping_status: 'open' | 'close';
  menu_order: any;
  meta: object;
  template: any;
};

type UseRetrivePage = {
  id: number;
  context: 'view' | 'embed' | 'edit';
  password: string;
};

type UseUpdatePage = {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password: string;
  parent: number;
  title: string;
  content: string;
  author: number;
  excerpt: string;
  featured_media: number;
  comment_status: 'open' | 'close';
  ping_status: 'open' | 'close';
  menu_order: any;
  meta: object;
  template: any;
};

type UseDeletePage = {
  id: number;
  force: boolean;
};

const endpoint = 'pages';

export const usePages = (options: UsePages) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreatePage = (options: UseCreatePage) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrivePage = (options: UseRetrivePage) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdatePage = (options: UseUpdatePage) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useDeletePage = (options: UseDeletePage) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
