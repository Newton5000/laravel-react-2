<script setup>
import {Link} from "@inertiajs/vue3";
    defineProps({
        links: Array,
    })
</script>

<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap mt-8">
            <template v-for="(link, key) in links" :key="key">
                <div
                    v-if="link.url === null"
                    class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 text-base font-semibold border rounded-lg "
                    v-html="link.label"
                />

                <Link
                    preserve-scroll
                    v-else
                    class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded-lg shadow-sm"
                    :class="{ 'flex-shrink-0 px-4 py-3 font-semibold text-base text-white bg-purple-600 hover:text-purple-700 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200': link.active }"
                    :href="link.url"
                    v-html="link.label"
                />
            </template>
        </div>
    </div>
</template>
