<template>
<div class="h-full dark:bg-black-500 dark:text-gray-100">
    <component :is="layout">
        <router-view></router-view>
    </component>
</div>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout.vue";

import DefaultLayout from "@/layout/DefaultLayout/DefaultLayout.vue";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: {
        layout() {
            return this.$router.currentRoute.value.meta.layout || "default-layout";
        },
    },
    components: {
        DefaultLayout,
        DashboardLayout,
    },
    mounted() {
        let htmlElem = document.querySelector("html");
        let isLight = JSON.parse(localStorage.getItem('vwmode-islight'))
        console.log('-------isLight-------------')
        console.log(isLight)
        console.log('--------------------')
        htmlElem.classList[isLight ? "remove" : "add"]("dark");
    },
};
</script>
