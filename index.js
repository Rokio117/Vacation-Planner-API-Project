
let numSearch = $('#results-length').val()
const apiKey = 'tLlmdwj7hxSbe01snvsAG6ezl4TbSZqytzqoBFwb'
const baseUrl = 'https://developer.nps.gov/api/v1/parks'
const options = {
  headers: new Headers({
    'X-Api-Key': apiKey })
}

function handleSubmit() {
  $('#user-input').submit(function(event){
    event.preventDefault()
    $('#search-results').empty()
    userState = $('#state-selector').val()
    numSearch = $('#results-length').val()
    createURL(userState, numSearch);
  })
  
}


function createURL(userState, num) {
  newUrl =`${baseUrl}?limit=${num}&q=${userState}&api_key=${apiKey}`
  console.log(newUrl)
  fetchURL(newUrl, options)
}

function fetchURL(URL) {
  fetch (URL)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson, numSearch))
}

function displayResults(result, searchNum) {
  console.log('displayResults Ran')
  for (i = 0; i < searchNum; i++) {
    $('#search-results').append(
      `<li class="result">
      <h2 class="name">${result.data[i].fullName}</h2>
      <p class="description">${result.data[i].description}</p>
      <a href "${result.data[i].url}">${result.data[i].url}</a>
      </li>`
    )
  }
}

$(handleSubmit)