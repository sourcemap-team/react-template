import { AuthSchema } from "features/auth/auth-by-username/model";

import { UserSchema } from "entities/User";

export interface StateSchema {
  user: UserSchema;
  auth: AuthSchema;
}
