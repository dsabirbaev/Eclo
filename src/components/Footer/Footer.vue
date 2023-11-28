<template>
   <footer class="p-[100px]  border-t-2 dark:bg-gray-800">
            <div class="container">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-y-2">
                        <router-link to="/">
                            <img class=" h-[60px] object-cover" src="@ass/icons/logo1.svg" alt="logo" />
                        </router-link>
                        <ul class="flex flex-col gap-y-3 text-[14px] dark:text-white">
                            <li><a href="#" class="flex items-center gap-x-1"><i className='pi pi-facebook text-[20px] text-blue-600'></i> Facebook</a></li>
                            <li><a href="#" class="flex items-center gap-x-1"><i className='pi pi-youtube text-[20px] text-red-600'></i> Youtube</a></li>
                            <li><a href="#" class="flex items-center gap-x-1"><i className='pi pi-telegram text-[20px] text-sky-600'></i> Telegram</a></li>
                            <li><a href="#" class="flex items-center gap-x-1"><i className='pi pi-twitter text-[20px] text-sky-400'></i> Twitter</a></li>
                        </ul>
                    </div>
                    <ul className="text-[14px] flex flex-col gap-y-4 dark:text-white">
                        <li><a href="#" class="font-semibold">Getting started</a></li>
                        <li><a href="#" class="hover:font-semibold">Release Notes</a></li>
                        <li><a href="#" class="hover:font-semibold">Upgrade Guide</a></li>
                        <li><a href="#" class="hover:font-semibold">Browser Support</a></li>
                        <li><a href="#" class="hover:font-semibold">Dark Mode</a></li>
                    </ul>
                    <ul className="text-[14px] flex flex-col gap-y-4  dark:text-white">
                        <li><a href="#" class="font-semibold">Explore</a></li>
                        <li><a href="#" class="hover:font-semibold">Prototyping</a></li>
                        <li><a href="#" class="hover:font-semibold">Design systems</a></li>
                        <li><a href="#" class="hover:font-semibold">Pricing</a></li>
                        <li><a href="#" class="hover:font-semibold">Security</a></li>
                    </ul>
                    <ul class="text-[14px] flex flex-col gap-y-4  dark:text-white">
                        <li><a href="#" class="font-semibold">Resources</a></li>
                        <li><a href="#" class="hover:font-semibold">Best practices</a></li>
                        <li><a href="#" class="hover:font-semibold">Support</a></li>
                        <li><a href="#" class="hover:font-semibold">Developers</a></li>
                        <li><a href="#" class="hover:font-semibold">Learn design</a></li>
                    </ul>
                    <ul className="text-[14px] flex flex-col gap-y-4  dark:text-white">
                        <li><a href="#" class="font-semibold">Community</a></li>
                        <li><a href="#" class="hover:font-semibold">Discussion Forums</a></li>
                        <li><a href="#" class="hover:font-semibold">Code of Conduct</a></li>
                        <li><a href="#" class="hover:font-semibold">Contributing</a></li>
                        <li><a href="#" class="hover:font-semibold">API Reference</a></li>
                    </ul>
                </div>
            </div>
        </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
   
</style>