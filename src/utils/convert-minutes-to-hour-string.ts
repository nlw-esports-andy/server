export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  const hourString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

  return hourString
}