import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import { AuthSlice } from '@/store/auth/auth.slice';

export const rootReducers = combineReducers({
	auth: AuthSlice.reducer,
	toastr: toastrReducer
});
