import { useState, useEffect, useContext } from 'react';

import { WPContext } from '../context';

import { serialize } from '../utils';

export const useApiRequest = ({
  options,
  requsetMethod = 'get',
  endpoint = ''
}: {
  options?: object | number;
  requsetMethod?: string;
  endpoint?: string;
}) => {
  const url = useContext(WPContext);

  const [data, setData] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${url}/wp-json/wp/v2${endpoint ? `/${endpoint}` : ''}${
            typeof options === 'number' && requsetMethod === 'get'
              ? `/${options}`
              : serialize(options)
          }`,
          {
            method: requsetMethod
          }
        );

        setData(await res.json());
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    loadData();
  }, [endpoint, options, requsetMethod, url]);

  return { data, loading, error };
};
