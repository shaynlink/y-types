import type { UserMe, UserWithPassword, BaseUser } from './users';

export interface ServiceResponse<D> {
  error: null | ServiceResponseError;
  result: null | D;
}

export interface ServiceResponseError {
  message: string;
  extra?: Record<string, any>;
}

export interface AuthorizationSignRequest {
  type: 'sign';
  userId: string;
}
export interface AuthorizationSignResponse extends ServiceResponse<{
  token: string;
}> {}

export interface AuthorizationVerifyRequest {
  type: 'verify';
  token: string;
}
export interface AuthorizationVerifyResponse extends ServiceResponse<{
  valide: true;
  decoded: {
    iat: number;
    exp: number;
    aud: string;
    iss: string;
    sub: string;
  }
}> {}

export interface AuthentificationRegisterRequest extends UserWithPassword  {}
export interface AuthentificationRegisterResponse extends ServiceResponse<{
  token: string;
}> {}

export interface AuthentificationLoginRequest extends Pick<UserWithPassword, 'email' | 'password'> {}
export interface AuthentificationLoginResponse extends ServiceResponse<{
  token: string;
}> {}

export interface UsetGetMeResponse extends ServiceResponse<UserMe> {}

export interface UserGetById extends ServiceResponse<BaseUser> {}

export interface UserFollowingResponse extends ServiceResponse<BaseUser[]> {}

export interface UserFollowerResponse extends ServiceResponse<BaseUser[]> {}

