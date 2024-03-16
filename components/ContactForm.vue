<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(
	z.object({
		name: z.string().min(2).max(100),
		email: z.string().email(),
		message: z.string().min(8).max(2000)
	})
)

const form = useForm({
	validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
	console.log('Form submitted!', values)
})
</script>

<template>
	<form class="font-sans" @submit="onSubmit">
		<FormField v-slot="{ componentField }" name="name">
			<FormItem v-auto-animate>
				<FormLabel>name</FormLabel>
				<FormControl>
					<Input type="text" v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="email">
			<FormItem v-auto-animate>
				<FormLabel>email</FormLabel>
				<FormControl>
					<Input type="text" v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<FormField v-slot="{ componentField }" name="message">
			<FormItem v-auto-animate>
				<FormLabel>message</FormLabel>
				<FormControl>
					<Textarea v-bind="componentField" />
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<Button type="submit" class="my-8">Submit</Button>
	</form>
</template>
