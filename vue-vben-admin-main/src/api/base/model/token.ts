export interface Token {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: any;
  sub: string;
  typ: string;
  azp: string;
  nonce: string;
  session_state: string;
  acr: string;
  scope: string;
  sid: string;
  phoneNumber: string;
  email_verified: boolean;
  roles: Array<string>;
  groups: Array<string>;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  resource_access: any;
}
