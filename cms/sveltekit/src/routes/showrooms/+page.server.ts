import type { PageServerLoad } from './$types';
import { useDirectus } from '$lib/directus/directus';

export const load = (async ({ fetch }) => {

    const { getDirectus, readItems } = useDirectus();

    const directus = getDirectus(fetch);

    const showrooms = await directus.request(readItems('showrooms'));

    return {
        showrooms
    };
}) satisfies PageServerLoad;