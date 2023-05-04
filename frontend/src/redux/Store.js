import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"

import {persistReducer,persistStore} from "redux-persist"
import  storage  from "redux-persist/lib/storage"
import RootReducer from "./RootReducer"



const persistConfig={
    key:"root",
    storage,
    keyPrefix:"redux-"
}

const store=configureStore({
    reducer:persistReducer(persistConfig,RootReducer),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
        immutableCheck:false
    })
})




const persistor=persistStore(store)

export {store,persistor}