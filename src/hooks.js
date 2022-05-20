import cookie from 'cookie';
const COOKIE_NAME = 'user-auth';

export async function getSession(request) {
	if (request.locals.user) {
		return { user: request.locals.user };
	}
	return {};
}

export async function handle({ event, resolve }) {
	const loggingOut = event.url.pathname === '/api/logout.json';

	const cookies = cookie.parse(event.request.headers.cookie || '');

	// before endpoint call
	event.locals.user = cookies[COOKIE_NAME];

	// endpoint call
	const response = await resolve(event);
	const head = response.headers.get('content-type');
	console.log(head);

	if (response.headers.get('content-type').startsWith('text/html')) {
		const body = await response.text();
		return new Response(body, response);
	}
	if (response.headers.get('content-type').startsWith('application/json')) {
		const body = await response.json();
		return new Response(body, response);
	}

	// after endpoint call
	// const user = loggingOut ? '' : event.locals.user;

	// const secure = process.env.NODE_ENV === 'production';
	// const maxAge = 7_200; // (3600 seconds / hour) * 2 hours
	// const sameSite = 'Strict';
	// const setCookieValue = `${COOKIE_NAME}=${user || ''}; Max-Age=${maxAge}; Path=/; ${
	// 	secure ? 'Secure;' : ''
	// } HttpOnly; SameSite=${sameSite}`;

	// return {
	// 	response,
	// 	headers: {
	// 		...response.headers,
	// 		...(user || loggingOut ? { 'Set-Cookie': setCookieValue } : {})
	// 	}
	// };
}
