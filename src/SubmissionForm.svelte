<script lang="ts">
    import { onMount } from 'svelte'

    import Button from './lib/component/Button.svelte'
    import Input from './lib/component/Input.svelte'
    import TextArea from './lib/component/TextArea.svelte'
    import Error from './lib/container/Error.svelte'

    import { BarLoader } from 'svelte-loading-spinners'

    const BASIN_URL = 'https://usebasin.com/f/c93020e4ccaa'

    const TEXT_MAX_CHARS = 15000
    const NAME_MAX_CHARS = 1000

    let form: HTMLFormElement

    enum State {
        error, // some yucky error (we ignore which)
        success, // nice
    }

    // observable api state
    let state: Promise<State>

    $: console.log(state)

    async function submit_form(e) {
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
                return
            }
        }
        // validate text field
        {
            let submission_text = form_data.get('submission_text').toString()
            if (
                submission_text.length < 1 ||
                submission_text.length > TEXT_MAX_CHARS
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
                        return State.error
                }
            })
            // catch any magic mystery errors
            .catch((error) => State.error)
    }

    onMount(async () => {
        form.addEventListener('submit', submit_form)
    })
</script>

<div class="w-auto m-4 p-8 text-center bg-black text-red-600 text-lg">
    <form bind:this={form}>
        <!-- todo: should enforce this 2000 word limit with some nice lib -->
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
            <Error>
                <p>
                    An error has occured! :( Might be too few or too many words,
                    might be something else wrong, who knows.
                </p>
                <p>In any case, please forgive us and try again.</p>
            </Error>
        {/if}
    {/await}
</div>
