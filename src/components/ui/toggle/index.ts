import { type VariantProps, cva } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium font-mono font-[110] transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-muted hover:bg-vmuted data-[state=on]:bg-secondary data-[state=on]:hover:bg-secondary/80 data-[state=on]:text-secondary-foreground',
				outline:
					'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
				theme: 'bg-transparent hover:bg-vmuted text-foreground'
			},
			size: {
				default: 'h-9 px-3',
				badge: 'h-7 px-3 rounded-full',
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
