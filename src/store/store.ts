// @ts-ignore
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducers } from '@/store/root-reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					'FLUSH',
					'REHYDRATE',
					'PAUSE',
					'PERSIST',
					'PURGE',
					'REGISTER'
				]
			}
		})
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducers>;
