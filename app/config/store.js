import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger';
import immutableCheckMiddleWare from 'redux-immutable-state-invariant';

// Setup
const middleWare = [];

// Immutability Check
if (process.env.NODE_ENV === 'development') {
  middleWare.push(immutableCheckMiddleWare());
}

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);


const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export function makeStore() {
  console.log('make store');
  return createStoreWithMiddleware();
}