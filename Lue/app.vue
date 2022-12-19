<template>
	<div>
		<!-- <NuxtWelcome /> -->
		<p class="bg-pin w-10 h-10">{{ lue }}</p>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';

	const lue = ref<number>(5);
</script>
