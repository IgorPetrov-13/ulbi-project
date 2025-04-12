import { UserSchema } from "entities/User";

export interface StateSchema {
  user: UserSchema;
}

export interface ThunkExtraArg {
  api: string;
}