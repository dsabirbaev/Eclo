

<template>
    <section>
        <div class="card">
            <Carousel  :numVisible="1" :numScroll="1" >
                dwdw
                <template #item="slotProps">
                    dwdw
                    <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 bg-red-300">
                         dwdw
                        <div>
                           <h4>card</h4>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>
  
<script setup>
import Carousel from 'primevue/carousel';
</script>
  
<style lang="scss" scoped></style>