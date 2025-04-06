import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: (state = { value: 0 }) => state,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
