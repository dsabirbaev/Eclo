

<template>
    <section class="py-10">
        <div class="container">
            <h2 class="mb-5 font-semibold dark:text-white">Brands</h2>

            <div class="my-2">
                <Carousel class="brand-carousel" :value="brands" :numVisible="3" :numScroll="1">
                    <template #item="slotProps">
                        <div class="rounded-lg border border-2 m-2 text-center">

                            <img :src="'http://165.22.110.111:8080/' + slotProps.data.brandIconPath"
                                :alt="slotProps.data.name"
                                class="rounded-t-lg  h-[200px] w-[200px] object-top object-cover" />

                            <div class="border bg-gray-200 w-[200px] mx-auto">
                                <h4 class="py-2 font-medium text-xl dark:text-white">{{ slotProps.data.name }}</h4>
                            </div>

                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Carousel from 'primevue/carousel';
import useBrand from "@sr/brand/useBrand";

const brands = ref([]);

const getBrand = async () => {
    try {
        const response = await useBrand.getBrand();
        const res = await response.data;
        brands.value = res;
    } catch (err) {
        console.log(err.message);
    }
}



onMounted(() => {
    getBrand();
})
</script>
  
<style lang="scss">
.brand-carousel .p-carousel-indicators {
    display: flex;
    column-gap: 10px;
    margin-top: 20px;
}

.brand-carousel .p-carousel-indicator .p-link {
    width: 40px;
    border-radius: 50px;
    height: 8px;
}

.brand-carousel .p-highlight button {
    background-color: #94a3b8;
}
</style>
  