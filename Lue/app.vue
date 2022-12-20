<template>
	<div>
		<!-- <NuxtWelcome /> -->
		<div class="test">tite</div>
		<div class="w-50vw] h-[50vh] bg-neutral-400 relative">
			<div
				ref="textbox"
				class="rounded-full w-[100px] h-[100px] bg-lime-300"
			></div>
		</div>
		<div>{{ elementX }} {{ elementY }}</div>
		<div>{{ xToString }}</div>
	</div>
</template>
<script setup lang="ts">
	const textbox = ref(null);
	const { elementX, elementY } = useMouseInElement(textbox);

	const xToString = computed(() => {
		return `${elementX.value}px`;
	});
	const yToString = computed(() => {
		return `${elementY.value}px`;
	});
</script>
<style scoped>
	.test {
		position: absolute;
		right: v-bind('xToString');
		bottom: v-bind('yToString');
		transition: all ease-in-out;
	}
</style>
