function main() {
  const canvas = document.querySelector('#my-canvas')
  const ctx = canvas.getContext('2d') // You can also call '3d' for games and animations

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.strokeStyle = '#BADA55'
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = '100'
  // colour blend mode
  // ctx.globalCompositeOperation = 'multiply'

  let isDrawing = false
  let lastX = 0
  let lastY = 0
  let hue = 0
  let direction = true

  function draw(e) {
    if (!isDrawing) return // stopos the fn from running when the mouse is not moved
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    // start from
    ctx.moveTo(lastX, lastY)
    // go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    // lastX = e.offsetX
    // lastY = e.offsetY
    // These can be refactored into one line => destructuring an array
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue ++ // this will add an increment of 1 to the hue on the hsl palette
    if (hue >= 360) {
      hue = 0
    }

    if (ctx.lineWidth >= 300 || ctx.lineWidth <= 1) {
      // flip the direction
      direction = !direction
    }
    if (direction) {
      ctx.lineWidth++
    } else {
      ctx.lineWidth--
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // We need to set the lastX, Y to the e.offsets so that we can start drawing at any point on the canvas without it being connected to the past point where we stopped
    [lastX, lastY] = [e.offsetX, e.offsetY]

  })

  canvas.addEventListener('mousemove', draw)



  
  canvas.addEventListener('mouseup', () => isDrawing = false)
  canvas.addEventListener('mouseout', () => isDrawing = false)

}

window.addEventListener('DOMContentLoaded', main)