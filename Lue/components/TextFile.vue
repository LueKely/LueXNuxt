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
			<!-- typing contianer cringe -->
			<div class="w-fit h-fit p-3">
				<div>
					<p class="font-mono dark:text-neutral-50 text-left">{{ word }}l</p>
				</div>
				<!-- static message -->
				<div>
					<p class="font-mono dark:text-neutral-50 text-left">
						Hey there! Welcome to my small project, i hope you enjoy it as much
						as i did
					</p>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	let word = ref<string>('');
	let arrGreet = ref<string[]>([]);
	let index = ref<number>(0);
	let wordWelcome = ref<string[]>([
		'w',
		'e',
		'l',
		'c',
		'o',
		'm',
		'e',
		'.',
		'.',
		'.',
	]);

	let wordKamusta = ref<string[]>([
		'K',
		'a',
		'm',
		'u',
		's',
		't',
		'a',
		'.',
		'.',
		'.',
	]);

	function addMuhWords() {
		// welcome
		if (arrGreet.value.length != wordWelcome.value.length) {
			setTimeout(() => {
				arrGreet.value.push(wordWelcome.value[index.value]);
				word.value = arrGreet.value.join('');
				index.value++;
				addMuhWords();
			}, 100);
		} else if (arrGreet.value.length == wordWelcome.value.length) {
			setTimeout(() => delMuhWords(), 500);
		} else return;
	}
	function addMuhWordsPart2() {
		// welcome
		if (arrGreet.value.length != wordKamusta.value.length) {
			setTimeout(() => {
				arrGreet.value.push(wordKamusta.value[index.value]);
				word.value = arrGreet.value.join('');
				index.value++;
				addMuhWords();
			}, 100);
		} else if (arrGreet.value.length == wordKamusta.value.length) {
			setTimeout(() => delMuhWordsPart2(), 500);
		} else return;
	}
	function delMuhWords() {
		// welcome
		if (arrGreet.value.length != 0) {
			setTimeout(() => {
				arrGreet.value.pop();
				word.value = arrGreet.value.join('');
				index.value--;
				delMuhWords();
			}, 100);
		} else {
			setTimeout(() => {
				addMuhWordsPart2();
				return;
			}, 100);
		}
	}
	function delMuhWordsPart2() {
		// welcome
		if (arrGreet.value.length != 0) {
			setTimeout(() => {
				arrGreet.value.pop();
				word.value = arrGreet.value.join('');
				index.value--;
				delMuhWordsPart2();
			}, 100);
		} else {
			setTimeout(() => {
				addMuhWords();
				return;
			}, 100);
		}
	}

	onMounted(() => {
		addMuhWords();
	});
</script>
<style scoped>
	.TextFileShadow {
		box-shadow: 15px 19px 0px 0px;
	}
</style>
