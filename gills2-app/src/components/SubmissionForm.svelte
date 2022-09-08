<script lang="ts">
    import { onMount } from 'svelte'

    import Button from './Button.svelte'
    import Input from './Input.svelte'
    import TextArea from './TextArea.svelte'

    // does this component just keep track of its own state?
    // only needs loading, error, success
    // cool how this whole thing doesn't require any router

    const BASIN_URL = 'https://usebasin.com/f/c93020e4ccaa'

    let form: HTMLFormElement

    // todo: maybe map response to possible reactive state
    enum State {
        error,              // some yucky error (we ignore)
        success,            // nice
    }

    // todo: should use a nice fast library for validation of <2000 words

    // observable api state
    let state: Promise<State>

    async function submit_listener(e) {
        e.preventDefault()

        // get the form data
        const formData = new FormData(form)

        // make the request
        state = fetch(BASIN_URL, {
            method: 'POST',
            headers: {
                // needed to submit to basin from js
                Accept: 'application/json',
            },
            body: formData,
        })
            .then((response) => {
                switch (response.status) {
                    case 200:
                        return State.success
                    default:
                        // todo: maybe log what happened
                        return State.error
                }
            })
            // not sure what this even does
            .catch((error) => State.error)
    }

    onMount(async () => {
        form.addEventListener('submit', submit_listener)
    })
</script>

<div class="w-auto m-4 text-center">
    <form bind:this={form}>
        <!-- todo: should enforce this 2000 word limit -->
        <!-- todo: this is not allowed to be empty, name is (anonymous, check w jimmy) -->
        <TextArea
            placeholder="please write or copy text here. Maximum 2000 words."
            name="submission_text"
        />
        <Input
            placeholder="The name you wish to be credited by."
            name="submission_name"
        />

        <!-- todo: add an error label w conditional -->
        <!-- todo: maybe even add tests for this thing -->

        <!-- todo: add a loading spinner type thing -->

        <!-- todo: validation! -->
        <Button label="submit" />
    </form>
        
    {#await state}
    <!-- show a loading spinner thing here or something -->
    {:then state} 
        {#if state == State.success}
        {:else if state == State.error}
        {/if}
    {/await}
</div>
