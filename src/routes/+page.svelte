<script lang="ts">
    import TrendingItems from "../components/TrendingItems.svelte";
    import type { PageData } from './$types';

	export let data: PageData;
</script>


<TrendingItems trending={data.trending} />
