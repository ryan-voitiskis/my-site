import { type VariantProps, cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
	'focus:ring-ring inline-flex items-center rounded-full rounded-md border px-2.5 py-0.5 text-xs leading-4 font-semibold transition-colors duration-420 focus:ring-2 focus:ring-offset-2 focus:outline-hidden',
	{
		variants: {
			variant: {
				default: 'text-foreground hover:text-foreground/70',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow-xs',
				outline: 'text-foreground'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
