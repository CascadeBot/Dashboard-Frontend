import joi from 'joi';

export const redirectRegex = /^\/([a-zA-Z0-9_-]+\/?)*$/;
export const redirectSchema = joi.string().regex(redirectRegex).optional();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isValidRedirect(redirect: any): boolean {
  const validated = redirectSchema.validate(redirect);
  return !validated.error;
}

export const tokenAndRedirectSchema = joi.object({
  redirect: joi.string().optional(),
  token: joi.string().required(),
});
