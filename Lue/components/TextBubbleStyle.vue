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
				class="absolute xl:top-14 2xl:top-[3.2rem] xl:left-[-2rem] 2xl:left-16 top-5 left-0 w-[40%] 2xl:w-[30%] h-[10%] 2xl:h-[12%] bg-neutral-900 z-30 dark:bg-yellow-300 flex items-center justify-center rounded-xl"
			>
				<h1
					class="text-lg xl:text-3xl 2xl:text-4xl font-['Spicy_Rice'] text-neutral-50 dark:text-neutral-900"
				>
					Welcome To...
				</h1>
			</div>

			<div
				class="w-[85%] h-[55%] z-30 absolute xl:top-32 2xl:top-36 top-16 flex flex-col items-center justify-center"
			>
				<h1
					class="text-5xl xl:text-8xl 2xl:text-[113px] font-['Spicy_Rice'] dark:text-yellow-300 text-neutral-900"
				>
					LUE X NUXT
				</h1>
				<p
					class="text-lg xl:text-2xl font-['Spicy_Rice'] dark:text-yellow-300 text-neutral-900"
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
				class="xl:top-14 absolute z-20 hidden xl:block xl:scale-90 fill-neutral-50 dark:fill-neutral-900 stroke-neutral-900 dark:stroke-yellow-300"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="801"
				xmlns="http://www.w3.org/2000/svg"
				height="531.132"
				id="screenshot-a8540284-2a81-808f-8001-dbaf68d07ce4"
				viewBox="495 547 801 531.132"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-a8540284-2a81-808f-8001-dbaf68d07ce4">
					<g id="fills-a8540284-2a81-808f-8001-dbaf68d07ce4">
						<path
							rx="0"
							ry="0"
							d="M997.934,986L540,986C517.923,986,500,968.077,500,946L500,592C500,569.923,517.923,552,540,552L1251,552C1273.077,552,1291,569.923,1291,592L1291,946C1291,968.077,1273.077,986,1251,986L1172.198,986L1099.208,1058.99C1091.403,1066.795,1078.729,1066.795,1070.924,1058.99L997.934,986Z"
							style="fill: rgb(255, 255, 255); fill-opacity: 1"
						/>
					</g>
					<g id="strokes-a8540284-2a81-808f-8001-dbaf68d07ce4">
						<g class="stroke-shape">
							<path
								rx="0"
								ry="0"
								d="M997.934,986L540,986C517.923,986,500,968.077,500,946L500,592C500,569.923,517.923,552,540,552L1251,552C1273.077,552,1291,569.923,1291,592L1291,946C1291,968.077,1273.077,986,1251,986L1172.198,986L1099.208,1058.99C1091.403,1066.795,1078.729,1066.795,1070.924,1058.99L997.934,986Z"
								style="
									stroke-width: 10;

									stroke-opacity: 1;
								"
							/>
						</g>
					</g>
				</g>
			</svg>

			<!-- desktop shadow -->
			<svg
				class="test absolute z-10 hidden xl:block xl:scale-90 dark:fill-yellow-300 fill-neutral-900 stroke-neutral-900 dark:stroke-yellow-300"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="801"
				xmlns="http://www.w3.org/2000/svg"
				height="531.132"
				id="screenshot-a8540284-2a81-808f-8001-dbaf68d07ce4"
				viewBox="495 547 801 531.132"
				style="-webkit-print-color-adjust: exact"
				fill="none"
				version="1.1"
			>
				<g id="shape-a8540284-2a81-808f-8001-dbaf68d07ce4">
					<g id="fills-a8540284-2a81-808f-8001-dbaf68d07ce4">
						<path
							rx="0"
							ry="0"
							d="M997.934,986L540,986C517.923,986,500,968.077,500,946L500,592C500,569.923,517.923,552,540,552L1251,552C1273.077,552,1291,569.923,1291,592L1291,946C1291,968.077,1273.077,986,1251,986L1172.198,986L1099.208,1058.99C1091.403,1066.795,1078.729,1066.795,1070.924,1058.99L997.934,986Z"
							style="fill-opacity: 1"
						/>
					</g>
					<g id="strokes-a8540284-2a81-808f-8001-dbaf68d07ce4">
						<g class="stroke-shape">
							<path
								rx="0"
								ry="0"
								d="M997.934,986L540,986C517.923,986,500,968.077,500,946L500,592C500,569.923,517.923,552,540,552L1251,552C1273.077,552,1291,569.923,1291,592L1291,946C1291,968.077,1273.077,986,1251,986L1172.198,986L1099.208,1058.99C1091.403,1066.795,1078.729,1066.795,1070.924,1058.99L997.934,986Z"
								style="
									fill: none;

									stroke-opacity: 1;
								"
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
	}
</style>
