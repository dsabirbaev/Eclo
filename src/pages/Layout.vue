


<template>
    <Header />
    <main class="dark:bg-gray-700">
        <router-view> 
            
        </router-view>
    </main>
    <Footer  />
</template>



<script setup>
   import Header from "@cmp/Header/Header.vue";
   import Footer from "@cmp/Footer/Footer.vue";
</script>


<style lang="scss" scoped>

</style>