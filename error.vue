<script setup>
const error = useError()
</script>

<template>
	<NuxtLayout>
		<main class="mx-auto w-full px-4 pb-48">
			<div class="mx-auto w-full max-w-[1120px] px-4">
				<h1 class="font-mono text-sm font-[120] text-muted-foreground">
					> error
				</h1>
			</div>
			<div class="mx-auto w-full max-w-[1120px] px-4">
				<h2
					v-if="error.statusCode"
					class="text-balance font-mono text-5xl font-bold"
				>
					{{ error.statusCode }}
				</h2>
				<h3
					v-if="error.statusMessage"
					class="text-balance font-sans text-xl font-bold"
				>
					{{ error.statusMessage }}
				</h3>
				<p
					v-if="error.message"
					class="break-words font-mono font-[110] text-muted-foreground"
				>
					{{ error.message }}
				</p>
			</div>
		</main>
	</NuxtLayout>
</template>
