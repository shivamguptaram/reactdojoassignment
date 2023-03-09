import {createStore,combineReducers} from 'redux'
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
import blogReducer from './blog/blogReducer';
const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    blogReducer:blogReducer
    });
const store= createStore(rootReducer)
export default store;
