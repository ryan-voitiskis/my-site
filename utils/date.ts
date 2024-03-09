// located in utils folder so it is auto-imported
const dateOptions: Intl.DateTimeFormatOptions = {
	timeZone: 'Australia/Melbourne',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}

const timeOptions: Intl.DateTimeFormatOptions = {
	timeZone: 'Australia/Melbourne',
	hour: '2-digit',
	minute: '2-digit',
	hour12: true
}

export function dateStringToLocale(date: string): string {
	const isoDate = new Date(date)
	return new Intl.DateTimeFormat('en-AU', dateOptions).format(isoDate)
}
