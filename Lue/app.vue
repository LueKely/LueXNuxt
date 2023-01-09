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
<script setup lang="ts">
	useHead({
		title: 'Lue X Nuxt',

		meta: [{ name: 'description', content: 'Gnarly Stuff With Nuxt.js' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/Lue.ico' }],
	});
</script>
<style scoped></style>
