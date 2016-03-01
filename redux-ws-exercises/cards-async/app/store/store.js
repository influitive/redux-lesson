import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as deckReducers from '../deck/reducers';
import * as discardReducers from '../discard/reducers';
import * as handReducers from '../hand/reducers';

let createStoreWithMiddleware;

createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const rootReducer = combineReducers(deckReducers, discardReducers, handReducers);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
