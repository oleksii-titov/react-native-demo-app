import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from './user';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
