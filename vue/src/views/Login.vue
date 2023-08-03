<script setup>
import Checkbox from '@/components/Checkbox.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import {RouterLink} from 'vue-router'
import {ref} from "vue";
import axios from "axios";

axios.defaults.withCredentials = true

const form = ref({
    email: "",
    password: "",
    remember: false,
});

const user = ref({})

const pageErrors = ref({
    serverError: '',
})

const submit = async () => {

    let cookie = await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`).catch((e) => {
        pageErrors.value.serverError = "something went wrong"
    })

    let login
    if(cookie) {
        login = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
            email: form.value.email,
            password: form.value.password,
            remember: form.value.remember,
        })
            .catch((error) => {
                pageErrors.value = error.response.data ?? pageErrors.value
            })
    }

    if(login) {
        let {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`).catch((e) => {
            pageErrors.value.serverError = "something went wrong"
        })
        user.value = data
    }
};
</script>

<template>
    <GuestLayout>
        <div v-if="Object.keys(pageErrors).length > 0" class="mb-4 font-medium text-sm text-red-600">
                    <span v-if="pageErrors.serverError">
                        <span>{{ pageErrors.serverError }}</span>
                    </span>
                </div>

        <form @submit.prevent="submit">
            <div class="mt-4">
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <span v-if="Object.keys(pageErrors).length > 0">
                    <span v-if="pageErrors.errors">
                         <span v-if="pageErrors.errors.email">
                        <InputError v-for="error in pageErrors.errors.email" class="mt-2" :message="error"/>
                    </span>
                    </span>
                </span>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    autocomplete="current-password"
                    required
                />

                <span v-if="Object.keys(pageErrors).length > 0">
                    <span v-if="pageErrors.errors">
                         <span v-if="pageErrors.errors.password">
                        <InputError v-for="error in pageErrors.errors.password" class="mt-2" :message="error"/>
                    </span>
                    </span>
                </span>
            </div>

            <div class="flex items-center justify-end mt-4">
                <RouterLink
                    to="/register"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Don't have an account?
                </RouterLink>


                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form_is_processing }" :disabled="form_is_processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
