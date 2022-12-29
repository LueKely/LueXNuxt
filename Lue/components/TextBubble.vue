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
	const { width, height } = useWindowSize();

	const distanceX = computed(() => {
		if (width.value < 1200) {
			return 0;
		} else {
			if (elementX.value / 5 <= 80 && elementX.value >= 0)
				return (elementX.value / 5).toFixed(1);
			else if (elementX.value < 15) return 15;
			else {
				return 80;
			}
		}
	});
	const distanceY = computed(() => {
		if (elementY.value / 5 <= 80 && elementY.value >= 0)
			return (elementY.value / 5).toFixed(1);
		else if (elementY.value < 15) return 15;
		else {
			return 80;
		}
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
		transition: all ease;
		transition-duration: 150ms;
	}
</style>
