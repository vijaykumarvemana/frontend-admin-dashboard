import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from "../reducers/products";
import usersReducer from "../reducers/users";
import transactionReducer from "../reducers/transaction";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const initialState = {
    customer: {
        customers: [],
    },
    product: { 
        products: [], 
    },
    transaction: {
        transactions: [],

    }  
}

const persistConfig = {
    key: 'root',
    storage: storageSession,
    transforms: [encryptTransform({
        secretKey: process.env.REACT_APP_SECRET_KEY,
        onError: (error) => {
            console.log(error);
        },
    }),
],
}

const mainReducer = combineReducers({
    customer: usersReducer,
    product: productsReducer,
    transaction: transactionReducer,
})
 

const persistedReducer = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(configureStore)

export { configureStore, persistor }