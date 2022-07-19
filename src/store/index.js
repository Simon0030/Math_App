import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
import numberReducer from './number'


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, number: numberReducer},
});

export default store;
