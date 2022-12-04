import { api } from 'api/axios';

import { AUTH } from './auth.constants';
import { IAuthData } from './auth.helper';

export const AuthService = {
	async login(email: string, password: string) {
		const response = await api.post<IAuthData>(`/${AUTH}/login`, {
			email,
			password
		});

		return response.data;
	},

	async register(email: string, password: string) {
		const response = await api.post<IAuthData>(`/${AUTH}/register`, {
			email,
			password
		});

		return response.data;
	}
};
