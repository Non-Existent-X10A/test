export interface Account {
  email: string;
  emailVerified: boolean;
  firstName: string;
  id: string;
  lastName: string;
  userProfileMetadata?: userProfileMetadata;
  username: string;
  groups: string[];
  attributes?: { [key: string]: any };
}

interface userProfileMetadata {
  attributes: Array<Attributes>;
}

interface Attributes {
  displayName: string;
  name: string;
  readOnly: boolean;
  required: boolean;
  validators: Map<String, Object>;
}
