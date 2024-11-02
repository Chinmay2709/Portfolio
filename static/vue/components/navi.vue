<script setup>

    import gsap from 'gsap';
    import $ from 'jquery';

</script>

<template>
    
    <nav class="

        flex
        flex-row

        mt-[120px]

        fixed
        
        justify-evenly
        items-center
        
        w-[90%]

        text-[20px]

        bg-[#FF1500]

        shadow-lg

    ">

        <div class="

            text-[50px]
            text-[#FF8000]
            font-bold

            custom-font
        ">
            Chinmay Mishra
        </div>

        <div class="

            h-[100px]
            w-[100px]

            
            bg-[url('/assets/myicon.png')]
            bg-no-repeat
            bg-cover
        ">

        </div>

        <div>
            
            <button class="
            
                
                bg-white
                text-black
                
                w-[150px]
                h-[40px]

            ">
                
                Ping Me!
            
            </button>
        
        </div>

    </nav>

</template>

<script>

</script>

<style lang="css">

    .custom-font{
        
        font-family: cursive;

    }

</style>