import { OperationVariables } from '@apollo/client';
import { useQuery } from '@vue/apollo-composable';
import {
  DocumentParameter,
  OptionsParameter,
  VariablesParameter,
} from '@vue/apollo-composable/dist/useQuery';
import { Ref } from 'vue';

interface AsyncQueryRes<T> {
  data: Ref<T>;
  pending: Ref<boolean>;
}

export async function useAsyncQuery<T>(
  key: string, // must be unique per type of request
  document: DocumentParameter<T, OperationVariables>,
  variables: VariablesParameter<OperationVariables> = {},
  options: OptionsParameter<T, OperationVariables> = {},
): Promise<AsyncQueryRes<T>> {
  const data = await useAsyncData<T>(
    key,
    () => {
      const { onError, onResult } = useQuery(document, variables, options);

      return new Promise((resolve, reject) => {
        onResult(({ data }) => {
          resolve(data);
        });
        onError((err) => {
          reject(err);
        });
      });
    },
    {
      server: false, // no ssr for now
    },
  );
  if (data.error.value || !data.data.value) throw new Error('failed to fetch');
  return {
    pending: data.pending,
    data: data.data as Ref<T>,
  };
}
