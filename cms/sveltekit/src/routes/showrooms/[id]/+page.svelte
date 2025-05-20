<script lang="ts">
	import ShowRoomCard from '../ShowRoomCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<ShowRoomCard showroom={data.showroom} />
