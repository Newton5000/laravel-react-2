<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            <RouterLink to="/home"
                  class="mr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >Dashboard</RouterLink
            >

            <RouterLink to="/login"
                  class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >Log in</RouterLink
            >

            <RouterLink to="/register"
                  class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >Register</RouterLink
            >

        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <h1>React & Vue + Laravel</h1>
        </div>
    </div>
</template>
