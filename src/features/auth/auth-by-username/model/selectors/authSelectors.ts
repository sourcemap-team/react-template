import { StateSchema } from "app/providers/StoreProvider";

export const selectCurrentToken = (state: StateSchema) => state.auth.token;
