// @ts-nocheck
/** @type {import('@sveltejs/kit').RequestHandler} */
import { getFormBody } from '../../utils/getFormBody';
import { strapiClient } from '../../api/strapi';

export const post = async ({ request }) => {
	const registrationData = getFormBody(await request.formData());
	const response = await strapiClient.register(registrationData);
	console.log(response);
	debugger;
	// await create(data);
	return { headers: { Location: '/dashboard' }, status: 302 };
};
