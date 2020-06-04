function main() {
  const checkboxes = document.querySelectorAll('input')

  let lastChecked

  function handleCheck(e) {
    let inBetween = false
    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        // console.log(checkbox)
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween
        }
        if (inBetween) {
          checkbox.checked = true
        }
      })
    }
    lastChecked = this // the last box we checked
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
  })
}

window.addEventListener('DOMContentLoaded', main)