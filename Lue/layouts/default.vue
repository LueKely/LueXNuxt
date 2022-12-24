<template>
	<div
		class="w-screen min-h-screen bg-neutral-50 dark:bg-neutral-900 xl:overflow-hidden"
	>
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
			<div class="w-[100%] xl:w-[50%] p-10 flex items-center justify-center">
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
