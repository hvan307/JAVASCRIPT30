function main() {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
  const p = document.querySelector('p')

  function makeGreen() {
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
  }
  p.addEventListener('click', makeGreen)
 
  // Regular
  console.log('Hello')

  // Interpolated - it will interpolate what you passed in the // second string into the first one
  console.log('Hello I am a %s string!', '🎃')
  // Alternative: ES6 backticks
  // console.log(`Hello, I am a ${var} string`)

  // Styled
  console.log('%c I am some great text', 'font-size: 50px; color: red; text-shadow: 2px 2px 10px yellow')

  // warning!
  console.warn('OH NOOOO')

  // Error :|
  console.error('💩')

  // Info
  console.info('Sunscreen is the most effective anti-ageing product.')

  // Testing - it will only fire up if the statement is wrong and will give you a message, otherwise nothing will display
  console.assert(p.classList.contains('ouch'), 'That is wrong!')

  // clearing - clears your console
  console.clear()

  // Viewing DOM Elements
  console.log(p) // shows the actual element itself
  console.dir(p) // shows the dropdown list with all the methods, attributes, etc.

  // Grouping together - collapses the related console logs together neatly
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log((`${dog.name} is${dog.age * 7} dog years old`))
    console.groupEnd(`${dog.name}`) 
  })

  // counting - counts how many times you've console logged a specific string up to that point
  console.count('Hanna')
  console.count('Hanna')
  console.count('Wes')
  console.count('Hanna')
  console.count('Hanna')
  console.count('Wes')

  // timing
  console.time('fetching data')
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
    })
  
  // displays data in a table
  console.table(dogs)
}

window.addEventListener('DOMContentLoaded', main)