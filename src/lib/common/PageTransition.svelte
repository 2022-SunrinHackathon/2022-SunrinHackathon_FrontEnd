<script>
    import {fly} from 'svelte/transition';
    export let refresh;
</script>
{#key refresh}
    <main>
        <div class="section" in:fly={{x: -10, duration: 500, delay: 500}} out:fly={{x: 10, duration: 500}}>
            <slot />
        </div>
    </main>
{/key}

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        height: auto;
        background-color: #F4F4F4;
        margin-top: 81px;
        background-image: url('/images/shapes.png');
        background-repeat: repeat-y;
    }
</style>