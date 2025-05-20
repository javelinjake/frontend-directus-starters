import type { PageServerLoad } from './$types';

import { useDirectus } from '$lib/directus/directus';
import type { ShowRoomData } from '../+page.svelte';

export const load = (async ({ fetch, params }) => {

    const { getDirectus, readItem } = useDirectus();

    const directus = getDirectus(fetch);

    const showroom = await directus.request<ShowRoomData>(readItem('showrooms', params.id));

    return {
        showroom
    };
}) satisfies PageServerLoad;