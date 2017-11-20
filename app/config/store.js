import { createStore, applyMiddleware } from 'redux';
// import reducers from '../reducers';
import { createLogger } from 'redux-logger';

// Setup
const middleWare = [];

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