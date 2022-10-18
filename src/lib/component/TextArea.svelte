<script lang="ts">
    export let placeholder: string
    export let value: string = ''
    export let name: string
    let grow_wrap: HTMLDivElement
</script>

<!-- size technique adapted from https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/ -->
<div>
    <div class="grow-wrap grid" bind:this={grow_wrap}>
        <textarea
            class="resize-none overflow-hidden outline-none bg-yellow-200"
            {placeholder}
            bind:value
            {name}
            on:input={() => (grow_wrap.dataset.replicatedValue = value)}
        />
    </div>
</div>

<style>
    .grow-wrap::after {
        /* Note the weird space! Needed to preventy jumpy behavior */
        content: attr(data-replicated-value) ' ';

        /* This is how textarea text behaves */
        white-space: pre-wrap;

        /* Hidden from view, clicks, and screen readers */
        visibility: hidden;
    }
    .grow-wrap > textarea,
    .grow-wrap::after {
        grid-area: 1 / 1 / 2 / 2;
    }
</style>
