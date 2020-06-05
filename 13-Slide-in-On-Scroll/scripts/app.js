function main() {

  // debounce function from lodash
  // Function will be run every .20s
  function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
      var context = this, args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  const images = document.querySelectorAll('.slide-in')

  function checkSlide(e) {
    console.log(window.scrollY)
    images.forEach(image => {
      // window.scrollY gives the position at the top of the window, to get the scroll position at the bottom of the window, add window.innerHeight -> half-way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2
      // offsetTop gives us the pixel level of how far down the top of the image is from the top of the window, but here we want to know where the bottom of the img is so we add the image.height -> bottom of the image
      const imageBottom = image.offsetTop + image.height
      const isHalfShown = slideInAt > image.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom
      if (isHalfShown && isNotScrolledPast) {
        image.classList.add('active')
      } else {
        image.classList.remove('active')
      }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide)) // debounce is used to prevent the checkSlide function to perform to many times
}

window.addEventListener('DOMContentLoaded', main)