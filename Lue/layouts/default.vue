<template>
	<div class="w-screen h-[100vh] bg-neutral-100">
		<!-- navbar -->
		<div class="bg-red-100 w-full h-[8vh]">
			<slot name="navbarslot"> Textbubble</slot>
		</div>
		<!-- main content -->
		<div class="w-full h-[92vh] bg-slate-600 flex item-center justify-center">
			<!-- title -->
			<div class="w-[50%] p-10 flex items-center justify-center">
				<slot name="TextBubble"> Textbubble</slot>
			</div>
			<!-- txt file thingy -->
			<div class="w-[50%] p-10 flex items-center justify-center">
				<slot name="TxtFile"> Textfile</slot>
			</div>
		</div>
	</div>
</template>
