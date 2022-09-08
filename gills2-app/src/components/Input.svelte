<script lang="ts">
    export let placeholder: string
    let value: string = ''
</script>

<div>
    <textarea
        class="text-entry p-2 m-2 flex-grow h-48 align-top"
        {placeholder}
        {value}
    />
</div>
