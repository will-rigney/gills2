<script lang="ts">
    import Header from './lib/Header.svelte'
    import SubmissionForm from './lib/SubmissionForm.svelte'

    // some type of animation timer
</script>

<style lang="scss">
    main {
        background-image: url('assets/bg_gills.webp');
        background-repeat: repeat-x;
        background-position-y: bottom;
        background-size: 50%;
    }
</style>

<main>
    <!-- this would likely be where routing would happen -->
    <!-- container -->
    <div class="mx-auto my-16 max-w-screen-2xl">
        <!-- header -->
        <Header />

        <!-- this thing should be pinned to top right -->
        <div class="text-yellow-300 underline inline float-right w-1/4">
            <p>
                NOTICE: The <span class="bg-pink-400 text-black px-2 py-1 text-xl italic">1st</span> Gills 2 event is TBA on the jipprock
                Productions facebook page.
            </p>
        </div>

        <!-- info circle box thing -->
        <!-- should come up on click of icon -->
        <div class="text-white">
            <!-- some sort of heading -->
            <!-- todo: maybe just use the image? -->
            <p>G.gills 2</p>
            <h2 class="bg-blue-900 inline-block text-xl">REG. TEXT SUBMISSIONS</h2>
            <ul>
                <li>
                    All submissions are to be read by actors during a live music
                    performance.
                </li>
                <li>
                    All submissions are to be collated and interpreted by the
                    performance team.
                </li>
                <li>
                    Our intention is to create an abstract dialogue between
                    submissions.
                </li>
                <li>
                    Several submissions may be read at the same time, either in
                    conversation, irrespectively, or in any way that may work
                    with the music and the performance as a whole.
                </li>
            </ul>

            <p>Accepted formats include:</p>
            <!-- here is the tricky grid list bit -->
            <ul>
                <li>stories</li>
                <li>dialogue</li>
                <li>monologue</li>
                <li>poems</li>
                <li>lyrics</li>
                <li>observations</li>
                <li>advice</li>
                <li>directions</li>
                <li>theories</li>
                <li>questions</li>
                <li>advertisements (free)</li>
            </ul>
        </div>

        <!-- form -->
        <SubmissionForm />

        <!-- pink notice at the bottom  -->
        <div class="text-pink-300 text-xl">
            <p class="underline">NOTICE:</p>
            <!-- imo text could do with a bit of thought -->
            <p class="px-8">
                hate speech will not be included (racism, anti-LGBT, misogyny
                etc.)
            </p>
        </div>
    </div>
</main>
