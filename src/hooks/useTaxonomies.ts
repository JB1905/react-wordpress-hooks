import { useApiRequest } from './useApiRequest';

type UseRetrieveTaxonomies = {
  context?: 'view' | 'embed' | 'edit';
  type?: string;
};

type UseRetrieveTaxonomy = {
  // TODO taxonomy?: string;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'taxonomies';

export const useRetrieveTaxonomies = (options: UseRetrieveTaxonomies) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveTaxonomy = (
  taxonomy: string,
  options: UseRetrieveTaxonomy
) => {
  const { data, loading, error } = useApiRequest({
    id: taxonomy,
    options,
    endpoint
  });

  return { data, loading, error };
};
