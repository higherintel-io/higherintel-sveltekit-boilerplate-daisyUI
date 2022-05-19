/* eslint-disable no-debugger */
import { request } from './fetch.js';
import { env } from '../vars/env.js';
export const strapiClient = {
	/**
	 * @param {any} registrationData
	 */
	async register(registrationData) {
		const response = await request('/api/auth/local/register', {
			host: env.strapiApiUrl,
			method: 'POST',
			body: { username: registrationData.email, ...registrationData }
		});
		console.log(response);
		debugger;
	}
};
