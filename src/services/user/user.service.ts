import { api } from 'api/axios';

import { IUser } from '@/types/user.interface';

import { USER } from './user.constants';

export const UserService = {
	async getAll() {
		return api.get<IUser[]>(`/${USER}`);
	},

	async getUser(id: number) {
		return api.get<IUser>(`/${USER}/by-id/${id}`);
	}
};
