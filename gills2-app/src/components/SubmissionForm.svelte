<script lang="ts">
    import Button from './Button.svelte'
    import Input from './Input.svelte'
</script>

<div class="w-auto m-4">
    <Input placeholder="please write or copy text here. Maximum 2000 words." />
    <Input placeholder="The name you wish to be credited by." />

    <Button label="submit" />
</div>
