<script lang="ts">
    // todo: radius of circle should be controllable
</script>

<div
    class=" mt-64 mx-auto text-white text-center p-8 bg-black z-20 bg-clip-border text-sm md:text-md"
    id="circle"
>
    <slot />
</div>

<style lang="scss">
    #circle {
        border-radius: 50%;
        max-width: 544px;
        max-height: 544px;
    }
</style>
