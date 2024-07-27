<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { Textarea } from '@/components/ui/textarea'

const formSchema = toTypedSchema(
	z.object({
		name: z.string().trim().min(2).max(100),
		email: z.string().trim().email().max(420),
		message: z.string().trim().min(10).max(9000)
	})
)

const form = useForm({ validationSchema: formSchema })

const onSubmit = form.handleSubmit(async (values) => {
	const formData = new FormData()
	formData.append('form-name', 'contact')
	formData.append('name', values.name)
	formData.append('email', values.email)
	formData.append('message', values.message)
	const res = await fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'multipart/form-data' },
		body: formData
	})
	if (res.ok) {
		toast.success(`thanks for getting in touch ${values.name}!`)
		form.resetForm()
		return
	}
	await navigator.clipboard.writeText('ryanvoitiskis@pm.me')
	toast.error(
		`sorry, something went wrong. please email me instead at: 
		'ryanvoitiskis@pm.me' which has been copied to your clipboard.`,
		{ duration: 30000 }
	)
})

// useValidation doesn't function correctly on chrome ∴ workaround
const showNameError = computed(() => form.isFieldTouched('name'))
const showEmailError = computed(() => form.isFieldTouched('email'))
const showMessageError = computed(() => form.isFieldTouched('message'))
</script>

<template>
	<form name="contact" netlify @submit="onSubmit">
		<input type="hidden" name="form-name" value="contact" />
		<FormField v-slot="{ componentField }" name="name">
			<FormItem class="mb-2">
				<FormLabel>name</FormLabel>
				<FormControl>
					<Input
						type="text"
						v-bind="componentField"
						spellcheck="false"
						autocomplete="off"
						class="name_input"
					/>
				</FormControl>
				<FormMessage v-if="showNameError" />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="email">
			<FormItem class="mb-2">
				<FormLabel>email</FormLabel>
				<FormControl>
					<Input
						type="text"
						v-bind="componentField"
						spellcheck="false"
						autocomplete="off"
					/>
				</FormControl>
				<FormMessage v-if="showEmailError" />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="message">
			<FormItem class="mb-2">
				<FormLabel>message</FormLabel>
				<FormControl>
					<Textarea v-bind="componentField" spellcheck="false" />
				</FormControl>
				<FormMessage v-if="showMessageError" />
			</FormItem>
		</FormField>

		<Button type="submit" class="my-4">submit</Button>
		<Toaster position="bottom-center" />
	</form>
</template>
