<script setup lang="ts">
import * as z from 'zod'
import { toast } from 'vue-sonner'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

const formSchema = toTypedSchema(
	z.object({
		name: z.string().trim().min(2).max(100),
		email: z.string().trim().email().max(420),
		message: z.string().trim().min(10).max(2000)
	})
)

const form = useForm({
	validationSchema: formSchema
})

const nameField = ref<HTMLInputElement | null>(null)
const { focused: inputFocus } = useFocus(nameField)

function focusNameField() {
	inputFocus.value = true
}

defineExpose({ focusNameField })

const onSubmit = form.handleSubmit(async (values) => {
	const formData = new FormData()
	formData.append('form-name', 'contact')
	Object.entries(values).forEach(([key, value]) => {
		formData.append(key, value)
	})
	const res = await fetch('/', {
		method: 'POST',
		body: formData
	})
	if (res.ok) {
		toast.success(`thanks for getting in touch ${values.name}!`)
		form.resetForm()
		return
	}
	await navigator.clipboard.writeText('ryanvoitiskis@pm.me')
	toast.error(
		`sorry, something went wrong. please email me instead at 'ryanvoitiskis@pm.me' which has been copied to your clipboard.`,
		{ duration: 30000 }
	)
})
</script>

<template>
	<form name="contact" netlify @submit="onSubmit">
		<input type="hidden" name="form-name" value="contact" />
		<FormField v-slot="{ componentField }" name="name">
			<FormItem class="mb-2">
				<FormLabel>name</FormLabel>
				<FormControl>
					<Input ref="nameField" type="text" v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="email">
			<FormItem class="mb-2">
				<FormLabel>email</FormLabel>
				<FormControl>
					<Input type="text" v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="message">
			<FormItem class="mb-2">
				<FormLabel>message</FormLabel>
				<FormControl>
					<Textarea v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<Button type="submit" class="my-4">submit</Button>
	</form>
</template>
