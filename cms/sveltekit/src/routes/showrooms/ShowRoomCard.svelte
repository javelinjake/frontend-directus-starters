<script lang="ts">
	import DirectusImage from '$lib/components/shared/DirectusImage.svelte';
	import { Button } from '$lib/components/ui/button';
	import type { ShowRoomData } from './+page.svelte';

	interface Props {
		showroom: ShowRoomData;
	}

	let { showroom }: Props = $props();
</script>

<article
	class="max-w-[400px] overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
>
	<div class="h-48 w-full overflow-hidden">
		<DirectusImage
			uuid={showroom.cover_image}
			alt={showroom.title}
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="p-6 text-center">
		<h2 class="mb-4 text-2xl font-semibold text-gray-800">{showroom.title}</h2>
		<div class="space-y-3 text-gray-600">
			<p class="address">
				<span class="font-medium text-gray-700">Address:</span>
				{showroom.address}, {showroom.postcode}
			</p>
			<p class="contact">
				<span class="font-medium text-gray-700">Contact:</span>
				{showroom.contact_number}
			</p>
			<div class="trading-hours mt-4">
				<Button
					type="button"
					class="btn preset-filled-primary-500"
					href={showroom.google_maps_url}
					target="_blank"
				>
					Navigate to {showroom.title}
				</Button>
				<!-- <p class="mb-2 font-medium text-gray-700">Trading Hours:</p> -->
				<!-- {#each showroom.trading_hours as hours}
					<div class="flex flex-row justify-center gap-2">
						<p class="text-sm">{hours.day}:</p>
						<p class="text-sm">{hours.hours}</p>
					</div>
				{/each} -->
			</div>
		</div>
	</div>
</article>
