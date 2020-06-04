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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `
    }).join('') // this will convert an array of string to a string
    suggestions.innerHTML = html
  }

  searchedWord.addEventListener('change', displayMatches)
  searchedWord.addEventListener('keyup', displayMatches)

}


window.addEventListener('DOMContentLoaded', main)
