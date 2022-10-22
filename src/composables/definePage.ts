interface Meta {
  fullscreen?: boolean;
  needsAuth?: boolean;
}

export function definePage() {
  const obj: Meta = {};

  return {
    setFullscreen() {
      obj.fullscreen = true;
      return this;
    },
    needsAuth() {
      obj.needsAuth = true;
      return this;
    },
    build() {
      definePageMeta(obj);
    },
  };
}
