function main() {
  // imports
  const player = document.querySelector('.player')
  const video = player.querySelector('.viewer')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filed')
  const toggle = player.querySelector('.toggle')
  const skipButtons = player.querySelectorAll('[data-skip]')
  const ranges = player.querySelectorAll('.player__slider')

  function togglePlay() {
    // use video.paused property -> there's no play property
    if (video.paused) {
      console.log('hello')
      video.play()
      toggle.innerHTML = '▶️'
    } else {
      video.pause()
      toggle.innerHTML = '⏸'
    }
  }

  toggle.addEventListener('click', togglePlay)
}

window.addEventListener('DOMContentLoaded', main)