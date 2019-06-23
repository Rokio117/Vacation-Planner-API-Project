

const apiKey = 'tLlmdwj7hxSbe01snvsAG6ezl4TbSZqytzqoBFwb'
const baseUrl = 'https://developer.nps.gov/api/v1/parks'
const options = {
  headers: new Headers({
    'X-Api-Key': apiKey })
}

function handleSubmit() {
  $('#user-input').submit(function(event){
    event.preventDefault()
    userState = $('#state-selector').val()
    createURL(userState);
  })
  
}


function createURL(userState) {
  newUrl =`${baseUrl}?q=${userState}`
  console.log(newUrl)
  fetchURL(newUrl, options)
}

function fetchURL(URL, api) {
  console.log('fetchURL Ran')
  console.log(options)
  fetch (URL, api)
  .then(response => response.json())
  .then(responseJson => console.log(responseJson))
}

function displayResults() {
  console.log('displayResults Ran')
  //properly displays results to the user
}

$(handleSubmit)