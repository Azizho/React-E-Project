import { GetAllData } from "@/api/GetAllData";
import debounceSlice from "@/slices/debounceSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    [GetAllData.reducerPath]: GetAllData.reducer,
    debounceSlice: debounceSlice,
});

export const store = configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(GetAllData.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
