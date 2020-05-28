function main() {
  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => panel.addEventListener('click', () => panel.classList.toggle('open')))

  panels.forEach(panel => panel.addEventListener('transitionend', (e) => {
    // console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {
      panel.classList.toggle('open-active')
    }
  }))
}

window.addEventListener('DOMContentLoaded', main)