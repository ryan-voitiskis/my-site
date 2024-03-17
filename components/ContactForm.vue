<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(
	z.object({
		name: z.string().trim().min(2).max(100),
		email: z.string().trim().email(),
		message: z.string().trim().min(10).max(2000)
	})
)

const form = useForm({
	validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
	console.log('Form submitted!', values)
})

const nameField = ref<HTMLInputElement | null>(null)
const { focused: inputFocus } = useFocus(nameField)

function focusNameField() {
	inputFocus.value = true
}

defineExpose({ focusNameField })
</script>

<template>
	<form @submit="onSubmit">
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
