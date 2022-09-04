import { configureStore,combineReducers } from '@reduxjs/toolkit'
import searchReducer from './searchSlice.js';
import bussReducer from './bussSlice.js';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    search: searchReducer,
    buss:bussReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    serializableCheck:false,
    }),
})

export const persistor = persistStore(store)





