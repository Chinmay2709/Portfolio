<script setup>

    import gsap from 'gsap';
    import $ from 'jquery';

</script>

<template>
    
    <nav class="

        flex
        flex-row

        justify-evenly
        justify-items-start
        items-center
        
        h-[80px]
        w-[70%]

        text-[20px]

        bg-opacity-45

        shadow-lg

    ">

        <div class="

            flex
            flex-row

            text-[30px]
            text-[#ffffff]
            font-bold

            flex-1

            custom-font
        ">

            <div class="

                h-[25px]
                w-[25px]

                p-5

                cursor-pointer

                mr-4
                ml-4

                rounded-lg

                bg-[url('/assets/myicon.png')]
                bg-no-repeat
                bg-cover
                bg-center

            "></div>

            <div class="

                cursor-pointer

            ">

                Chinmay Mishra
            
            </div>
        
        </div>

        <div class="

            flex
            
            justify-center
            items-center

            mr-4

            
        ">
            
            <button class="
            
                
                bg-gradient-to-r
                
                from-[#0061ff]
                to-[#60efff]

                text-white
                
                shadow-md
                rounded-md

                w-[180px]
                h-[50px]
            


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
        
        font-family: sans-serif;

    }

</style>