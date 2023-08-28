import { GetDataApi } from '@/api/GetDataApi';
import debounceSlice from '@/slices/debounceSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
	[GetDataApi.reducerPath]: GetDataApi.reducer,
	debounceSlice: debounceSlice,
});

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(GetDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
