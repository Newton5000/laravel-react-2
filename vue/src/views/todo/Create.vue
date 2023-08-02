<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import TextInput from "@/components/TextInput.vue";
import InputError from "@/components/InputError.vue";
import InputLabel from "@/components/InputLabel.vue";
import SelectInput from "@/components/SelectInput.vue";
import {ref} from "vue";

const todo = ref({
    name: "",
    status: "",
    category: ""
})
</script>
<template>
    <AppLayout>
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Create Todo</h2>
            </div>
        </header>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                    <header>
                        <h2 class="text-lg font-medium text-gray-900">Todo Information</h2>

                        <p class="mt-1 text-sm text-gray-600">
                            Fill in the form to create new todo item.
                        </p>
                    </header>

                    <form class="mt-6 space-y-6">
                        <div>
                            <InputLabel for="name" value="Name" />

                            <TextInput
                                id="name"
                                class="mt-1 block w-full"
                                required
                                isFocused
                                autoComplete="name"
                                v-model="todo.name"
                            />

                            <InputError class="mt-2" message="" />
                        </div>

                        <div>
                            <InputLabel for="category" value="Category" />

                            <SelectInput
                                id="name"
                                class="mt-1 block w-full"
                                required
                                isFocused
                                autoComplete="category"
                                v-model="todo.category"
                            >
                                <option value="">select</option>
                                <option>home</option>
                                <option>school</option>
                                <option>work</option>
                            </SelectInput>

                            <InputError class="mt-2" message="" />
                        </div>

                        <div>
                            <InputLabel for="status" value="Status" />

                            <SelectInput
                                id="name"
                                class="mt-1 block w-full"
                                required
                                autoComplete="status"
                                v-model="todo.status"
                            >
                                <option value="">select</option>
                                <option>done</option>
                                <option>pending</option>
                                <option>cancelled</option>
                            </SelectInput>

                            <InputError class="mt-2" message="" />
                        </div>

                        <div class="flex items-center gap-4">
                            <PrimaryButton type="submit">Save</PrimaryButton>

                        </div>
                    </form>

                </div>

            </div>
        </div>
    </AppLayout>
</template>
