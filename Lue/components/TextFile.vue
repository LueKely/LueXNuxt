<template>
	<!-- container -->
	<div class="h-[60vh] w-full bg-slate-600 flex items-center justify-center">
		<!-- actual app -->
		<div
			class="w-[85%] h-[70%] border-[3px] border-neutral-900 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-50 shadow-[15px_19px_0px_0px_rgba(28,25,23,1)] dark:shadow-[15px_19px_0px_0px_rgba(249,250,251,1)]"
		>
			<!--top bar -->
			<div
				class="w-full h-[10%] bg-neutral-900 border-b-[3px] px-2 border-neutral-900 flex items-center justify-between dark:border-neutral-50 dark:bg-neutral-50"
			>
				<p class="text-neutral-50 dark:text-neutral-900">
					Greetings.txt - Notepad
				</p>
				<Icon
					class="text-neutral-50 dark:text-neutral-900"
					size="1.5em"
					name="material-symbols:close"
				></Icon>
			</div>
			<!-- typing cringe -->
			<div></div>
		</div>
	</div>
</template>
<script setup></script>
<style scoped>
	.TextFileShadow {
		box-shadow: 15px 19px 0px 0px;
	}
</style>
