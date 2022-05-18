<script>
	import '../app.css';
	import MainHeader from '@components/MainHeader.svelte';
</script>

<div class="min-h-full">
	<MainHeader />
	<div class="py-10">
		<main class="lg:col-span-9 xl:col-span-9 bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 py-4">
			<slot />
		</main>
	</div>
</div>
