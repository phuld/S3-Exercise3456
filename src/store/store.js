import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import userReducer from '../reducers/userReducer'
import uiReducer from '../reducers/uiReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage: storage
};

const reducers = combineReducers({
    user: userReducer,
    ui: uiReducer
})

const pReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(pReducer, composeEnhancers(
    applyMiddleware(thunk)
))
export const persistor = persistStore(store)