import { useState, useEffect } from 'react';
import { useSafeContext } from 'react-safe-context-hooks';

import { WordPressContext } from '../context';

import { serializeOptions, passToBody } from '../utils';

import { RequestMethod } from '../enums/RequestMethod';

interface Params<T> {
  readonly id?: number | string;
  readonly options?: T | number;
  readonly requsetMethod?: string;
  readonly endpoint?: string;
}

interface WPResponse {
  status?: number;
  statusText?: string;
  headers?: Headers;
}

export const useApiRequest = <T extends object>({
  id,
  options,
  requsetMethod = RequestMethod.Get,
  endpoint = '',
}: Params<T>) => {
  const { url, headers } = useSafeContext(WordPressContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | object | undefined>(undefined);
  const [data, setData] = useState<object[]>([]);

  const [response, setResponse] = useState<WPResponse | undefined>({
    status: undefined,
    statusText: undefined,
    headers: undefined,
  });

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const query = [`${url}/wp-json/wp/v2/${endpoint}`];

        const settings = {
          method: requsetMethod,
          headers,
        };

        if (!options) {
          return;
        }

        switch (requsetMethod) {
          case RequestMethod.Get: {
            if (typeof options === 'number') {
              query.push(`/${options}`);
            } else if (Array.isArray(options)) {
              query.push(`?include=${options.join(',')}`);
            } else {
              query.push(serializeOptions(options));
            }

            break;
          }

          case RequestMethod.Post:
          case RequestMethod.Update: {
            if (typeof options === 'object') {
              Object.assign(settings, {
                body: passToBody(options),
              });
            }

            break;
          }

          case RequestMethod.Delete: {
            if (typeof options === 'object') {
              query.push(`/${id}`);

              Object.assign(settings, {
                body: passToBody(options),
              });
            }

            break;
          }
        }

        const res = await fetch(query.join(''), settings);

        const parsedResponse = await res.json();

        setLoading(false);

        setResponse({
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
        });

        if (parsedResponse.code) {
          setError(parsedResponse);
        } else {
          setData(parsedResponse);
        }
      } catch (err) {
        setLoading(false);

        setError(err);
      }
    }

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, endpoint, requsetMethod, url]);

  return { ...response, loading, error, data };
};
