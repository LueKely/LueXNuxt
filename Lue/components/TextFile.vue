<template>
	<!-- container -->
	<div class="h-[60vh] w-full flex items-center justify-center">
		<!-- actual app -->
		<div
			class="w-[85%] xl:w-[70%] h-[60%] xl:h-[80%] border-[3px] border-neutral-900 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-50 shadow-[15px_19px_0px_0px_rgba(28,25,23,1)] dark:shadow-[15px_19px_0px_0px_rgba(249,250,251,1)]"
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
			<div class="w-[100%] h-[100%] p-3">
				<div>
					<p class="xl:text-2xl font-mono dark:text-neutral-50 text-left">
						{{ word
						}}<span class="inline-block w-3 h-5 xl:h-7">
							<!-- type thingy kung nag tataype kung linee -->
							<div class="flex items-end justify-start">
								<div
									class="w-[1px] h-4 xl:h-7 translate-y-1 xl:translate-y-[7px] bg-neutral-900 dark:bg-neutral-50"
								></div></div
						></span>
					</p>
				</div>
				<!-- static message -->
				<div>
					<p class="xl:text-2xl font-mono mt-3 dark:text-neutral-50 text-left">
						Hey there! Welcome to my small project, i hope you can enjoy it as
						much as i did.
					</p>
				</div>
				<!-- button -->
				<div
					class="mx-auto mt-20 xl:mt-12 2xl:mt-24 w-[60%] h-10 bg-neutral-900 hover:text-neutral-900 hover:bg-neutral-50 hover:border-neutral-900 border-[2px] text-neutral-50 border-neutral-50 flex items-center justify-center shadow-[0px_0px_0px_0px_rgba(28,25,23,1)] hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all ease-in-out delay-75 dark:hover:shadow-[10px_10px_0px_0px_rgba(250,250,250,1)]"
				>
					<p class="font-['Spicy_Rice'] mr-1 pointer-events-none">Proceed to</p>
					<Icon size="1.75em" name="akar-icons:github-fill"></Icon>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	let word = ref<string>('');
	let arrGreet = ref<string[]>([]);
	let index = ref<number>(0);
	let welcome = ref<string>('Welcome... nah too boring ');
	let Kamusta = ref<string>('Kamusta...? nah too cringe');
	let wordWelcome = ref<string[]>(welcome.value.split(''));
	let wordKamusta = ref<string[]>(Kamusta.value.split(''));

	function addMuhWords(wordArr: string[]) {
		// welcome

		if (arrGreet.value.length != wordArr.length) {
			setTimeout(() => {
				arrGreet.value.push(wordArr[index.value]);
				word.value = arrGreet.value.join('');
				index.value++;
				addMuhWords(wordArr);
			}, 100);
		} else {
			setTimeout(() => delMuhWords(wordArr), 500);
		}
	}

	function delMuhWords(wordArr: string[]) {
		// welcome
		if (arrGreet.value.length != 0) {
			setTimeout(() => {
				arrGreet.value.splice(index.value - 1, 1);
				word.value = arrGreet.value.join('');
				index.value--;
				delMuhWords(wordArr);
			}, 50);
		} else {
			if (wordArr == wordKamusta.value) {
				setTimeout(() => {
					addMuhWords(wordWelcome.value);
					return;
				}, 100);
			} else {
				setTimeout(() => {
					addMuhWords(wordKamusta.value);
					return;
				}, 100);
			}
		}
	}

	onMounted(() => {
		addMuhWords(wordKamusta.value);
	});
</script>
<style scoped>
	.TextFileShadow {
		box-shadow: 15px 19px 0px 0px;
	}
</style>
