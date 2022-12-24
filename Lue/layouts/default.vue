<template>
	<div class="w-screen h-[100vh] bg-neutral-100">
		<!-- navbar -->
		<div
			class="transition-all ease-in-out duration-150 bg-neutral-50 dark:bg-neutral-900 w-full h-[8vh] border-b-[5px] border-neutral-900 dark:border-neutral-50"
		>
			<slot name="navbarslot"> Navbar</slot>
		</div>
		<!-- main content -->
		<div class="w-full h-[92vh] bg-slate-600 flex item-center justify-center">
			<!-- title -->
			<div class="w-[50%] p-10 flex items-center justify-center">
				<slot name="TextBubble"> Textbubble</slot>
			</div>
			<!-- txt file thingy -->
			<div class="w-[50%] p-10 flex items-center justify-center bg-white">
				<slot name="TxtFile"> Textfile </slot>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
