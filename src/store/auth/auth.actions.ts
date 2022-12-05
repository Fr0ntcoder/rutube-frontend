import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';

import { IAuthData } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

import { toastError } from '@/utils/api.utils';

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Регистрация', 'Успешно выполнена');
			return response;
		} catch (error) {
			toastError(error, 'Error request');
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Вход в систему', 'Успешно выполнена');
			return response;
		} catch (error) {
			toastError(error, 'Error request');
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	return {};
});
