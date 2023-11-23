

<template>
    <section class="bg-gray-50">
        <Toast />
        <div class="flex flex-col justify-center items-center h-screen w-screen">

           
            <div class="flex flex-col bg-white rounded-lg shadow-2 p-4 w-[500px]">

                <div class="text-center mb-5">
                    <router-link to="/"><img src="@ass/images/logo.jpg" alt="Image"  class="mb-1 bg-red-300 border h-[80px]" /> </router-link>    
                    
                    <div class="text-900 text-3xl font-medium mb-3">Welcome Eclo</div>
                    <span class="text-600 font-medium ">Don't have an account?</span>
                    <router-link to="/signup" class="font-medium  ml-2 text-blue-500 cursor-pointer">Create today!</router-link>
                </div>

                <form @submit="onSubmit" class="flex flex-col gap-y-4">

                    <div class="flex flex-col relative">
                        <label for="phone1" class="block text-900 font-medium mb-2">Phone</label>
                        <InputMask id="phone1" v-model="phone" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            :class="{ 'mb-0 p-invalid': phoneErrorMessage }" aria-describedby="mask-error" />
                        <small class="p-error text-[12px] absolute w-full top-full" id="mask-error">{{ phoneErrorMessage ||
                            '&nbsp;' }}</small>
                    </div>


                    <div class="flex flex-col relative">
                        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password1" v-model="password" type="password" placeholder="Password"
                            :feedback="false" :class="{ 'p-invalid': passwordErrorMessage }"
                            aria-describedby="text-error" />
                        <small class="p-error text-[12px] absolute w-full top-full" id="text-error">{{ passwordErrorMessage
                            || '&nbsp;' }}</small>
                    </div>


                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center">
                            <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                            <label for="rememberme1">Remember me</label>
                        </div>
                        <a class="font-medium  ml-2 text-blue-500 text-right cursor-pointer">Forgot
                            password?</a>
                    </div>


                    <Button type="submit" label="Sign In" icon="pi pi-user" class="w-full"></Button>
                </form>

               

            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

import  useAuth  from "@sr/auth/useAuth.js";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useField, useForm } from 'vee-validate';

const toast = useToast();
const { handleSubmit } = useForm();
const router = useRouter();

const checked = ref(false);
const { value: phone, errorMessage: phoneErrorMessage } = useField('phone', validatePhoneField);
const { value: password, errorMessage: passwordErrorMessage } = useField('password', validatePasswordField);

function validatePhoneField(value) {
    if (!value) {
        return 'Phone is required.';
    }

    return true;
}
function validatePasswordField(value) {
    if (!value) {
        return 'Password is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {

    const user = {
        phoneNumber: `+998${values.phone.replace(/\D/g, '')}`,
        password: values.password
    }
    
    useAuth.login(user).then((res) => {
        localStorage.setItem("token", res?.data?.token);

        toast.add({ severity: 'success', detail: 'Logged in successfully!', life: 1000 });
        setTimeout(() => {
            router.push({ name: "home" });
        }, 1000)

    }).catch((err) => {

        toast.add({ severity: 'error', detail: 'An error occurred during login!', life: 2000 });
    })
});
</script>
  
<style lang="scss" scoped></style>