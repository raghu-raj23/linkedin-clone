import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store; 

// export const store = configureStore({
//   reducer: {

//   },
// });
