// located in utils folder so it is auto-imported

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}

export function yyyyMmDdToLocale(date: string): string {
	return new Date(date).toLocaleDateString(undefined, options)
}
