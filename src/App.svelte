<script lang="ts">
    import Header from './lib/Header.svelte'
    import SubmissionForm from './lib/SubmissionForm.svelte'
</script>

<main>
    <!-- this would likely be where routing would happen -->
    <!-- container -->
    <div class="mx-auto my-16 max-w-screen-2xl">
        <!-- header -->
        <Header />
        <!-- form -->
        <SubmissionForm />
    </div>
</main>
