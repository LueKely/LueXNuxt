<template>
	<!-- container -->
	<div class="h-10 w-16 relative flex items-center justify-center">
		<div
			class="transition-transform ease-in-out duration-100 w-11 h-5 border-[3px] border-neutral-900 rounded-full bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-50"
		></div>
		<div
			:class="{
				moveRight: isDark == true,
				moveLeft: isDark == false,
			}"
			@click="clickNightSwitch"
			class="transition-transform duration-100 ease-in-out h-6 w-6 border-[3px] border-neutral-900 rounded-full absolute bg-neutral-50 hover:cursor-pointer dark:bg-neutral-900 dark:border-neutral-50"
		></div>
	</div>
</template>
<script setup lang="ts">
	const isDark = useDark();

	const toggleDark = useToggle(isDark);

	function clickNightSwitch() {
		toggleDark();
	}
</script>
<style scoped></style>
