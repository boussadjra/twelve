<template>
  <nav
    class="sticky top-0 left-0 z-20 flex flex-col items-center justify-between w-full h-48 p-4 overflow-hidden lg:h-16 bg-primary-800 text-primary-100 lg:flex-row"
  >
    <h1 class="text-4xl font-bold logo text-secondary-500"> <span class="uppercase">TW</span>
            <span class="">e</span>
            <span class="uppercase">LV</span>
            <span class="">e</span></h1>

    <ul
      class="flex flex-row justify-between w-10/12 space-x-8 text-xs uppercase cursor-pointer sm:w-6/12 lg:w-4/12"
    >
      <li class="min-w-max">
        <router-link
          to="/"
          active-class="text-secondary-500 "
          class="flex items-center space-x-2"
        >
          <icon-home height="16" width="16" />
          <span>Home</span>
        </router-link>
      </li>
      <li class="min-w-max">
        <router-link
          to="/components"
          active-class="text-secondary-500 "
          class="flex items-center space-x-2"
        >
          <IconModel height="16" width="16" />
          <span>Components</span>
        </router-link>
      </li>
      <li class="min-w-max">
        <router-link
          to="/dashboard"
          active-class="text-secondary-500"
          class="flex items-center space-x-2"
        >
          <IconDashboard height="16" width="16" />
          <span> Dashboard </span>
        </router-link>
      </li>
      <li class="min-w-max">
        <router-link
          to="/about"
          active-class="text-secondary-500"
          class="flex items-center space-x-2"
        >
          <IconUser height="16" width="16" />
          <span>About me</span>
        </router-link>
      </li>
    </ul>

    <div class="flex items-center space-x-4 uppercase cursor-pointer text-primary-200">
      <a
        href="https://github.com/boussadjra/twelve"
        target="_blank"
        rel="noopener noreferrer"
      >
        <w-btn
          >Github
          <template #prepend>
            <icon-logo-github />
          </template>
        </w-btn>
      </a>
      <a href="#" @click.prevent="isLight = !isLight">
        <component
          :is="isLight ? 'icon-moon' : 'icon-sun'"
          class="text-primary-100 dark:text-primary-50"
          height="24"
          width="24"
        />
      </a>
    </div>
  </nav>

  <main>
    <slot></slot>
  </main>
</template>

<script>
import WButton from "@/components/actions/WButton.vue";
import IconLogoGithub from "@/components/icons/IconLogoGithub";
import IconModel from "@/components/icons/IconModel";
import IconHome from "@/components/icons/IconHome";
import IconDashboard from "@/components/icons/IconDashboard";
import IconUser from "@/components/icons/IconUser";
import IconSun from "@/components/icons/IconSun";
import IconMoon from "@/components/icons/IconMoon";
export default {
  data() {
    return {
      isLight: true,
    };
  },
  watch: {
    isLight() {
      this.switchMode();
    },
  },
  components: {
    "w-btn": WButton,
    IconLogoGithub,
    IconModel,
    IconHome,
    IconDashboard,
    IconUser,
    IconSun,
    IconMoon,
  },
  methods: {
    switchMode() {
      let htmlElem = document.querySelector("html");
      htmlElem.classList[this.isLight ? "remove" : "add"]("dark");
      localStorage.setItem("vwmode-islight", this.isLight);
    },
  },
  mounted() {
    this.isLight = JSON.parse(localStorage.getItem("vwmode-islight"));
  },
};
</script>

<style></style>
