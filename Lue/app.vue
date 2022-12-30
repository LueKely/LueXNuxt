<template>
	<NuxtLayout>
		<template v-slot:navbarslot>
			<Navbar></Navbar>
		</template>
		<template v-slot:TextBubble>
			<TextBubbleStyle></TextBubbleStyle>
		</template>
		<template v-slot:TxtFile>
			<TextFile></TextFile>
		</template>
	</NuxtLayout>
</template>
<script setup lang="ts"></script>
<style scoped></style>
