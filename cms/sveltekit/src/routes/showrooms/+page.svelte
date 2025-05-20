<script lang="ts">
	import DirectusImage from '$lib/components/shared/DirectusImage.svelte';
	import type { PageData } from './$types';
	import ShowRoomCard from './ShowRoomCard.svelte';

	let { data }: { data: PageData } = $props();

	export interface ShowRoomData {
		id: string;
		user_created: string;
		date_created: string;
		user_updated: null | string;
		date_updated: null | string;
		title: string;
		address: string;
		postcode: string;
		contact_number: string;
		trading_hours: Tradinghour[];
		geo: Geo;
		cover_image: string;
	}

	interface Geo {
		type: string;
		coordinates: number[];
	}

	interface Tradinghour {
		day: string;
		hours: string;
	}

	let showrooms: ShowRoomData[] = $derived(data.showrooms);
</script>

<div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="flex flex-row flex-wrap justify-items-center gap-8 p-8">
		{#each showrooms as showroom}
			<ShowRoomCard {showroom} />
		{/each}
	</div>
</div>
