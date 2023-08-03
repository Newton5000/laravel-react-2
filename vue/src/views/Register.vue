<script setup>
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
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
        login = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
            email: form.value.email,
            password: form.value.password,
            password_confirmation: form.value.password_confirmation,
            name: form.value.name,
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
        <form @submit.prevent="submit">
            <div class="mt-4">
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <span v-if="Object.keys(pageErrors).length > 0">
                    <span v-if="pageErrors.errors">
                         <span v-if="pageErrors.errors.name">
                        <InputError v-for="error in pageErrors.errors.name" class="mt-2" :message="error"/>
                    </span>
                    </span>
                </span>
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
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
                    required
                    autocomplete="new-password"
                />

                <span v-if="Object.keys(pageErrors).length > 0">
                    <span v-if="pageErrors.errors">
                         <span v-if="pageErrors.errors.password">
                        <InputError v-for="error in pageErrors.errors.password" class="mt-2" :message="error"/>
                    </span>
                    </span>
                </span>
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <span v-if="Object.keys(pageErrors).length > 0">
                    <span v-if="pageErrors.errors">
                         <span v-if="pageErrors.errors.password_confirmation">
                        <InputError v-for="error in pageErrors.errors.password_confirmation" class="mt-2" :message="error"/>
                    </span>
                    </span>
                </span>
            </div>

            <div class="flex items-center justify-end mt-4">
                <RouterLink
                    to="/login"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </RouterLink>

                <PrimaryButton type="submit" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
