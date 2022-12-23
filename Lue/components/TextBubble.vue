<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<!-- container -->
		<div
			class="w-50vw] h-[50vh] bg-neutral-400 flex items-center justify-start"
		>
			<!-- container -->
			<div
				class="w-[500px] h-[500px] bg-lime-300 flex items-center justify-center relative"
			>
				<!-- box -->
				<div ref="textbox" class="bg-red-500 w-[400px] h-[400px] z-10"></div>
				<!-- shadow -->
				<div class="bg-neutral-800 w-[400px] h-[400px] absolute test z-0"></div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	const textbox = ref(null);
	const { elementX, elementY } = useMouseInElement(textbox);

	const distanceX = computed(() => {
		return (elementX.value / 10).toFixed(1);
	});
	const distanceY = computed(() => {
		return (elementY.value / 8).toFixed(1);
	});

	const yToString = computed(() => {
		return `${distanceY.value}px`;
	});

	const xToString = computed(() => {
		return `${distanceX.value}px`;
	});
	// lagay if statement na kung lagpas na sa threshhold gawing static nalang pero yeah change nalang values kung
</script>
<style scoped>
	.test {
		right: v-bind('xToString');
		bottom: v-bind('yToString');
		transition: all ease-in-out;
		transition-duration: 80ms;
	}
</style>
