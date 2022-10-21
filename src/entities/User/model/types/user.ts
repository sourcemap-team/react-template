export interface User {
  username: string
  token: string
}

export interface UserSchema {
  authData?: User
}
