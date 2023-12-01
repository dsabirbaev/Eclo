






<template>
    <section class="bg-gray-50 pt-[100px] dark:bg-gray-700">
        <Toast />
        <div class="flex flex-col  items-center h-screen w-screen">

            <div class="p-4 bg-white dark:bg-gray-800 dark:text-white w-[800px] mb-2 rounded-md py-4">
                <div class="text-900 text-3xl font-bold">Account Info</div>
            </div>

            <div class="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-2 p-4 w-[800px]">


                <form @submit.prevent="updateProfile" class="flex flex-col gap-y-4">

                    <div class="flex flex-col relative">
                        <label for="name"
                            class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">First
                            Name</label>
                        <InputText id="name" v-model.trim="user.firstName" type="text" class="w-full" required />

                    </div>
                    <div class="flex gap-x-4">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="surname"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">Last
                                    Name</label>
                                <InputText id="surname" v-model.trim="user.lastName" type="text"
                                    class="w-full" required />

                            </div>

                            <div class="flex flex-col relative">
                                <label for="passportseria"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">Passport
                                    Serial Number</label>
                                <InputText id="passportseria" v-model.trim="user.passportSerialNumber" type="text"
                                    class="w-full" required />

                            </div>
                        </div>
                        <div class="grow ">
                            <p class="block text-900 font-medium mb-1 text-gray-600 mb-2 dark:text-white text-[14px]">Avatar
                            </p>
                            <div class="flex items-center">
                                <Avatar :image="`http://165.22.110.111:8080/${data.imagePath}`"
                                    class="mr-4 bg-slate-100 object-cover" size="xlarge" shape="circle" />

                                <label for="upload" class="upload bg-green-600 rounded-md" >
                                    <input id="upload" type="file" accept="image/*" @change="uploadImage" />
                                    <i class="pi pi-upload mr-1"></i> <span class="font-semibold">Choose</span>
                                </label>
                               
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-x-2">
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="date"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">Birth
                                    Date</label>
                                <div class="flex items-center gap-x-1">
                                    <InputText :value="getDate" placeholder="Unknown" type="text" class="w-full" disabled />
                                    <InputText id="date" v-model.trim="user.birthDate" type="date" class="w-full"
                                        required />
                                </div>


                            </div>

                            <div class="flex flex-col relative">
                                <label for="district"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">District</label>
                                <InputText id="district" v-model.trim="user.district" type="text" class="w-full" required />
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex flex-col relative mb-2">
                                <label for="region"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">Region</label>
                                <InputText id="region" v-model.trim="user.region" type="text" class="w-full" required />
                            </div>

                            <div class="flex flex-col relative">
                                <label for="address"
                                    class="block text-900 font-medium mb-1 text-gray-600 dark:text-white text-[14px]">Address</label>
                                <InputText id="address" v-model.trim="user.address" type="text" class="w-full" required />

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col relative">
                        <InputMask v-model="user.phoneNumber" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            class="w-full" required />

                    </div>

                    <Button type="submit" label="Update Profile" icon="pi pi-spin pi-spinner"
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
    console.log(file)
    user.imagePath = file;
}


const getProfile = async () => {
    try {
        const response = await useUser.profile();
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

    useUser.profileUpdate(userData).then((res) => {

        toast.add({ severity: 'success', detail: 'Updated successfully!', life: 1500 });

        getProfile();
    }).catch((err) => {
        console.log(err)
    })
}

onMounted(() => {
    getProfile();
})
</script>
  
<style lang="scss" scoped>
input[type="file"] {
    display: none;
}

.upload {
    border: 1px solid transparent;
    display: inline-block;
    padding: 6px 20px;
    cursor: pointer;
    color: white;
}
</style>