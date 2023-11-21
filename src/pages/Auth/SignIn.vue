

<template>
    <section class="bg-gray-50">
        <Toast />
        <div class="flex flex-col justify-center items-center h-screen w-screen">
           
            <router-link to="/"><img src="../../assets/icons/logo.svg" alt="logo"
                    class="w-[300px] h-8 mr-2 object-cover object-center mb-2"> </router-link>

            <div class="flex flex-col bg-white rounded-lg shadow p-4 w-[400px]">
                <h2 class="text-center font-bold mb-4 text-[25px]">Sign in to your account</h2>

                <form @submit="onSubmit" class="flex flex-col gap-y-4">
                
                    <div class="flex flex-col relative">
                        <InputMask v-model="phone" mask="99 999-99-99" placeholder="(99) 999-99-99"
                            :class="{ 'mb-0 p-invalid': phoneErrorMessage }" aria-describedby="mask-error" />
                        <small class="p-error text-[10px] absolute w-full top-full" id="mask-error">{{ phoneErrorMessage ||
                            '&nbsp;' }}</small>
                    </div>



                    <Password v-model="password" :feedback="false" inputStyleClass="w-full"  />

                    <div class="flex items-center justify-between">
                        <span></span> <span><a href="#" class="text-black text-[12px]">Forgot password?</a></span>
                    </div>
                    <Button type="submit" label="Sign in" severity="success" />
                </form>

                <p className="text-sm font-light text-gray-500 mt-2">
                    Don’t have an account yet?
                    <router-link to="/signup" className="font-medium text-gray-700">Sign up</router-link>
                </p>
                <!-- <Toast /> -->
            </div>
        </div>
    </section>
</template>
  
<script setup>
import InputMask from 'primevue/inputmask';
import Password from 'primevue/password';
import Button from 'primevue/button';

import {useAuth} from "@sr/auth/useAuth.js";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const { handleSubmit } = useForm();
const router = useRouter();
import { useField, useForm } from 'vee-validate';

const { value: phone, errorMessage: phoneErrorMessage } = useField('phone', validatePhoneField);
const { value: password } = useField('password', validatePasswordField);

function validatePhoneField(value) {
    if (!value) {
        return 'Phone is required.';
    }

    return true;
}
function validatePasswordField(value) {
    if (!value) {
        return 'password is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    
    const user ={
        phoneNumber: `+998${values.phone.replace(/\D/g, '')}`,
        password: values.password
    }
    console.log(user)
    
    // if (values.phone && values.phone.length > 0) {

    //     // toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    //     // resetForm();
    // }

    useAuth.login(user).then((res) => {
        console.log(res)
        localStorage.setItem("token", res?.data?.token);
      
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000)
       
        router.push({ name: "home" });
        toast.add({ severity: 'success', summary: 'Login in', detail: 'Message Content', life: 3000 });
    }).catch((err) => {
      
    //   console.log(err.response.data)
    })
});
</script>
  
<style lang="scss" scoped>
   
</style>