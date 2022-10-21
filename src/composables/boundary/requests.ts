import { useLazyQuery } from '@vue/apollo-composable';
import { VariablesParameter } from '@vue/apollo-composable/dist/useQuery';
import { DocumentNode } from 'graphql';

// TODO handle refetching from not within cache
export function useGqlQuery<T>(
  key: string,
  query: DocumentNode,
  variables: VariablesParameter<Record<string, string>> = {},
) {
  return useBoundaryFetch<T>(key, () => {
    const { onResult, onError, load } = useLazyQuery<T>(query, variables);
    return new Promise((resolve, reject) => {
      onResult(({ data }) => {
        resolve(data);
      });
      onError((err) => {
        reject(err);
      });
      load();
    });
  });
}
