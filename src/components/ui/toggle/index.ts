import { type VariantProps, cva } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
	'hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-mono text-sm font-[110] font-medium transition-colors duration-420 focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-muted hover:bg-vmuted data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:hover:bg-secondary/80',
				outline:
					'border-input hover:bg-accent hover:text-accent-foreground border bg-transparent',
				theme: 'text-foreground hover:bg-vmuted bg-transparent'
			},
			size: {
				default: 'h-9 px-3',
				badge: 'h-7 rounded-full px-3',
				sm: 'h-8 px-2',
				lg: 'h-10 px-3',
				icon: 'h-9 w-9'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
