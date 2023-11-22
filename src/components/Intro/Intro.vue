

<template>
    <section class="bg-green-100 dark:bg-gray-700 pt-[80px]">
        <div class="card">
            <Carousel class="intro-carousel" :value="images" :numVisible="1" :numScroll="1" :autoplayInterval="3000" indicatorsContentClass="dd">
                <template #item="slotProps">
                    <div class="carousel-data flex items-center justify-between relative px-5">

                        <div class="w-full">
                            <div class="carousel-intro-one flex flex-col h-[690px] justify-center">
                                <h4 class="text-[20px] text-[#334155] dark:text-white font-medium mb-4">In this season,
                                    find the best 🔥</h4>
                                <h1
                                class="w-[550px] text-[48px] text-[#0F172A] dark:text-white font-bold mb-8 leading-[1.2]">
                                    Exclusive collection for everyone</h1>
                                <button
                                class="self-start bg-[#0F172A] text-white text-[16px] py-5 px-[36px] rounded-full font-semibold flex items-center gap-x-3 hover:opacity-[0.8] dark:border dark:border-white">Explore
                                    now <i class='pi pi-search text-[25px]'></i></button>
                            </div>
                        </div>
                        <img :src="slotProps.data.src" class="w-[700px] h-[700px] absolute right-0 bottom-0 object-contain overflow-visible">
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
const images = ref([
    { src: new URL('@ass/images/1.png', import.meta.url) },
    { src: new URL('@ass/images/2.png', import.meta.url) },
    { src: new URL('@ass/images/3.png', import.meta.url) },
]);
</script>
  
<style lang="scss">
   .intro-carousel .p-carousel-indicators{
       display: flex;
       column-gap: 10px;
    }
    .intro-carousel .p-carousel-indicator .p-link{
        width: 80px;
        border-radius: 50px;
        height: 4px;
    }
    .p-highlight button{
        background-color: #0F172A;
    }
</style>