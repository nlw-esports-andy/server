export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAsmount = (hours * 60) + minutes

  return minutesAsmount
}