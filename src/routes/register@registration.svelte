<script>
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	let errorMessage = '';
	const registrationFields = [
		{
			key: 'firstName',
			label: 'First Name',
			value: 'User',
			error: '',
			valid: false,
			touched: false
		},
		{
			key: 'lastName',
			label: 'Last Name',
			value: 'Name',
			error: '',
			valid: false,
			touched: false
		},
		{
			key: 'email',
			label: 'Email',
			value: 'qdhenry@gmail.com',
			error: '',
			valid: false,
			touched: false
		},
		{
			key: 'password',
			label: 'Password',
			value: 'commerce1',
			error: '',
			valid: false,
			touched: false
		},
		{
			key: 'confirmPassword',
			label: 'Confirm Password',
			value: 'commerce1',
			error: '',
			valid: false,
			touched: false
		}
	];

	onMount(() => {
		if ($session.errorMessage) {
			errorMessage = $session.errorMessage;
		}
	});
</script>

<div class="flex bg-secondary text-white p-4">
	{JSON.stringify(errorMessage)}
	<h1 class="font-black mb-3 text-3xl">New User Registration</h1>
</div>
<form class="p-4" method="post" action="/api/register">
	{#each registrationFields as field, index}
		<div class="form-control  w-full flex py-3">
			<label for="first name" class="pb-2 font-bold">{field.label}</label>
			<input
				type="text"
				name={field.key}
				bind:value={field.value}
				placeholder="Enter your {field.label}"
				class="input input-lg bg-gray-100 shadow-md h-14"
			/>
		</div>
	{/each}
	<div class="flex py-4">
		<button type="submit" class="btn btn-primary w-full h-16">Register</button>
	</div>
</form>
