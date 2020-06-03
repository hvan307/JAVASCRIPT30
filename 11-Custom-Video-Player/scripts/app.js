function main() {
  // imports
  const player = document.querySelector('.player')
  const video = player.querySelector('.viewer')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filled')
  const toggle = player.querySelector('.toggle')
  const skipButtons = player.querySelectorAll('[data-skip]')
  const ranges = player.querySelectorAll('.player__slider')
  const fullscreen = player.querySelector('.fullscreen')

  function togglePlay() {
    // use video.paused property -> there's no play property
    const property = video.paused ? 'play' : 'pause'
    video[property]()
  }

  function updateButton() {
    toggle.innerHTML = this.paused ? '▶️' : '⏸'
  }

  function skip() {
    // console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip)
  }

  function handleRangeUpdate() {
    // console.log(this.value)
    // console.log(this.name)
    video[this.name] = this.value
  }

  function handleProgress() {
    // We need to calculate the progress in % as suggested by flex-basis in main.css
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%` 
  }

  function scrub(e) {
    // console.log(e)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    // console.log(scrubTime)
    video.currentTime = scrubTime
  }

  function toggleFullscreen() {
    const fullscreen = video.fullscreenElement ? video.exitFullscreen() : video.requestFullscreen()
  }

  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate', handleProgress)
  toggle.addEventListener('click', togglePlay)
  skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

  let mousedown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  progress.addEventListener('mousedown', () => mousedown = true)
  progress.addEventListener('mouseup', () => mousedown = false)

  fullscreen.addEventListener('click', toggleFullscreen)
}

window.addEventListener('DOMContentLoaded', main)