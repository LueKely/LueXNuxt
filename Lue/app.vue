<template>
	<Head>
		<Title>Lue X Nuxt</Title>
		<Link rel="icon" type="image/x-icon" href="/favicon.ico"></Link>
	</Head>
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
	// useHead({
	// 	title: 'Lue X Nuxt',

	// 	meta: [{ name: 'description', content: 'My amazing site' }],
	// 	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	// });
</script>
<style scoped></style>
