import {createStore,combineReducers} from 'redux'
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    });
const store= createStore(rootReducer)
export default store;
