import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
	'focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-mono text-sm font-[120] whitespace-nowrap transition-colors duration-420 focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-xs',
				outline:
					'text-primary hover:border-primary hover:bg-foreground/10 border shadow-xs hover:no-underline',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				'nav-link':
					'text-foreground hover:bg-vmuted dark:text-secondary font-[130]',
				blank: 'whitespace-normal',
				image: 'focus-visible:ring-8'
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
				'lg-icon': 'h-12 w-12 p-2',
				'xl-icon': 'h-24 w-24 focus-visible:ring-4',
				image: 'h-full w-full object-cover'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
