<template>
    <header class="overflow-hidden">
        <div class="container mx-auto px-5">
            <nav class="nav flex items-center justify-between w-full dark:bg-gray-800 h-[80px]">
                <router-link to="/"><img className="object-cover object-center w-[200px]"
                        src="../../assets/icons/logo.svg" alt="logo" /></router-link>

                <ul className="flex items-center gap-x-3 font-medium text-[15px] text-black dark:text-white">
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/men" class="text-black">Men</router-link>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/women" class="text-black">Women</router-link>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/kids" class="text-black">Kids</router-link>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/about" class="text-black">About Us</router-link>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/contact" class="text-black">Contact</router-link>
                    </li>
                </ul>

                <div class="flex items-center gap-x-4 cursor-pointer">
                    <span title="search" class="pi pi-search text-[20px]"></span>
                    <router-link to="/signin"><span title="login" class="pi pi-sign-in text-[20px]"></span> </router-link>
                </div>
            </nav>


        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.nav li:has(.router-link-exact-active) {
    background-color: rgb(203 213 225);
}
</style>