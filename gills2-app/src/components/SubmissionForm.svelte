<script lang="ts">
    import { onMount } from 'svelte'

    import Button from './Button.svelte'
    import Input from './Input.svelte'
    import TextArea from './TextArea.svelte'

    // does this component just keep track of its own state?
    // only needs loading, error, success
    // cool how this whole thing doesn't require any router

    const BASIN_URL = 'https://usebasin.com/f/c93020e4ccaa'

    const TEXT_MAX_CHARS = 15000;
    const NAME_MAX_CHARS = 1000;

    let form: HTMLFormElement

    // todo: maybe map response to possible reactive state
    enum State {
        error, // some yucky error (we ignore which)
        success, // nice
    }

    // todo: should use a nice fast library for validation of <2000 words

    // observable api state
    let state: Promise<State>

    $: console.log(state)

    async function submit_listener(e) {
        e.preventDefault()

        // get the form data
        const form_data = new FormData(form)

        // todo: do some validation here first
        if (form_data.get("submission_name").toString().length < 1) {
            console.log('validation failed!')
            // validation failed
            // todo: update state to show there was an error
            // should actually say what sort of error it is
            return
        }

        // make the request
        state = fetch(BASIN_URL, {
            method: 'POST',
            headers: {
                // needed to submit to basin from js
                Accept: 'application/json',
            },
            body: form_data,
        })
            .then((response) => {
                console.log(response)
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

        <!-- todo: maybe even add tests for this thing -->
        <!-- would require adding mocks -->

        <Button label="submit" />
    </form>

    {#await state}
        <!-- todo: show a loading spinner thing here or something -->
    {:then state}
        {#if state == State.success}
            <!-- either redirect to success page or show a message here-->
        {:else if state == State.error}
            <!-- show a sad face and a little error message -->
            <p class="text-gray-500">An error has occured! Please try again.</p>
        {/if}
    {/await}
</div>
