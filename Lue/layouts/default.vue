<template>
	<div class="w-screen min-h-screen epic xl:overflow-hidden">
		<!-- navbar -->
		<div
			class="transition-all ease-in-out duration-150 bg-neutral-50 dark:bg-neutral-900 w-full h-[8vh] border-b-[5px] border-neutral-900 dark:border-neutral-50"
		>
			<slot name="navbarslot"> Navbar</slot>
		</div>
		<!-- main content -->
		<div
			class="w-full flex flex-col item-center justify-center xl:h-[92vh] xl:flex-row"
		>
			<!-- title -->
			<div class="w-[100%] xl:w-[50%] p-5 flex items-center justify-center">
				<slot name="TextBubble"> Textbubble </slot>
			</div>
			<!-- txt file thingy -->
			<div class="w-[100%] xl:w-[50%] p-5 flex items-center justify-center">
				<slot name="TxtFile"> Textfile </slot>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts"></script>

<style scoped>
	.epic {
		background-color: #000000;
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23daff14' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	.dark > .epic {
		background-color: #ffe300;
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style>
