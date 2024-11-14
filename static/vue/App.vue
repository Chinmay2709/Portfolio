<script setup>

    import gsap from 'gsap';
    import $ from 'jquery';



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

    export default {

        mounted() {

            $(function(){

                

            })

        }

    }

</script>

<style>

</style>