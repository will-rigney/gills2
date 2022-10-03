<script lang="ts">
    import Header from './lib/Header.svelte'
    import SubmissionForm from './lib/SubmissionForm.svelte'
    import Circle from './lib/Circle.svelte'

    // some type of animation timer
</script>

<main class="pb-8">
    <!-- container -->
    <div class="mx-auto py-1 max-w-7xl">
        <!-- header -->
        <Header />

        <!-- info circle box thing -->
        <Circle>
            <p class="m-1">G.gills 2</p>
            <h2 class="bg-blue-900 inline-block text-xl m-2">
                REG. TEXT SUBMISSIONS
            </h2>
            <div class="bg-black">
                <ul class="list-disc ">
                    <li>
                        All submissions are to be read by actors during a live
                        music performance.
                    </li>
                    <li>
                        All submissions are to be collated and interpreted by
                        the performance team.
                    </li>
                    <li>
                        Our intention is to create an abstract dialogue between
                        submissions.
                    </li>
                    <li>
                        Several submissions may be read at the same time, either
                        in conversation, irrespectively, or in any way that may
                        work with the music and the performance as a whole.
                    </li>
                </ul>
            </div>
            <p>Accepted formats include:</p>
            <!-- here is the tricky grid list bit -->
            <div class="flex content-center">
                <ul class="list-disc flex-auto basis-1/3">
                    <li>stories</li>
                    <li>dialogue</li>
                    <li>monologue</li>
                </ul>
                <ul class="list-disc flex-auto basis-1/3">
                    <li>poems</li>
                    <li>lyrics</li>
                    <li>observations</li>
                    <li>advice</li>
                    <li>directions</li>
                </ul>
                <ul class="list-disc flex-auto basis-1/3">
                    <li>theories</li>
                    <li>questions</li>
                    <li>advertisements (free)</li>
                </ul>
            </div>
        </Circle>

        <!-- this thing should be pinned to top right -->
        <div
            class="text-yellow-300 underline leading-10 my-md-24 m-4 z-20 md:absolute md:top-0 md:right-0 md:max-w-sm"
        >
            <p>
                NOTICE: The <span
                    class="bg-pink-500 text-black px-2 py-1 text-xl italic no-underline"
                    >1st</span
                > Gills 2 event is TBA on the jipprock Productions facebook page.
            </p>
        </div>

        <!-- form -->
        <SubmissionForm />

        <!-- pink notice at the bottom  -->
        <div class="text-pink-300 text-xl m-md-16 mt-md-8 m-4">
            <p class="underline">NOTICE:</p>
            <!-- imo text could do with a bit of thought -->
            <p class="px-8">
                hate speech will not be included (racism, anti-LGBT, misogyny
                etc.)
            </p>
        </div>
    </div>
</main>
