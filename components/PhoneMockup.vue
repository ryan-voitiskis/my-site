<template>
	<div
		class="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-200 dark:bg-gray-200"
	>
		<div
			class="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-200"
		></div>
		<div
			class="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-200"
		></div>
		<div
			class="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-200"
		></div>
		<div
			class="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-200"
		></div>
		<div
			class="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800"
		>
			<slot />
		</div>
	</div>
</template>
