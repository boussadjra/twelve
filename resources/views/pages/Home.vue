<template>
  <section class="h-auto min-h-screen pb-64 bg-white home dark:bg-black-700">
    <!-- :style="'background-image:url('+require('@/assets/img/flowers.png')+')'" -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 160"
      class="fill-current text-primary-800"
    >
      <path
        fill-opacity="1"
        d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <section
      class="flex flex-col-reverse justify-around w-full px-8 py-12 lg:h-96 lg:flex-row"
    >
      <div class="lg:w-6/12">
        <div class="flex flex-col items-center w-full h-32">
          <h1 class="font-extrabold text-7xl text-primary-900 dark:text-secondary-500">
            <span class="uppercase">TW</span>
            <span class="">e</span>
            <span class="uppercase">LV</span>
            <span class="">e</span>
          </h1>

          <p
            class="px-4 py-8 font-light text-gray-600 text-md dark:text-gray-300 lg:text-xl"
          >
            Laravel project built using Vue.js 3 (Vitejs) + TailwindCSS + Typescript
          </p>

          <w-btn size="lg" bgColor="bg-primary-500 dark:bg-primary-400">
            <router-link to="/components"> GET STARTED </router-link>
          </w-btn>
        </div>
      </div>
      <div class="flex flex-row justify-center w-full py-8 space-x-8 lg:pr-4 lg:w-6/12">
        <div
          class="flex items-center justify-center w-32 h-32 rounded-full lg:h-64 lg:w-64"
        >
          <tailwind-logo />
        </div>
        <div
          class="flex items-center justify-center w-32 h-32 rounded-full lg:h-64 lg:w-64"
        >
          <vue-logo />
        </div>
      </div>
    </section>

    <section class="px-4 py-4 text-black-600">
      <v-flex class="py-16 text-gray-700 dark:text-gray-300" justify="center">
        <h4 class="font-bold">Features</h4>
      </v-flex>

      <v-flex justify="around" :spaceX="4" spaceY="4" :align="'center'">
        <card class="text-lg w-72 whitespace-nowrap rounded-xl">
          <template #header>
            <v-flex justify="center">
              <div
                class="flex items-end justify-end w-12 h-12 pr-1 border-4 rounded-md border-primary-500 dark:border-primary-400"
              >
                <h6
                  class="text-base font-bold text-primary-500 dark:text-primary-400"
                >
                  TS
                </h6>
              </div>
            </v-flex>
          </template>
          Built using Typescript and TSX
        </card>
        <card class="text-lg w-72 whitespace-nowrap rounded-xl">
          <template #header>
            <v-flex justify="center">
              <icon-model
                height="48"
                width="48"
                class="text-primary-500 dark:text-primary-400"
              />
            </v-flex>
          </template>
          <v-flex justify="center" :space-x="2">
            <b class="text-lg font-bold text-gray-700">10+ </b> <span>components</span>
          </v-flex>
        </card>
        <card class="text-lg w-72 whitespace-nowrap rounded-xl">
          <template #header>
            <v-flex justify="center">
              <IconMoon
                height="48"
                width="48"
                class="text-primary-500 dark:text-primary-400"
              />
            </v-flex>
          </template>
          <v-flex justify="center" :space-x="2"> Dark mode </v-flex>
        </card>
        <card class="text-lg w-72 whitespace-nowrap rounded-xl">
          <template #header>
            <v-flex justify="center">
              <IconContainerSoftware
                height="48"
                width="48"
                class="text-primary-500 dark:text-primary-400"
              />
            </v-flex>
          </template>
          <v-flex justify="center"> Customizable components </v-flex>
        </card>
      </v-flex>
    </section>
    <section class="w-full px-4 py-4 text-black-600">
      <v-flex class="py-16 text-gray-700 dark:text-gray-300" justify="center">
        <h5 class="font-bold">Rich components</h5>
      </v-flex>
      <v-flex justify="center" align="center" dir="col" :spaceY="10" wrap>
        <card
          class="flex items-center justify-center w-1/2 h-64 rounded-lg"
          elevation="xl"

        >
        <v-flex justify="center" align="center">
          <w-grid  :gap="2" :colsSm="2" :colsMd="5">
            <w-btn v-for="(variant, i) in variants" :key="variant" :variant="variant">{{
              variant
            }}</w-btn>
          </w-grid>
        </v-flex>
        </card>
        <card
          class="flex items-center justify-center w-1/2 h-64 rounded-lg"
          elevation="xl"

        >
          <v-flex :spaceX="-2" justify="center" align="center">
            <w-avatar
              v-for="i in 7"
              :key="i"
              :src="'https://i.pravatar.cc/200?img=' + (60 + i)"
              shape="rounded-full"
              size="sm"
              class="flex row-start-1 bg-primary-200 text-primary-650 ring-4 ring-white dark:ring-black-600"
            >
            </w-avatar>
          </v-flex>
        </card>
        <card
          class="flex items-center justify-center w-1/2 h-64 mt-8 rounded-lg"
          elevation="xl"

        >
          <v-flex :spaceX="12" justify="center" align="center" class="w-full">
            <w-icon-with-badge>
              <template #icon>
                <IconNotification height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge>
                <w-badge
                  shape="rounded-full"
                  position="initial"
                  bgColor="bg-primary-500 dark:bg-primary-400"
                  size="sm"
                ></w-badge>
              </template>
            </w-icon-with-badge>

            <w-icon-with-badge>
              <template #icon>
                <IconHome height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge>
                <w-badge
                  shape="rounded-full"
                  position="initial"
                  bgColor="bg-red-500"
                  size="sm"
                ></w-badge>
              </template>
            </w-icon-with-badge>
            <w-icon-with-badge>
              <template #icon>
                <IconFavorite height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge>
                <w-badge
                  shape="rounded-full"
                  ping
                  position="initial"
                  bgColor="bg-green-500"
                  size="sm"
                ></w-badge>
              </template>
            </w-icon-with-badge>

            <w-icon-with-badge>
              <template #icon>
                <IconChat height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge-text>
                <w-badge
                  bgColor="bg-red-500"
                  shape="rounded-full"
                  textColor="text-red-100"
                >
                  <span class="text-sm"> +9</span>
                </w-badge>
              </template>
            </w-icon-with-badge>
            <w-icon-with-badge>
              <template #icon>
                <IconShoppingCart height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge-text>
                <w-badge
                  bgColor="bg-blue-500"
                  shape="rounded-full"
                  textColor="text-blue-100"
                >
                  <span class="text-sm"> 4</span>
                </w-badge>
              </template>
            </w-icon-with-badge>
            <w-icon-with-badge>
              <template #icon>
                <IconModel height="32" width="32" class="text-gray-600" />
              </template>

              <template #badge-text>
                <w-badge
                  bgColor="bg-secondary-500"
                  shape="rounded-full"
                  size="xs"
                  textColor="text-secondary-100"
                >
                  <span class="text-xs"> New</span>
                </w-badge>
              </template>
            </w-icon-with-badge>
          </v-flex>
        </card>
      </v-flex>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { RouterLink } from "vue-router";
