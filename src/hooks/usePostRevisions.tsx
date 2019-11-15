import { useApiRequest } from './useApiRequest';

type UsePostRevisions = {
  parent?: number;
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
};

type CreatePostRevision = {};

type RetrievePostRevision = {
  parent?: number;
  id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type DeletePostRevision = {
  parent?: number;
  force?: boolean;
};

const endpoint = 'posts';

export const usePostRevisions = (
  parent: number,
  options?: UsePostRevisions
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/revisions`
  });

  return { data, loading, error };
};

export const useCreatePostRevision = (
  parent: number,
  options: CreatePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves`,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrievePostRevision = (
  parent: number,
  type: 'revisions' | 'autosaves',
  options: RetrievePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/${type}`
  });

  return { data, loading, error };
};

export const useDeletePostRevision = (
  parent: number,
  id: number,
  options?: DeletePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
