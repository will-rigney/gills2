<script lang="ts">
    import Header from './components/Header.svelte'
    import SubmissionForm from './components/SubmissionForm.svelte'
    // todo: check this import
    import tailwind from './tailwind.css'
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
