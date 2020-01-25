import { useApiRequest } from './useApiRequest';

type UseRetrieveStatuses = {
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveStatus = {
  readonly context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'statuses';

export const useRetrieveStatuses = (options: UseRetrieveStatuses) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveStatus = (
  status: string,
  options: UseRetrieveStatus
) => {
  const { data, loading, error } = useApiRequest({
    id: status,
    options,
    endpoint
  });

  return { data, loading, error };
};
