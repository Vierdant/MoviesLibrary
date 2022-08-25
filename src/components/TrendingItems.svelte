<script lang="ts">
    import { onMount } from "svelte";
    import ItemCard from "./ItemCard.svelte";
    export let trending: any;
    
    let trendingItemsContainer: HTMLElement;
    
    onMount(() => {
        const scrollInterval = setInterval(() => {
            if ((trendingItemsContainer as Element).scrollWidth - (trendingItemsContainer as Element).clientWidth === Math.floor((trendingItemsContainer as Element).scrollLeft)) {

                (trendingItemsContainer as Element).scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            } else {

                (trendingItemsContainer as Element).scrollBy({
                    top: 0,
                    left: 5,
                    behavior: "smooth"
                });
            }
        }, 5000);

        return () => {
            clearInterval(scrollInterval);
        }
    });

    
</script>


<div class="items-holder">
    <h2>Trending This Week</h2>
    <div class="trending-items snaps-inline" bind:this={trendingItemsContainer}>
        {#each trending as item}
            {#if item.media_type == "movie" || "tv" && item.title != undefined}
                <ItemCard {item} />
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    
    .items-holder {
        user-select: none;
    }

    .trending-items {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: hidden;
        overflow-y: hidden;
        overscroll-behavior-inline: contain;

        &:hover {
            overflow-x: auto;
        }

        &::-webkit-scrollbar {
                height: 9px;
            }
            
        &::-webkit-scrollbar-thumb {
            background: var(--in-scrollbar-thumb);
            border-radius: 4rem;
        } 
    }

    .snaps-inline {
        scroll-snap-type: inline mandatory;
        scroll-padding-inline: 1rem;
    }
</style>