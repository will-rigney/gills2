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
        loading,
        error,
        success,
    }

    // todo: should use a nice fast library for validation of <2000 words

    // todo: should be obversable state
    let state: State

    async function submit_listener(e) {
        e.preventDefault()

        // get the form data
        const formData = new FormData(form)

        // make the request
        fetch(BASIN_URL, {
            method: 'POST',
            headers: {
                // needed to submit to basin from js
                Accept: 'application/json',
            },
            body: formData,
        })
            .then((response) => {
                // todo: more elegant error handling
                // more reactive
                if (response.status === 200) {
                    // success
                    console.log('success')
                } else {
                    // failure
                    console.log('fail')
                }
            })
            .catch((error) => console.log(error))
    }

    onMount(async () => {
        // async function make_submission() {
        form.addEventListener('submit', submit_listener)
    })
</script>

<div class="w-auto m-4">
    <!-- {#if loading}
    {#else} -->
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

        <Button label="submit" />
    </form>
</div>
