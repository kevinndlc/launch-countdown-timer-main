let nbDays = 8;
let nbHours = 23;
let nbMinutes = 55;
let nbSeconds = 41;

const previousValues = {
  seconds: nbSeconds,
  minutes: nbMinutes,
  hours: nbHours,
  days: nbDays,
};

let totalSeconds =
  nbSeconds + nbMinutes * 60 + nbHours * 3600 + nbDays * 3600 * 24;

const displayCountdown = () => {
  days.textContent = nbDays.toString().padStart(2, '0');
  if (previousValues.days != nbDays) pullSheet(days)
  hours.textContent = nbHours.toString().padStart(2, '0');
  if (previousValues.hours != nbHours) pullSheet(hours);
  minutes.textContent = nbMinutes.toString().padStart(2, '0');
  if (previousValues.minutes != nbMinutes) pullSheet(minutes);
  seconds.textContent = nbSeconds.toString().padStart(2, '0');
  if (previousValues.seconds != nbSeconds) pullSheet(seconds);
}

const pullSheet = (el) => {
  const sheet = el.previousElementSibling
  sheet.classList.add('pulled');
  setTimeout(() => {
    sheet.classList.remove('pulled');
  }, 900);
}

window.onload = displayCountdown

const timer = setInterval(() => {
  totalSeconds--;

  previousValues.days = nbDays;
  previousValues.hours = nbHours;
  previousValues.minutes = nbMinutes;
  previousValues.seconds = nbSeconds;

  nbSeconds = totalSeconds % 60;
  nbMinutes = Math.floor(totalSeconds / 60) % 60;
  nbHours = Math.floor(totalSeconds / 3600) % 24;
  nbDays = Math.floor(totalSeconds / (3600 * 24))
  displayCountdown()

  if (totalSeconds === 0) clearInterval(timer)
}, 1000)