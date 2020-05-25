function main() {
  const secHand = document.querySelector('.sec-hand')
  const minHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')

  function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(seconds)

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    console.log(minutes)

    const hours = now.getHours()
    const hoursDegrees = ((hours / 60) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    console.log(hours)
  }

  setInterval(setDate, 1000)
}

window.addEventListener('DOMContentLoaded', main)