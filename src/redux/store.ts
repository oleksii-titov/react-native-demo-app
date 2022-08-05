import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from './user';

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
