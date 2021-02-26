import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig()
	.withPlugins(vue,vueJsx);
