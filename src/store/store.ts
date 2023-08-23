import { MessagesApi } from "@/api/MessagesApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    [MessagesApi.reducerPath]: MessagesApi.reducer,
});

export const store = configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(MessagesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;