// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
	css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.css'],
	build: {
		transpile: ['vuetify'],
	},
});
