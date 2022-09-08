<script lang="ts">
    import Header from './components/Header.svelte'
    import SubmissionForm from './components/SubmissionForm.svelte'
    // todo: check this import
    import tailwind from './tailwind.css'
</script>

<!-- todo: should have tailwind scss file with common classes e.g. headers -->

<main>
    <!-- this ig would be where routing happens -->

    <div class="m-8">
        <!-- header -->
        <Header />

        <!-- form -->
        <SubmissionForm />

        <!-- todo: some sort of navigation or change component on submit -->
    </div>
</main>
