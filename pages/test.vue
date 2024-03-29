<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'
const contactForm = ref<InstanceType<typeof ContactForm>>()
</script>

<template>
	<main class="mx-auto w-full px-4 pb-48">
		<div class="mx-auto w-full max-w-screen-xl px-4">
			<h1 class="font-mono text-sm font-[120] text-muted-foreground">
				> ryan_voitiskis
			</h1>
		</div>
		<div class="mx-auto flex w-full flex-wrap justify-center gap-8 pb-48">
			<div class="w-full max-w-64 pt-16 text-sm text-muted-foreground">
				<p class="mb-2">developer from melbourne, au</p>
				<p class="mb-2">fullstack, mostly with js/ts</p>
				<Button
					variant="blank"
					class="pl-0 font-sans font-medium"
					@click="contactForm?.focusNameField"
				>
					talk to me -->
				</Button>
			</div>
			<ContactForm ref="contactForm" class="w-full max-w-screen-xs" />
		</div>
		<form name="test" method="POST" data-netlify="true">
			<p>
				<label>
					Your Name:
					<input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Your Email:
					<input type="email" name="email" />
				</label>
			</p>
			<p>
				<label>
					Your Role:
					<select name="role[]" multiple>
						<option value="leader">Leader</option>
						<option value="follower">Follower</option>
					</select>
				</label>
			</p>
			<p>
				<label>
					Message:
					<textarea name="message"></textarea>
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</main>
</template>
