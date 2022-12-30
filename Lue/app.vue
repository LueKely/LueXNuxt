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

		meta: [{ name: 'description', content: 'My amazing site' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/Lue.ico' }],
	});
</script>
<style scoped></style>
