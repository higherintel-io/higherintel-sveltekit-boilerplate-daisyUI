// @ts-nocheck
function assertPath(path) {
	const type = typeof path;
	if (type !== 'string') {
		throw new TypeError(`The path should be a string, instead received a ${type}`);
	}
}

async function parseResponse(res) {
	// If a body response exists, parse anx extract the possible properties
	if (!res.ok) {
		const errorBody = await res.text();
		const data = JSON.parse(errorBody);
		if (data.error) {
			throw new Error(data.error.message);
		}
	}
	return res.json();
}

export function request(path, options = {}) {
	const {
		headers, // eslint-disable-line
		query = null,
		method = 'GET',
		body,
		host = import.meta.env.VITE_API_URL,
		...extraOpts
	} = options;
	assertPath(path);
	// eslint-disable-next-line no-debugger

	// Compose the request configuration object
	const reqOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...headers
		},
		...extraOpts
	};

	// If a body object is passed, automatically stringify it.
	if (body) {
		reqOptions.body = typeof body === 'object' ? JSON.stringify(body) : body;
	}

	let queryString = '';

	if (query) {
		// Convert to encoded string and prepend with ?
		queryString = new URLSearchParams(query).toString();
		queryString = queryString && `?${queryString}`;
	}

	return fetch(`${host}${path}${queryString}`, reqOptions).then(parseResponse);
}