import WButton from "@/components/actions/WButton.vue";
import Card from "@/components/surface/Card";
import VueLogo from "@/components/util/VueLogo";
import TailwindLogo from "@/components/util/TailwindLogo";
import VFlex from "@/components/layout/VFlex";
import IconModel from "@/components/icons/IconModel";
import IconContainerSoftware from "@/components/icons/IconContainerSoftware";
import IconMoon from "@/components/icons/IconMoon";
import WAvatar from "@/components/data-display/WAvatar.vue";
import IconNotification from "@/components/icons/IconNotification";
import IconHome from "@/components/icons/IconHome";
import IconChat from "@/components/icons/IconChat";
import WIconWithBadge from "@/components/data-display/WIconWithBadge.vue";
import IconShoppingCart from "@/components/icons/IconShoppingCart";
import IconFavorite from "@/components/icons/IconFavorite";
import WBadge from "@/components/data-display/WBadge.vue";
import WGrid from "@/components/layout/Grid";
interface keyable {
  [key: string]: any;
}
export default defineComponent({
  name: "Home",
  data() {
    return {
      variants: ["default", "primary", "danger", "success", "warning"],
    };
  },
  components: {
    Card,
    "w-btn": WButton,
    VueLogo,
    TailwindLogo,
    VFlex,
    WGrid,
    WAvatar,
    IconModel,
    IconContainerSoftware,
    IconNotification,
    IconMoon,
    IconHome,
    IconChat,
    WIconWithBadge,
    IconFavorite,
    IconShoppingCart,
    WBadge,
  },

});
</script>
