<template>
	<div
		class="h-[40vh] xl:h-full w-full relative flex items-center justify-center mt-2"
	>
		<!-- textBox -->
		<div
			class="h-[350px] xl:h-[500px] w-full xl:w-[90%] relative flex flex-col items-center justify-center"
		>
			<!-- welcome -->
			<div
				class="absolute xl:top-14 2xl:top-[3.2rem] xl:left-[-2rem] 2xl:left-20 top-5 left-0 w-[40%] 2xl:w-[30%] h-[10%] 2xl:h-[12%] bg-black z-30 dark:bg-neutral-50 flex items-center justify-center"
			>
				<h1
					class="text-lg xl:text-3xl 2xl:text-4xl font-['Spicy_Rice'] text-neutral-50 dark:text-neutral-900"
				>
					Welcome To...
				</h1>
			</div>

			<div
				class="w-[85%] h-[55%] z-30 absolute xl:top-32 top-16 flex flex-col items-center justify-center"
			>
				<h1
					class="text-5xl xl:text-8xl 2xl:text-[113px] font-['Spicy_Rice'] dark:text-neutral-50 text-neutral-900"
				>
					LUE X NUXT
				</h1>
				<p
					class="text-lg xl:text-2xl font-['Spicy_Rice'] dark:text-neutral-50 text-neutral-900"
				>
					A website powered by nuxt
				</p>
			</div>
			<!-- textbox shape mobile view-->
			<svg
				class="absolute z-20 xl:hidden fill-neutral-50 dark:fill-neutral-900 stroke-neutral-900 dark:stroke-neutral-50"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="293"
				xmlns="http://www.w3.org/2000/svg"
				height="276"
				id="screenshot-4f92a8e6-89f4-80d5-8001-cf9152fb485d"
				viewBox="-2.5 -2.5 293 276"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-4f92a8e6-89f4-80d5-8001-cf9152fb485d" rx="0" ry="0">
					<g id="shape-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
						<g id="fills-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
							<path
								rx="0"
								ry="0"
								d="M0,0L0,232L198,232L198,271L234,232L288,232L288,0L0,0Z"
							/>
						</g>
						<g id="strokes-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
							<g class="stroke-shape">
								<path
									rx="0"
									ry="0"
									d="M0,0L0,232L198,232L198,271L234,232L288,232L288,0L0,0Z"
									style="stroke-width: 5; stroke-opacity: 1"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
			<!-- mobile view shadow -->
			<svg
				class="absolute z-10 xl:hidden stroke-neutral-900 dark:stroke-neutral-50 dark:fill-neutral-50 fill-neutral-900 bottom-8 right-5"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="293"
				xmlns="http://www.w3.org/2000/svg"
				height="276"
				id="screenshot-4f92a8e6-89f4-80d5-8001-cf9152fb485d"
				viewBox="-2.5 -2.5 293 276"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-4f92a8e6-89f4-80d5-8001-cf9152fb485d" rx="0" ry="0">
					<g id="shape-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
						<g id="fills-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
							<path
								rx="0"
								ry="0"
								d="M0,0L0,232L198,232L198,271L234,232L288,232L288,0L0,0Z"
							/>
						</g>
						<g id="strokes-4f92a8e6-89f4-80d5-8001-cf8e2069ad1e">
							<g class="stroke-shape">
								<path
									rx="0"
									ry="0"
									d="M0,0L0,232L198,232L198,271L234,232L288,232L288,0L0,0Z"
									style="stroke-width: 5; stroke-opacity: 1"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>

			<!-- desktop view class="hidden xl:block stroke-neutral-900 dark:stroke-neutral-50" -->
			<svg
				ref="textbox"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="xl:top-14 absolute z-20 hidden xl:block xl:scale-90 fill-neutral-50 dark:fill-neutral-900 stroke-neutral-900 dark:stroke-neutral-50"
				width="679"
				xmlns="http://www.w3.org/2000/svg"
				height="454"
				id="screenshot-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d"
				viewBox="-278.5 -22.5 679 454"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
					<g id="fills-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
						<path
							rx="0"
							ry="0"
							d="M-276,-20L398,-20L398,370L256,370L169,429L169,370L-276,370L-276,-20Z"
						/>
					</g>
					<g id="strokes-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
						<g class="stroke-shape">
							<path
								rx="0"
								ry="0"
								d="M-276,-20L398,-20L398,370L256,370L169,429L169,370L-276,370L-276,-20Z"
								style="stroke-width: 5; stroke-opacity: 1"
							/>
						</g>
					</g>
				</g>
			</svg>
			<!-- desktop shadow -->
			<svg
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="test absolute z-10 hidden xl:block xl:scale-90 dark:fill-neutral-50 fill-neutral-900 stroke-neutral-900 dark:stroke-neutral-50"
				width="679"
				xmlns="http://www.w3.org/2000/svg"
				height="454"
				id="screenshot-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d"
				viewBox="-278.5 -22.5 679 454"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
					<g id="fills-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
						<path
							rx="0"
							ry="0"
							d="M-276,-20L398,-20L398,370L256,370L169,429L169,370L-276,370L-276,-20Z"
						/>
					</g>
					<g id="strokes-4f92a8e6-89f4-80d5-8001-cf9d5ec4509d">
						<g class="stroke-shape">
							<path
								rx="0"
								ry="0"
								d="M-276,-20L398,-20L398,370L256,370L169,429L169,370L-276,370L-276,-20Z"
								style="stroke-width: 5; stroke-opacity: 1"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>
<script setup lang="ts">
	const textbox = ref(null);
	const { elementX, elementY } = useMouseInElement(textbox);
	const { width, height } = useWindowSize();
	const distanceX = computed(() => {
		if (width.value > 1400) {
			if (elementX.value / 5 <= 22) {
				return 50;
			} else if (elementX.value / 5 >= 90) {
				return 90;
			} else {
				return (elementX.value / 5).toFixed(1);
			}
		} else {
			return -60;
		}
	});
	const distanceY = computed(() => {
		return (elementY.value / 11).toFixed(1);
	});

	const yToString = computed(() => {
		return `${distanceY.value}px`;
	});

	const xToString = computed(() => {
		return `${distanceX.value}px`;
	});
</script>
<style scoped>
	.test {
		right: v-bind('xToString');
		bottom: v-bind('yToString');
		transition: all ease;
		transition-duration: 150ms;
	}
</style>
