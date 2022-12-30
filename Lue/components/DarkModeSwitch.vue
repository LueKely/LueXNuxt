<script setup lang="ts">
	const isDark = useDark();
	const moon = computed(() => {
		return 'line-md:moon-rising-alt-loop';
	});
	const toggleDark = useToggle(isDark);

	function clickNightSwitch() {
		toggleDark();
	}
</script>

<template>
	<!-- container -->
	<div class="flex items-center justify-center">
		<div class="h-10 w-16 relative flex items-center justify-center">
			<div
				class="transition-transform ease-in-out duration-100 w-11 h-5 border-[3px] border-neutral-900 rounded-full bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-50"
			></div>
			<div
				@click="clickNightSwitch"
				class="transition-transform translate-x-[-12px] dark:translate-x-3 duration-100 ease-in-out h-6 w-6 border-[3px] border-neutral-900 rounded-full absolute bg-neutral-50 hover:cursor-pointer dark:bg-neutral-900 dark:border-neutral-50"
			></div>
		</div>
		<Icon
			class="dark:hidden dark:text-neutral-50 transition-all ease-in-out delay-150"
			size="2em"
			name="line-md:sunny-outline-loop"
		></Icon>
		<Icon
			class="hidden dark:block dark:text-neutral-50 transition-all ease-in-out delay-150"
			size="2em"
			:name="moon"
		></Icon>
	</div>
</template>

<style scoped></style>
