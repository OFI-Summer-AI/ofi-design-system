const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

/** Format matches Supabase's default: "MMM D, YYYY, hh:mma" — e.g. "Apr 19, 2026, 06:15am" */
export function formatChartTimestamp(value: string | number | Date): string {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ""
  const month = MONTHS[d.getMonth()]
  const day = d.getDate()
  const year = d.getFullYear()
  const hours24 = d.getHours()
  const hours = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = d.getMinutes().toString().padStart(2, "0")
  const period = hours24 < 12 ? "am" : "pm"
  const hh = hours.toString().padStart(2, "0")
  return `${month} ${day}, ${year}, ${hh}:${minutes}${period}`
}
