<script lang="ts">
    export let placeholder: string
    export let value: string = ''
    export let name: string
    export let disabled: boolean
</script>

<input
    class="text-entry py-2 resize-none overflow-hidden box-border w-full outline-none bg-yellow-200"
    {placeholder}
    bind:value
    {name}
    {disabled}
/>
