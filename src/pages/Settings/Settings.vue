






<template>
    <section class="bg-gray-50 pt-[20px] dark:bg-gray-700">
        <Toast />
        <div class="flex flex-col  items-center h-screen w-screen">

            <div class="text-center  bg-white dark:bg-gray-800 dark:text-white w-[800px] mb-2 rounded-md py-4">
                <div class="text-900 text-3xl font-medium">Profile</div>
            </div>

            <div class="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-2 p-4 w-[800px]">


                <form @submit.prevent="updateProfile" class="flex flex-col gap-y-4">

                    <div class="flex flex-col relative">
                        <label for="name" class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">First
                            Name</label>
                        <InputText id="name" v-model.trim="user.firstName" type="text" class="w-full" required />

                    </div>
                    <div class="flex gap-x-4">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="surname"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">Last Name</label>
                                <InputText id="surname" v-model.trim="user.lastName" type="text"
                                    class="w-full dark:text-white" required />

                            </div>

                            <div class="flex flex-col relative">
                                <label for="passportseria"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">Passport
                                    Serial Number</label>
                                <InputText id="passportseria" v-model.trim="user.passportSerialNumber" type="text"
                                    class="w-full" required />

                            </div>
                        </div>
                        <div class="grow ">
                            <p class="block text-900 font-medium mb-1 text-gray-600 mb-2 dark:text-white">Avatar</p>
                            <div class="flex items-center">
                                <Avatar :image="`http://165.22.110.111:8080/${data.imagePath}`" class="mr-4 bg-slate-100"
                                    size="xlarge" shape="circle" />

                                <input  type="file" mode="basic" name="demo[]" url="/api/image"
                                    accept="image/*" :maxFileSize="1000000"  @change="uploadImage" class="w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-x-2">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="date"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">Birth Date</label>
                                <div class="flex items-center gap-x-1">
                                    <InputText :value="getDate" placeholder="Unknown" type="text" class="w-full" disabled />
                                    <InputText id="date" v-model.trim="user.birthDate" type="date" class="w-full"
                                        required />
                                </div>


                            </div>

                            <div class="flex flex-col relative">
                                <label for="district"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">District</label>
                                <InputText id="district" v-model.trim="user.district" type="text" class="w-full" required />
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="region"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">Region</label>
                                <InputText id="region" v-model.trim="user.region" type="text" class="w-full" required />
                            </div>

                            <div class="flex flex-col relative">
                                <label for="address"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white">Address</label>
                                <InputText id="address" v-model.trim="user.address" type="text" class="w-full" required />

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col relative">
                        <InputMask v-model="user.phoneNumber" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            class="w-full" required />

                    </div>

                    <Button type="submit" label="Update Profile" icon="pi pi-spinner"
                        class="w-[200px] bg-green-700 border-green-700" />


                </form>



            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import useUser from "@sr/user/useUser";
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
import Avatar from 'primevue/avatar';
import { useToast } from "primevue/usetoast";

const toast = useToast();

document.title = "Eclo | Settings";
const data = ref([]);
const getDate = ref("");
const user = reactive({
    firstName: "",
    lastName: "",
    passportSerialNumber: "",
    imagePath: "",
    birthDate: "",
    district: "",
    region: "",
    address: "",
    phoneNumber: ""
})

const uploadImage = (e) => {
    const file = e.target.files[0];
    // console.log(file)

    user.imagePath = file;
}

const getProfile = async () => {
    try {
        const response = await useUser.profile();
        // console.log(response.data);
        data.value = response.data;
        const date = new Date(response.data.birthDate);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        getDate.value = `${day}.${month}.${year}`;

        user.firstName = response.data.firstName || "";
        user.lastName = response.data.lastName || "";
        user.passportSerialNumber = response.data.passportSerialNumber || "";
        user.birthDate = response.data.birthDate || "";
        user.district = response.data.district || "";
        user.address = response.data.address || "";
        user.region = response.data.region || "";
        user.phoneNumber = (response.data.phoneNumber || "").substring(4);

    } catch (error) {
        console.log(error.message);
        console.log(error)
    }
}

const updateProfile = () => {
    const date = new Date(user.birthDate);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formatDate = `${year}-${month}-${day}`; 

    const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        passportSerialNumber: user.passportSerialNumber,
        imagePath: user.imagePath,
        birthDate: formatDate,
        district: user.district,
        region: user.region,
        address: user.address,
        phoneNumber: `+998${user.phoneNumber.replace(/\D/g, '')}`,
    }

    console.log(userData)

    useUser.profileUpdate(userData).then((res) => {
        console.log(res)
        toast.add({ severity: 'success', detail: 'Updated successfully!', life: 1500 });
    }).catch((err) => {
        console.log(err)
    })
}

onMounted(() => {
    getProfile();
})
</script>
  
<style lang="scss" scoped></style>