


<template>
    <section class="py-5">
        <div class="container">
            <h2 class="mb-5 font-semibold dark:text-white">Products</h2>

            <div class="my-2">
                <Carousel class="product-carousel" :value="productDetail" :numVisible="3" :numScroll="3">
                    <template #item="slotProps">
                        <div class="rounded-lg border border-2 m-2 text-center">

                            <img :src="'http://165.22.110.111:8080/' + slotProps.data.imagePath"
                                :alt="slotProps.data.color"
                                class="rounded-t-lg  h-[200px] w-[200px]  object-contain" />

                            <div class="border bg-gray-200 w-[200px] mx-auto">
                                <h4 class="py-2 font-medium text-xl dark:text-white">{{ slotProps.data.color }}</h4>
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
import useProduct from "@sr/product/useProduct";

const productDetail = ref([]);

const getProductDetail = async () => {
    try {
        const response = await useProduct.getCommonProductDetails();
        const res = await response.data;

        productDetail.value = res;
    } catch (err) {
        console.log(err.message)
    }
}



onMounted(() => {
    getProductDetail();
})
</script>
  
<style lang="scss">
.product-carousel .p-carousel-indicators {
    display: flex;
    column-gap: 10px;
    margin-top: 20px;
}

.product-carousel .p-carousel-indicator .p-link {
    width: 40px;
    border-radius: 50px;
    height: 8px;
}

.product-carousel .p-highlight button {
    background-color: #94a3b8;
}
</style>
  