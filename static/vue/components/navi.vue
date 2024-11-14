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

            <div id="name" class="

                flex
                felx-row

                cursor-pointer
                
                antialiased
                hover:subpixel-antialiased

                border-solid
                border-r-2
                border-l-2
                border-r-amber-300
                border-l-white


            ">

                <div id="flow_c" class="hidden ml-1">C</div>
                <div id="flow_h2" class="hidden">h</div>
                <div id="flow_i2" class="hidden">i</div>
                <div id="flow_n" class="hidden">n</div>
                <div id="flow_m2" class="hidden">m</div>
                <div id="flow_a2" class="hidden">a</div>
                <div id="flow_y" class="hidden">y</div>

                <div id="flow_m1" class="hidden ml-2">M</div>
                <div id="flow_i1" class="hidden">i</div>
                <div id="flow_s" class="hidden">s</div>
                <div id="flow_h1" class="hidden">h</div>
                <div id="flow_r" class="hidden">r</div>
                <div id="flow_a1" class="hidden">a</div>
                
                
                
            
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

    export default {

        mounted() {

            $(function(){

                const flowTM = new gsap.timeline();

                flowTM.to('#flow_c',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_h2',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_i2',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_n',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_m2',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_a2',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_y',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_m1',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_i1',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_s',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_h1',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_r',{

                    display: 'block',
                    duration: 0.1

                }).to('#flow_a1',{

                    display: 'block',
                    duration: 0.1,
                    onComplete: function(){

                        $('#name').addClass('border-r-0')

                    }

                })

            })

        }

    }

</script>

<style lang="css">

    .custom-font{
        
        font-family: sans-serif;

    }

</style>