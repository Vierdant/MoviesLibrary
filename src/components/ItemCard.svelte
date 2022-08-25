<script lang="ts">
    export let item: any;

    console.log(item)
</script>

<div class="item-card">
    <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} width="150" height="225" />
    <div class="average-vote" 
        class:text-good={item.vote_average >= 7}
        class:text-ok={item.vote_average >= 4 && item.vote_average < 7}
        class:text-bad={item.vote_average < 4}
    >{Math.round((item.vote_average + Number.EPSILON) * 100) / 100}</div>
    <div class="media-type">
        {#if item.media_type == "movie"}
            <span class="material-symbols-sharp">
            theaters
            </span>
        {:else if item.media_type == "tv"}
            <span class="material-symbols-sharp">
            tv
            </span>
        {:else}...
        {/if}</div>
</div>

<style lang="scss">

    .item-card {
        display: inline-block;
        scroll-snap-align: start;
        margin-bottom: -1rem;

        &:hover {
            .average-vote {
                opacity: 1;
            }

            .media-type {
                opacity: 0.7;
            }
        }

        img {  
            border-radius: 1rem;
        }

        .average-vote {
            display: inline-block;
            position: relative;
            top: -2.5rem;
            left: 0.5rem;
            background-color: var(--item-background-color);
            padding: 2px 2px;
            border-radius: 5px;
            min-width: 2rem;
            text-align: center;
            opacity: 0.3;
            transition: opacity 0.5s ease-in-out;
        }

        .media-type {
            display: inline-block;
            position: relative;
            top: -14rem;
            left: 5rem;
            opacity: 0.3;
            transition: opacity 0.5s ease-in-out;
            color: #deddee;
        }

        
    }

    :global(.text-good) {
        color: #5fef7c;
    }

    :global(.text-ok) {
        color: #efc855;
    }

    :global(.text-bad) {
        color: #fb4f4f;
    }

</style>