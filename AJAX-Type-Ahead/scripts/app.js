function main() {

  const searchedWord = document.querySelector('.search')
  const suggestions = document.querySelector('.suggestions')

  const cities = []

  fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(resp => resp.json())
    .then(data => cities.push(...data))

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi') // g for Global, i (case)Insensitive
      return place.city.match(regex) || place.state.match(regex)
    })
  }
  function displayMatches() {
    const matches = findMatches(this.value, cities)
    console.log(matches)
  }

  searchedWord.addEventListener('change', displayMatches)
  searchedWord.addEventListener('keyup', displayMatches)

  suggestions.addEventListener('change', displayMatches)

}


window.addEventListener('DOMContentLoaded', main)
