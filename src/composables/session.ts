import { useMutation } from '@vue/apollo-composable';
import { useSessionStore } from '@/store/session';
import { isValidRedirect, tokenAndRedirectSchema } from '@/utils/redirect';
import { exchangeLoginToken } from '@/queries/auth/exchangeLoginToken';

const logoutLink = '/';

type SessionErrors =
  | 'invalid-params'
  | 'invalid-redirect'
  | 'parsing-redirect'
  | 'storing'
  | 'redirecting'
  | 'failed-exchange';

export const sessionEventMap: Record<
  SessionErrors,
  { error: boolean; text: string }
> = {
  'failed-exchange': { error: true, text: 'Failed to exchange token' },
  redirecting: { error: false, text: 'Redirect you to dashboard' },
  'invalid-redirect': { error: true, text: 'Redirect link is invalid' },
  'parsing-redirect': { error: false, text: 'Checking redirect link' },
  storing: { error: false, text: 'Storing your session' },
  'invalid-params': { error: true, text: 'Invalid URL parameters' },
};

export function useStoreSessionProcess(cb: (str: SessionErrors) => void) {
  const store = useSessionStore();
  const router = useRouter();

  const error = ref({
    error: false,
    type: '',
  });
  function process(token: string, redirect?: string) {
    // check availability of params (so we can cleanly handle the errors)
    const validated = tokenAndRedirectSchema.validate({
      redirect,
      token,
    });
    if (validated.error) {
      error.value = {
        error: true,
        type: 'invalid-params',
      };
      cb('invalid-params');
      return;
    }

    // validate redirect (or use default)
    if (!isValidRedirect(redirect)) {
      error.value = {
        error: true,
        type: 'invalid-redirect',
      };
      cb('invalid-redirect');
      return;
    }
    if (!redirect) redirect = '/';

    // store token
    cb('storing');
    store.setToken(token);

    // redirect to proper place
    cb('redirecting');
    router.replace(redirect);
  }

  return {
    error,
    process,
  };
}

export function useLoginTokenProcess(cb: (str: SessionErrors) => void) {
  const { error, process: storeProcess } = useStoreSessionProcess(cb);
  const redirectRef = ref<string | undefined>();
  const { onDone, onError, mutate } = useMutation(exchangeLoginToken);

  onDone(({ data }) => {
    const token = data.exchangeLoginToken.token as string;

    // rest of storage process
    cb('parsing-redirect');
    storeProcess(token, redirectRef.value);
  });

  onError(() => {
    // TODO handle more specific errors
    error.value = {
      error: true,
      type: 'failed-exchange',
    };
    cb('failed-exchange');
  });

  function process(loginToken: string, redirect?: string) {
    // check availability of params (so we can cleanly handle the errors)
    const validated = tokenAndRedirectSchema.validate({
      redirect,
      token: loginToken,
    });
    if (validated.error) {
      error.value = {
        error: true,
        type: 'invalid-params',
      };
      cb('invalid-params');
      return;
    }

    // exchange the token
    // onDone will handle the rest of the process
    redirectRef.value = redirect;
    mutate({
      token: loginToken,
    });
  }

  return {
    error,
    process,
  };
}

export function useLogout() {
  const store = useSessionStore();

  function logout() {
    store.clear();
    window.location.href = logoutLink;
  }

  return {
    logout,
  };
}

export function useLogin() {
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig();

  return {
    login(withRedirect = true) {
      if (!withRedirect) {
        router.push('/login');
        return;
      }

      router.push({
        path: '/login',
        query: {
          redirect: config.app.baseURL.slice(0, -1) + route.path,
        },
      });
    },
  };
}
