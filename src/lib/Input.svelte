<script lang="ts">
    export let placeholder: string
    export let value: string = ''
    export let name: string
</script>

<input
    class="text-entry p-2 resize-none overflow-hidden w-full outline-none"
    {placeholder}
    bind:value
    {name}
/>
