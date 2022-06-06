const jokeEl = document.getElementById('joke')
const inIP = document.getElementById('inIP')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
  //   const config = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   }

  let headers = new Headers()
  headers.append('accept', 'application/json')
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  headers.append('Access-Control-Allow-Credentials', 'true')

  fetch('http://ip-api.com/json/24.48.0.1?lang=ru')
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.country))
}
