export interface CounterStateSchema {
  value: number;
}

export interface StateSchema {
  counter: CounterStateSchema;
}

export interface ThunkExtraArg {
  api: string;
}