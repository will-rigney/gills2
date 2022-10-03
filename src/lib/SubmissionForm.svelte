<script lang="ts">
    import { onMount } from 'svelte'

    import Button from './Button.svelte'
    import Input from './Input.svelte'
    import TextArea from './TextArea.svelte'
    import Error from './Error.svelte'

    import { BarLoader } from 'svelte-loading-spinners'

    const BASIN_URL = 'https://usebasin.com/f/c93020e4ccaa'

    const TEXT_MAX_CHARS = 15000
    const NAME_MAX_CHARS = 1000

    // todo: maybe even add tests for this thing
    // would require adding mocks

    let form: HTMLFormElement

    enum State {
        error, // some yucky error (we ignore which)
        success, // nice
    }

    // todo: should ideally use a nice fast library for validation of <2000 words

    // observable api state
    let state: Promise<State>

    $: console.log(state)

    async function submit_listener(e) {
        // todo: remember if we implement a store to clear it on successful submission
        e.preventDefault()

        // get the form data
        const form_data = new FormData(form)

        // validate name field
        {
            let submission_name = form_data.get('submission_name').toString()
            if (
                submission_name.length < 0 ||
                submission_name.length > NAME_MAX_CHARS
            ) {
                console.log('submission name failed validation!')
                state = Promise.resolve(State.error)
                // todo: should actually say what sort of error it is
                return
            }
        }
        // validate text field
        {
            let submission_text = form_data.get('submission_text').toString()
            if (
                submission_text.length < 1 ||
                submission_text.length > NAME_MAX_CHARS
            ) {
                console.log('submission text failed validation!')
                state = Promise.resolve(State.error)
                return
            }
        }

        // request details
        let request = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: form_data,
        }

        // make the request
        state = fetch(BASIN_URL, request)
            .then((response) => {
                console.log(response)
                switch (response.status) {
                    case 200:
                        return State.success
                    default:
                        // todo: maybe log what happened
                        console.log('error making request: ' + response)
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

<div class="w-auto m-4 p-8 text-center bg-black text-red-600 text-lg">
    <form bind:this={form}>
        <!-- todo: should enforce this 2000 word limit -->
        <!-- todo: this is not allowed to be empty, name is (anonymous, check w jimmy) -->
        <TextArea
            placeholder="please write or copy text here. Maximum 2000 words."
            name="submission_text"
        />
        <br />
        <Input
            placeholder="The name you wish to be credited by."
            name="submission_name"
        />
        <br />
        <!-- todo: should make this button not-clickable while form in flight -->
        <Button label="submit" />
    </form>

    {#await state}
        <BarLoader color="gray-500" duration="1s" />
    {:then state}
        {#if state == State.success}
            <p>Submission was successful!</p>
            <p>thank you for your input into gills2.</p>
        {:else if state == State.error}
            <!-- show a sad face and a little error message -->
            <Error
                ><p>
                    An error has occured! :( Might be too few or too many words,
                    might be something else wrong, who knows.
                </p>
                <p>In any case, please forgive us and try again.</p></Error
            >
        {/if}
    {/await}
</div>
