<script lang="ts">
    export let label: string
    export let hidden: boolean = false
    export let disabled: boolean
</script>

<button
    {hidden}
    {disabled}
    class="p-2 my-4 mx-auto border-1 border-solid flex justify-center bg-yellow-200"
    >
    {label}
</button
>

<style>
    *:hover:enabled {
        text-decoration: underline;
    }
</style>
