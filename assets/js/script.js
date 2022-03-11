document.addEventListener("DOMContentLoaded", () => {

const codeArray = [
  {
    name: 'red',
    img: '/assets/images/red.webp'
  },
  {
    name: 'red',
    img: '/assets/images/red.webp'
  },
  {
    name: 'red',
    img: '/assets/images/red.webp'
  },
  {
    name: 'red',
    img: '/assets/images/red.webp'
  },
  {
    name: 'blue',
    img: '/assets/images/blue.webp'
  },
  {
    name: 'blue',
    img: '/assets/images/blue.webp'
  },
  {
    name: 'blue',
    img: '/assets/images/blue.webp'
  },
  {
    name: 'blue',
    img: '/assets/images/blue.webp'
  },
  {
    name: 'yellow',
    img: '/assets/images/yellow.webp'
  },
  {
    name: 'yellow',
    img: '/assets/images/yellow.webp'
  },
  {
    name: 'yellow',
    img: '/assets/images/yellow.webp'
  },
  {
    name: 'yellow',
    img: '/assets/images/yellow.webp'
  },
  {
    name: 'green',
    img: '/assets/images/green.webp'
  },
  {
    name: 'green',
    img: '/assets/images/green.webp'
  },
  {
    name: 'green',
    img: '/assets/images/green.webp'
  },
  {
    name: 'green',
    img: '/assets/images/green.webp'
  }
]

const grid = document.querySelector('.grid')
var codeChosen =[]
var codeChosenId = []

function createBoard() {
  for (let i = 0; i < codeArray.length; i++) {
    var codeLight = document.createElement('img')
    codeLight.setAttribute('src', '/assets/images/grey.webp')
    codeLight.setAttribute('data-id, i')
    codeLight.addEventListener('click', switchLight)
    grid.appendChild(codeLight)
  }
}

function switchLight() {
  var codeLightId = this.getAttribute('data-id')
  codeChosen.push(codeArray[codeLightId].name)
  codeChosenId.push(cardId)
  this.setAttribute('src', codeArray[codeLightId].img)
  if (codeChosen.length === 4) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()

})

