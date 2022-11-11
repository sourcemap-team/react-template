import { User } from "entities/User";

export interface Credentials {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthSchema {
  token: string;
}

export interface LoginSchema {
  email: string;
  password: string;
}

export type refreshData = {
  data: {
    accessToken: string;
  };
};
