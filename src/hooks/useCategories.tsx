import { useApiRequest } from './useApiRequest';

type UseCategories = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: string;
  exclude: number[];
  include: number[];
  order: 'asc' | 'desc';
  orderby:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  hide_empty: boolean;
  parent: number;
  post: number;
  slug: string;
};

type UseCreateCategory = {
  description: string;
  name: string;
  slug: string;
  parent: number;
  meta: object;
};

type UseRetriveCategory = {
  readonly id: number;
  context: 'view' | 'embed' | 'edit';
};

type UseUpdateCategory = {
  readonly id: number;
  description: string;
  name: string;
  slug: string;
  parent: number;
  meta: object;
};

type UseDeleteCategory = {
  force: boolean;
};

const endpoint = 'categories';

export const useCategories = (options?: UseCategories | number | number[]) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint
  });

  return { data, loading, error };
};

export const useCreateCategory = (options: UseCreateCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetriveCategory = (options: UseRetriveCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint
  });

  return { data, loading, error };
};

export const useUpdateCategory = (options: UseUpdateCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteCategory = (id: number, options?: UseDeleteCategory) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
