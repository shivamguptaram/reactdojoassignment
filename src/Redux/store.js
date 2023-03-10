import {createStore,combineReducers,applyMiddleware} from 'redux'
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
import blogReducer from './blog/blogReducer';
const thunkMiddleware=require('redux-thunk').default
// const axios =require('axios');
const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    blogReducer:blogReducer
    });
const store= createStore(rootReducer,applyMiddleware(thunkMiddleware))
export default store;
