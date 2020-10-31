import { useApiRequest } from './useApiRequest';

type UseBlocks = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly after?: string;
  readonly before?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  readonly slug?: string[];
  readonly status?: [
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'trash'
    | 'auto-draft'
    | 'inherit'
    | 'request-pending'
    | 'request-confirmed'
    | 'request-failed'
    | 'request-completed'
    | 'any'
  ];
};

type UseCreateBlock = {
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly title?: object;
  readonly content?: object;
  readonly template?: string;
};

type UseRetrieveBlock = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly password?: string;
};

type UseUpdateBlock = {
  readonly id?: number;
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly title?: object;
  readonly content?: object;
  readonly template?: string;
};

type UseDeleteBlock = {
  readonly force?: boolean;
};

const endpoint = 'blocks';

export const useBlocks = (options?: UseBlocks) => {
  return useApiRequest({ options, endpoint });
};

export const useCreateBlock = (options: UseCreateBlock) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useRetrieveBlock = (options: UseRetrieveBlock) => {
  return useApiRequest({ options, endpoint });
};

export const useUpdateBlock = (options: UseUpdateBlock) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useDeleteBlock = (id: number, options?: UseDeleteBlock) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });
};
