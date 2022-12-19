<template>
	<div>
		<!-- <NuxtWelcome /> -->
		<p class="btn">{{ lue }} <Icon name="ep:chrome-filled"></Icon></p>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';

	const lue = ref<number>(5);
</script>
