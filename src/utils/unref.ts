import { MaybeComputedRef } from '@vueuse/core';

export function unrefComputed<T>(val?: MaybeComputedRef<T>) {
  if (val instanceof Function) return val();
  return val as T;
}
