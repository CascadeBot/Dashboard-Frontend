export function useBoundary() {
  function refresh() {
    // TODO get refresh data from boundary
    refreshNuxtData();
  }

  return {
    refresh,
  };
}
