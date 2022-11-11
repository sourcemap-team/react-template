export interface User {
  email: string;
  roles: string[];
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  isManager: boolean;
  status: string;
}

export interface IJWTDecode {
  UserInfo: User;
}

export interface UserSchema extends User {}
