import { api } from 'api/axios';

import { IVideo } from '@/types/video.interface';

import { VIDEO } from './video.contants';

export const VideoService = {
	async getAll() {
		return api.get<IVideo[]>(`/${VIDEO}`);
	},

	async getMostPopular() {
		return api.get<IVideo>(`/${VIDEO}/most-popular`);
	}
};
