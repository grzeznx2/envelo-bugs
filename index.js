const heroesCountDisplay = document.getElementById('hero-count')
const heroesContainer = document.querySelector('#hero-container')
const heroes = []
const heroesToCreate = ['hulk', 'geralt', 'spider']

class Hero {
  #powerCount = 10

  constructor(name) {
    this.name = name
  }

  get powerCount() {
    return this.#powerCount
  }

  train() {
    this.#powerCount++
  }
}

function createHeroes(heroesArray) {
  heroesArray.forEach(getHero)
}

function addHero(hero) {
  heroes.push(hero)
}

function updateHerCountDisplay() {
  heroesCountDisplay.innerHTML = `Heroes count: ${heroes.length}`
}

function getHero(name) {
  const newHero = new Hero(name)
  addHero(newHero)
  updateHerCountDisplay()

  return new Hero(name)
}

const createPowerUpButton = hero => {
  const powerUpButton = document.createElement('button')

  powerUpButton.addEventListener('click', () => {
    hero.train()
    heroesContainer.innerHTML = ''
    printHallOfFame()
  })

  powerUpButton.innerHTML = 'Power Up Hero'

  return powerUpButton
}

const printHallOfFame = () => {
  heroes.map(hero => {
    const heroElement = document.createElement('li')
    const { name, powerCount } = hero

    const powerUpButton = createPowerUpButton(hero)

    heroElement.innerHTML = `<span>${name}</span>&nbsp;<span>${powerCount}</span>&nbsp;`
    heroElement.appendChild(powerUpButton)

    heroesContainer.append(heroElement)
  })
}

createHeroes(heroesToCreate)
printHallOfFame()
