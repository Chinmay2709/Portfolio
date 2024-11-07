<script setup>

    import gsap from 'gsap';
    import $ from 'jquery';

</script>

<template>
    
    <nav class="

        flex
        flex-row

        mt-[90px]

        fixed

        justify-evenly
        justify-items-start
        items-center
        
        h-[80px]
        w-[90%]

        text-[20px]

        bg-[#6355FF]

        shadow-lg
        rounded-lg

    ">

        <div class="

            flex
            flex-row

            text-[30px]
            text-[#FFFFFF]
            font-bold

            flex-1

            custom-font
        ">

            <div class="

                h-[25px]
                w-[25px]

                p-5

                mr-4
                ml-4

                rounded-md
                shadow-md

                bg-[#000000]
                bg-[url('/assets/myicon.png')]
                bg-no-repeat
                bg-cover
                bg-center
            ">

            </div>
            Chinmay Mishra
        </div>

        <div class="

            flex
            
            justify-center
            items-center

            mr-4

            
        ">
            
            <button class="
            
                
                bg-black
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