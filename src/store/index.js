import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from "../reducers/products";
import usersReducer from "../reducers/users";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const initialState = {
    customer: {
        customers: [],
    },
    product: {
        products: [],
    },
}

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [encryptTransform({
        secretKey: 'my-super-secret-key',
        onError: (error) => {
            console.log(error);
        },
    }),
],
}

const mainReducer = combineReducers({
    customer: usersReducer,
    product: productsReducer,
})
 

const persistedReducer = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(configureStore)

export { configureStore, persistor }