import { combineReducers, createStore, compose } from 'redux'
import userReducer from '../reducers/userReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage
   };

const reducers = combineReducers({
    user: userReducer
})

const pReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(pReducer, composeEnhancers())
export const persistor = persistStore(store)