function main() {
  const key = document.querySelector('.key')

  key.addEventListener('keydown', (e) => {
    console.log(e.keycode, 'hello')
  })
}

document.addEventListener('DOMContentLoaded', main)