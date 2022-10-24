import { useLazyQuery } from '@vue/apollo-composable';
import { VariablesParameter } from '@vue/apollo-composable/dist/useQuery';
import { DocumentNode } from 'graphql';
import { BoundaryFetchSettings } from './query';

export function useGqlQuery<T>(
  key: string,
  query: DocumentNode,
  variables: VariablesParameter<Record<string, string>> = {},
  settings: BoundaryFetchSettings = {},
) {
  return useBoundaryFetch<T>(
    key,
    (refreshed) => {
      const { onResult, onError, load } = useLazyQuery<T>(query, variables, {
        prefetch: false,
        fetchPolicy: refreshed ? 'network-only' : 'cache-first',
      });
      return new Promise((resolve, reject) => {
        onResult(({ data }) => {
          resolve(data);
        });
        onError((err) => {
          reject(err);
        });
        load();
      });
    },
    settings,
  );
}
