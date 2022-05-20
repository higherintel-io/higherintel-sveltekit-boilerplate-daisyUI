// @ts-nocheck
/** @type {import('@sveltejs/kit').RequestHandler} */
import { getFormBody } from '../../utils/getFormBody';
import { strapiClient } from '../../api/strapi';

export const post = async ({ request }) => {
	try {
		const registrationData = getFormBody(await request.formData());
		const response = await strapiClient.register(registrationData);

		const authCookie = `auth-user=${response.jwt}; HttpOnly; Path=/;`;

		return { headers: { Location: '/dashboard', 'Set-Cookie': authCookie }, status: 302 };
	} catch (error) {
		return {
			headers: { Location: `/register`, 'Set-Cookie': `auth-error=${error.message}` },
			status: 302
		};
	}
};
