<template>
  <div
    class="w-full h-full bg-gray-200 dark:bg-black-700 text-black-700 dark:text-black-100"
  >
    <h1
      class="flex items-center justify-center h-16 text-4xl font-bold bg-gray-300 text-primary-500 dark:bg-black-700"
    >
      <router-link v-if="show" to="/">
       <span class="uppercase">TW</span>
            <span class="">e</span>
            <span class="uppercase">LV</span>
            <span class="">e</span>
      </router-link>
      <router-link v-else to="/">12</router-link>
    </h1>

    <div class="p-2">
      <vue3-router-tree :items="routes">
        <template #item="{ item }">
          <div class="flex items-center space-x-3">
            <component :is="item.name.replace(' ', '')" :class="{ 'mr-5': !show }" />
            <router-link
              v-if="show"
              exact-active-class="text-primary-700"
              :to="item.path"
              ><span class="font-light text-md"> {{ item.name }}</span></router-link
            >
          </div>
        </template>
      </vue3-router-tree>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Vue3RouterTree from "vue3-router-tree";
import IconDashboard from "@/components/icons/IconDashboard";
import IconDirectionSharpTurn from "@/components/icons/IconDirectionSharpTurn";
import IconEmail from "@/components/icons/IconEmail";
import IconEmailNew from "@/components/icons/IconEmailNew";
import IconLicenseDraft from "@/components/icons/IconLicenseDraft";
import IconModel from "@/components/icons/IconModel";
import IconRadioButton from "@/components/icons/IconRadioButton";
import IconSend from "@/components/icons/IconSend";
import IconUserAvatar from "@/components/icons/IconUserAvatar";
import IconWarningAlt from "@/components/icons/IconWarningAlt";

export default defineComponent({
  props: ["show"],
  data: () => ({
    routes: [
      {
        path: "/dashboard",
        name: "Dashboard",
        hasIcon: true,

        info: "updated",
      },

      {
        path: "/dashboard/mail",
        name: "Mail",
        hasIcon: true,

        children: [
          {
            path: "/dashboard/mailinbox",
            name: "Inbox",
          },
          {
            path: "/dashboard/mail/sent",
            name: "Sent",
          },
          {
            path: "/dashboard/mail/draft",
            name: "Draft",
          },
        ],
      },
    ],
  }),
  computed: {},
  methods: {},
  components: {
    Vue3RouterTree,
    Dashboard: IconDashboard,
    Components: IconModel,
    Mail: IconEmail,
    Inbox: IconEmailNew,
    Sent: IconSend,
    Draft: IconLicenseDraft,
  },
  mounted() {},
});
</script>

<style></style>
