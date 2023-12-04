

<template>
    <div class="w-[250px] h-[250px] rounded-md p-2 border-2 border-red-500 shadow-lg">
        <div class="bg-green-400 flex items-center justify-center">
            <img :src="'http://165.22.110.111:8080/' + data.imagePath" :alt="data.color"
            class="w-[250px] h-[150px] object-top object-contain" />
        </div>

        <p>{{ data.productId }}</p>
    </div>
</template>

<script setup>


const props = defineProps(['data'])



</script>

<style lang="scss" scoped></style>