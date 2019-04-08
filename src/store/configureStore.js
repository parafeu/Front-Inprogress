import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers';
import { getConfig } from './actions';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(getConfig());

export default store;
