const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;

export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / HOUR_IN_SECONDS);
  const minutes = Math.floor((duration / HOUR_IN_SECONDS) / MINUTE_IN_SECONDS);
  const seconds = duration % MINUTE_IN_SECONDS;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}
