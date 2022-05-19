<script>
	import MainHeader from '@components/MainHeader.svelte';
</script>

<div class="min-h-full">
	<MainHeader />
	<div class="py-10">
		<main class="lg:col-span-9 xl:col-span-9 bg-base-100 max-w-3xl mx-auto">
			<slot />
		</main>
	</div>
</div>
