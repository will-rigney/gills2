<script lang="ts">
    import Header from './lib/component/Header.svelte'
    import SubmissionForm from './SubmissionForm.svelte'
    import Circle from './lib/container/Circle.svelte'
    import BottomNotice from './lib/container/BottomNotice.svelte'
    import TopNotice from './lib/container/TopNotice.svelte'
    import MainContainer from './lib/container/MainContainer.svelte'
    import HorizontalListFlexContainer from './lib/container/HorizontalListFlexContainer.svelte'
</script>

<!-- container -->
<MainContainer>
    <!-- header -->
    <Header />
    <!-- info circle box thing -->
    <Circle>
        <h2 class="bg-blue-900 inline-block text-xl m-2">
            REG. TEXT SUBMISSIONS
        </h2>
        <div class="p-2 m-2">
            <p>
                All submissions to be read by actors during a live music
                performance.
            </p>
            <p>
                All submissions to be collated and interpreted by the
                performance team.
            </p>
            <p>
                Our intention is to create an abstract dialogue between
                submissions.
            </p>
            <p>
                Several submissions may be read at the same time, either in
                conversation, irrespectively, or in any way that may work with
                the music and the performance as a whole.
            </p>
        </div>
        <div class="p-2 m-2">
            <p>Accepted formats include:</p>
            <!-- here is the tricky grid list bit -->
            <!-- likely some way these elements could be automatically partitioned -->
            <HorizontalListFlexContainer>
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
            </HorizontalListFlexContainer>
        </div>
    </Circle>

    <!-- notice pinned to top right on big screens, underneath on small -->
    <!-- <TopNotice>
        <p>
            NOTICE: The <span
                class="bg-pink-500 text-black px-2 py-1 text-xl italic no-underline"
                >1st</span
            > Gills 2 event is TBA on the jipprock Productions facebook page.
        </p>
    </TopNotice> -->

    <!-- form -->
    <!-- <SubmissionForm />-->

    <div class="p-2 m-2">
    <div class="w-auto m-4 p-8 text-center bg-black text-red-600 text-lg">
        <p>Submissions have now been closed. Thank you again for your input into gills2.</p>
        <p>RSVP to the event <a class="text-yellow-300 hover:text-red-400" href="https://forms.gle/VYzCrbVnAgh5BuYs7">here</a>.</p>
    </div>

    <!-- pink notice at the bottom  -->
    <BottomNotice>
        <p class="underline">NOTICE:</p>
        <p class="px-8">
            hate speech will not be included (racism, anti-LGBT, misogyny etc.)
        </p>
    </BottomNotice>
</MainContainer>
