<template>
    <header>
        <div class="container mx-auto px-5">
            <nav class="nav flex items-center justify-between w-full dark:bg-gray-800 h-[80px]">
                <router-link to="/"><img class="h-[80px]" src="@ass/images/logo.jpg" alt="logo" /></router-link>

                <ul class="flex items-center gap-x-3 font-medium text-[15px] text-black dark:text-white">
                    <li class="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/men" class="text-black">Men</router-link>
                    </li>
                    <li class="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/women" class="text-black">Women</router-link>
                    </li>
                    <li class="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/kids" class="text-black">Kids</router-link>
                    </li>
                    <li class="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/about" class="text-black">About Us</router-link>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 dark:hover:bg-gray-500 rounded-full">
                        <router-link to="/contact" class="text-black">Contact</router-link>
                    </li>
                </ul>

                <div v-if="isAuth" class="flex items-center gap-x-4 cursor-pointer relative">
                    <span title="search" class="pi pi-search text-[20px]"></span>
                    <span title="user" class="pi pi-user text-[20px]" @click="isMenu = !isMenu"></span>
                    <span title="cart" class="pi pi-shopping-cart text-[20px]"></span>

                    <Menu :model="items" v-if="isMenu" class="w-[300px] md:w-15rem absolute right-0 top-[180%] z-50">
                        <template #start>
                            <button v-ripple class=" w-full p-link flex items-center p-2 pl-3">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
                                    size="large" shape="circle" />
                                <span class="inline-flex flex-column">
                                    <span class="font-bold">User</span>

                                </span>
                            </button>
                        </template>

                        <template #submenuheader="{ item }">
                            <span class="text-primary font-bold">{{ item.label }}</span>
                        </template>

                        <template #item="{ item, props }">
                            <a v-ripple class="flex items-center" v-bind="props.action"  @click="handleMenuItemClick(item)">
                                <span :class="item.icon" />
                                <span class="ml-2">{{ item.label }}</span>
                                
                               
                            </a>
                        </template>


                    </Menu>
                </div>

                <div v-else class="flex items-center gap-x-4 cursor-pointer">
                    <span title="search" class="pi pi-search text-[20px]"></span>

                    <router-link to="/signin" class="flex items-center justify-center"><span title="login"
                            class="pi pi-sign-in text-[20px]"></span> </router-link>

                </div>
            </nav>


        </div>
    </header>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
const isAuth = ref(localStorage.getItem("token") !== null);
const router = useRouter();
const items = ref([
    {
        separator: true
    },

    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
            },
            {
                label: 'Messages',
                icon: 'pi pi-inbox',
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
            }
        ]
    },
    {
        separator: true
    }
]);

const isMenu = ref(false);
const handleMenuItemClick = (item) => {
  if (item.label === 'Logout') {
    localStorage.clear();
    isMenu.value = false;
    isAuth.value = false;
  }

  if(item.label === 'Settings'){
     router.push({ name: "settings" });
  }
};



</script>

<style lang="scss" scoped>
.nav li:has(.router-link-exact-active) {
    background-color: rgb(203 213 225);
}
</style>