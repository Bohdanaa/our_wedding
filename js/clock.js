function declOfNum(number, titles) {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]

}

function getTimeRemaining(endTime) {
	let startTime = new Date().getTime()
	let distance = endTime - startTime
	let days = Math.floor(distance / (1000 * 60 * 60 * 24))
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)


	return {
		'total': distance,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds,

	};
}

function initializeClock(endTime) {
	let clock = document.querySelector('.countdown')
	let daysSpan = clock.querySelector('.days')
	let hoursSpan = clock.querySelector('.hours')
	let minutesSpan = clock.querySelector('.minutes')
	let secondsSpan = clock.querySelector('.seconds')

	let daySpan = clock.querySelector('.day')
	let hourSpan = clock.querySelector('.hour')
	let minuteSpan = clock.querySelector('.minute')
	let secondSpan = clock.querySelector('.second')

	function updateClock() {
		let t = getTimeRemaining(endTime)
		let days = parseInt(t.days)
		let hours = parseInt(t.hours)
		let minutes = parseInt(t.minutes)
		let seconds = parseInt(t.seconds)
		daysSpan.innerHTML = days
		hoursSpan.innerHTML = ('0' + hours).slice(-2)
		minutesSpan.innerHTML = ('0' + parseInt(t.minutes)).slice(-2)
		secondsSpan.innerHTML = ('0' + parseInt(t.seconds)).slice(-2)
		daySpan.innerHTML = declOfNum(days, ['день', 'дні', 'днів'])
		hourSpan.innerHTML = declOfNum(hours, ['година', 'години', 'годин'])
		minuteSpan.innerHTML = declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин'])
		secondSpan.innerHTML = declOfNum(seconds, ['секунда', 'секунди', 'секунд'])

		if (t.total <= 0) {
			clearInterval(timeInterval)
		}
	}

	updateClock();
	let timeInterval = setInterval(updateClock, 1000)
}

let endLine = new Date('March 13, 2024 00:00:00').getTime();
let deadLine = new Date(endLine)
initializeClock(deadLine)
