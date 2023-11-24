






<template>
    <section class="bg-gray-50 pt-[20px]">
        <Toast />
        <div class="flex flex-col  items-center h-screen w-screen">

            <div class="text-center  bg-white w-[800px] mb-2 rounded-md py-4">
                <div class="text-900 text-3xl font-medium">Profile</div>
            </div>

            <div class="flex flex-col bg-white rounded-lg shadow-2 p-4 w-[800px]">


                <form @submit.prevent="useRegistration" class="flex flex-col gap-y-4">

                    <div class="flex flex-col relative">
                        <label for="name" class="block text-900 font-medium mb-1 text-gray-600">First Name</label>
                        <InputText id="name" v-model.trim="user.firstName" type="text" class="w-full" required />

                    </div>
                    <div class="flex gap-x-4">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="surname" class="block text-900 font-medium mb-1 text-gray-600">Last Name</label>
                                <InputText id="surname" v-model.trim="user.lastName" type="text" class="w-full" required />

                            </div>

                            <div class="flex flex-col relative">
                                <label for="passportseria" class="block text-900 font-medium mb-1 text-gray-600">Passport
                                    Serial Number</label>
                                <InputText id="passportseria" v-model.trim="user.lastName" type="text" class="w-full"
                                    required />

                            </div>
                        </div>
                        <div class="grow ">
                            <p class="block text-900 font-medium mb-1 text-gray-600 mb-2">Avatar</p>
                            <div class="flex items-center">
                                <Avatar class="mr-4 bg-red-500" size="xlarge" shape="circle" />

                                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*"
                                    :maxFileSize="1000000" @upload="onUpload" class="w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-x-2">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="date" class="block text-900 font-medium mb-1 text-gray-600">Date</label>
                                <InputText id="date" v-model.trim="user.date" type="date" class="w-full" required />

                            </div>

                            <div class="flex flex-col relative">
                                <label for="district" class="block text-900 font-medium mb-1 text-gray-600">District</label>
                                <InputText id="district" v-model.trim="user.district" type="text" class="w-full" required />
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="region" class="block text-900 font-medium mb-1 text-gray-600">Region</label>
                                <InputText id="region" v-model.trim="user.region" type="text" class="w-full" required />
                            </div>

                            <div class="flex flex-col relative">
                                <label for="address" class="block text-900 font-medium mb-1 text-gray-600">Address</label>
                                <InputText id="address" v-model.trim="user.address" type="text" class="w-full"
                                    required />

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col relative">
                        <InputMask v-model="user.phoneNumber" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            class="w-full" required />

                    </div>

                    <Button type="submit" label="Update Profile" icon="pi pi-spinner" class="w-[200px] bg-green-700 border-green-700" />


                </form>



            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
import Avatar from 'primevue/avatar';
import { useToast } from "primevue/usetoast";

const toast = useToast();

document.title = "Eclo | Settings";

const user = reactive({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: ""
})



</script>
  
<style lang="scss" scoped></style>