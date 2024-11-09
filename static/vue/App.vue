<script setup>

    import navi from './components/navi.vue';
    import mainchat from './views/mainchat.vue';

</script>

<template>

    <header class="
        
        flex
        flex-col

        h-fit
        w-full

        justify-center
        items-center
        
    ">
    
        <navi />
    
    </header>

    <main id="canvas" class="
    
        flex
        flex-col

        h-full
        w-full

        justify-end
        items-center

    ">

        <mainchat />

    </main>

    

</template>

<script>

</script>

<style>

</style>