function main() {
  const audio = document.querySelector('audio')

  audio.addEventListener('keydown', (e) => {
    console.log(e.keycode)
  })
}

window.addEventListener('DOMContentLoaded', main)