



<template>
    <section class="bg-gray-50">
        <Toast />
        <div class="flex flex-col justify-center items-center h-screen w-screen">


            <div class="flex flex-col bg-white rounded-lg shadow-2 p-4 w-[500px]">

                <div class="text-center mb-5">
                    <div class="text-900 text-3xl font-medium mb-3">Sign Up</div>
                </div>

                <form @submit.prevent="useRegistration" class="flex flex-col gap-y-4">

                    <div class="flex relative">
                        <InputText v-model.trim="user.firstName" type="text" placeholder="Name" class="w-full pr-[28px]"
                            required="" />
                        <i class="pi pi-user absolute right-2 top-[10px] text-[18px]" />
                    </div>
                    <div class="flex relative">
                        <InputText v-model.trim="user.lastName" type="text" placeholder="Surname" class="w-full pr-[28px]"
                            required="" />
                        <i class="pi pi-user absolute right-2 top-[10px] text-[18px]" />
                    </div>

                    <div class="flex flex-col relative">
                        <InputMask v-model="user.phoneNumber" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            class="w-full" required />
                        <i class="pi pi-phone absolute right-2 top-[10px] text-[18px]" />
                    </div>


                    <div class="flex flex-col relative">

                        <InputText v-model.trim="user.password" type="password" placeholder="Password"
                            class="w-full pr-[28px]" required />
                        <i class="pi pi-key absolute right-2 top-[10px] text-[18px]" />
                    </div>

                    <div class="flex items-center gap-x-2">
                        <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                        <label for="accept">I agree to the terms and conditions.</label>
                    </div>

                    <Button type="submit" label="Sign Up" icon="pi pi-angle-double-up" class="w-full"></Button>

                    <div>
                        <p class="text-[14px]">Already have an account? <router-link to="/signin"
                                class="text-indigo-400">Sign in</router-link> </p>
                    </div>
                </form>

                <div v-if="showVerify"
                    class="absolute top-0 left-0 p-2 bg-[#00000025] w-screen h-screen flex items-center justify-center">

                    <form @submit.prevent="onVerifyCode" class="mt-2 w-full flex justify-center items-center">
                        <div class="w-[400px] rounded-2xl bg-white border shadow-lg p-5">
                            <h2 class="mb-4 font-bold text-center">Verify Code</h2>

                            <InputText v-model="modifiedNumber" type="text" class="w-full mb-2" />
                            <InputText v-model="userVerify.code" type="text" class="w-full mb-2" placeholder="Verify code" />
                            <Button type="submit" label="Send" class="w-full" severity="success"></Button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import useAuth from "@sr/auth/useAuth.js";

import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
const accept = ref(false);
const showVerify = ref(false);
const modifiedNumber = ref("");
const toast = useToast();
const router = useRouter();
document.title = "Eclo | Sign Up";

const user = reactive({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: ""
})


const useRegistration = () => {
    const info = {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: `+998${user.phoneNumber.replace(/\D/g, '')}`,
        password: user.password
    }
    useAuth.register(info).then((res) => {

        if (res.status == 200) {
            console.log("first api " + res);
            setTimeout(() => {
                registerSendPhoneNumber(info.phoneNumber);
                modifiedNumber.value = info.phoneNumber
            }, 1000)

        }
    }).catch((err) => {
        console.log("Registerform error " + err)
    })
}


const registerSendPhoneNumber = (number) => {
   
    useAuth.registerSendCode(number).then((res) => {
        console.log(res)
        if (res.status == 200) {
            console.log("send-code working " + res);

            showVerify.value = true;
        }
    }).catch((err) => {
        console.log("sendCode error " + err.message)
        console.log("Error details:", err.response.data);
    })
}


const userVerify = reactive({
    phoneNumber: modifiedNumber,
    code: ""
})

const onVerifyCode = () => {

    const verifyInfo = {
        phoneNumber: userVerify.phoneNumber,
        code: userVerify.code
    }
   
    useAuth.registerVerify(verifyInfo).then((res) => {
        if (res.status == 200) {
            toast.add({ severity: 'success', detail: 'Account created!', life: 1000 });
            showVerify.value = false;
            setTimeout(() => {
                router.push({ name: "signin" });
            }, 1500)
        }
    }).catch((err) => {
        console.log("verify error " + err)
        console.log(err)
    })
}

</script>
  
<style lang="scss" scoped></style>