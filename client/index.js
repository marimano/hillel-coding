'use strict';

import makeDropDown from './dropDown.js'
import ModalDialog from './ModalDialog.js'
import ProductList from './ProductList.js'

window.addEventListener('error', (event) => {
  console.log('Ooops', event)
})

/*function isValid(base, degree) {
  return !isNaN(base) && !isNaN(degree) && Number.isInteger(+degree)
}

const categories = ['A', 'B', 'C']

const items = [
  {
    name: 'First',
    value: 1,
    category: 'A'
  },
  {
    name: 'Second',
    value: 2,
    category: 'A'
  },
  {
    name: 'Third',
    value: 3,
    category: 'B'
  },
  {
    name: 'Fourth',
    value: 4,
    category: 'B'
  }
]

makeDropDown(categories, items, document.body, decorateElement, false)

function decorateElement(element, index) {
  if (index === 3) {
    element.classList.add('third-element')
  }
}


const modalDialog = new ModalDialog()
modalDialog.init()

function onFormSubmit(event) {
  event.preventDefault()
  const { elements } = event.target
  const name = elements.name.value.trim()
  const amount = +elements.amount.value

  const errorElement = event.target.querySelector('.error')
  if (!name) {
    errorElement.innerText = 'Name cannot be empty'
    return
  }

  if (productList.purchasings.some(p => p.name === name)) {
    errorElement.innerText = 'Such purchasing is already added'
    return
  }

  if (amount < 1 || amount > 1000000) {
    errorElement.innerText = 'Amount should be within 1 and 1000000'
    return
  }

  errorElement.innerText = ''
  productList.addProduct(name, amount)
}

document.forms[0].onsubmit = onFormSubmit


const productList = new ProductList()
productList.init(null, modalDialog)

function outerF(a, b, callback) {
  //

  function innerInnerF() {}
  const data = 123
  if (a) {
    callback(data, innerInnerF)
  }
}

let called = false
function innerF(data, innerInnerF) {
  if (called) {
    return
  }

  called = true
  innerInnerF()
}

setTimeout(() => {//st1
  if (!called) {
    called = true
    console.log('Timeout error')
  }
}, 10000)

outerF(true, false, innerF)


const promise = new Promise((resolve, reject) => {
  setTimeout(function() {//st2
    const result = null
    result.test()
    resolve({ data: 123 })
    resolve({ data: 1235 }) // useless
    resolve({ data: 12 })// useless

    reject('Error')// useless
  }, 1000)
})

promise
  .then((data) => {
    console.log(data)
  })
  .then(() => {

  })
  .catch((error) => {
    console.log(error)
  })
  .then()
  .finally(() => {

  })

const asyncF = async () => {
  try {
    const data = await promise
    console.log(data)
  }
  catch(error) {
    console.log(error)
  }
  finally {

  }
}

  function t() {
    try {
      const name = prompt('What is your name?').trim()
      if (!name) {
        throw new Error('Name is empty')
      }
      alert('Hello ' + name)
    }
    catch(error) {
      debugger
      alert('Inner catch')
    }
    finally {
      debugger
    }
  }

  try {
    //...
    t()
    //...
  }
  catch(error) {
    alert('Outer catch')
  }
*/
/*
  console.log('1')

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {//st3
      console.log('2')
      resolve(2)
    }, 1000)
  })

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {//st4
    console.log('3')
    reject(3)
  }, 0)
})

  console.log('4')

  Promise.resolve('Done')
    .then(() => {
      console.log('5')
    })

  Promise.reject('Error')

  Promise.all([promise1, promise2])
    .then((results) => {
      console.log('all done')
    })
    .catch(() => {
      console.log('Error')
    })

  Promise.allSettled([promise1, promise2])
    .then(results => {
      console.log(results)
    })
  
  Promise.race([promise1, promise2])
    .then((result) => {
      console.log('race result:', result)
      return Promise.reject('Err')
    })
    .then(() => {

    })
    .catch(err => {
      console.log('race error', err)
    })

  async function asyncTest() {
    const data = await someAsync()
    if (!data) {
      throw new Error()
    }
  }

  function test() {
    return someAsync()
      .then(data => {
        if (!data) {
          return Promise.reject(new Error())
        }
      })
  }

function loadSrc(src, callback, onError) {
  const script = document.createElement('script')
  script.src = src
  document.body.append(script)
  script.onload = () => callback()
  script.onerror = () => onError()
}

const onError = () => console.log('Cannot load script')
loadSrc('sc1.js', () => {
  loadSrc('sc2.js', () => {
    loadSrc('sc3.js', () => {
      sc1Func()
      sc2Func()
      sc3Func()
    }, onError)
  }, onError)
}, onError)

function loadSrcAsync(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    document.body.append(script)
    script.onload = () => resolve()
    script.onerror = () => reject()
  })
}

loadSrcAsync('sc1.js')
  .then(() => loadSrcAsync('sc2.js'))
  .then(() => loadSrcAsync('sc3.js'))
  .then(() => {
    sc1Func()
    sc2Func()
    sc3Func()
  })
  .catch(onError)
*/
  /*
  macro task1 load index.html, styles.css, index.js
    all microtasks
  macro task2 process css
  macro task3 run index.js: create timer, add st1 after 1sec, add st2 after 1sec, add st3 after 1sec
  macro task4 st4
    //1sec passed
  macro task5 st2
  macro task6 st3
    //9sec passed
  macro task7 st1
  
  */

/*
  додати на сторінку кілька кнопок. 
  рандомно вибрати одну. 
  запропонувати користувачеві вгадати, яка загадана. 
  по натисканню на кнопку, написати, чи це правильна відповідь. 
  якщо користувач довго нічого не натискає (наприклад більше 10 секунд), то закінчити гру.

  спитати, чи хоче користувач продовжити. якщо так, то заново вибрати кнопку і запропонувати вгадати її
*/

const buttonCount = 4
const timeout = 10000

for (let i = 1; i <= buttonCount; i++) {
  const btnEl = document.createElement('button')
  btnEl.textContent = i
  document.body.append(btnEl)
}

const buttonElements = [...document.querySelectorAll('button')]
function makeGame() {
  const correctAnswer = Math.floor(Math.random() * buttonCount + 1)
  const buttonPromises = buttonElements
    .map(btnEl => new Promise(resolve => {
      btnEl.onclick = () => resolve(+btnEl.textContent)
    }))

  buttonPromises.push(new Promise((_, reject) => {
    setTimeout(reject, timeout);
  }))

  Promise.race(buttonPromises)
    .then(answer => {
      if (answer === correctAnswer) {
        alert('You have guessed')
      }
      else {
        alert('You did not guess')
      }
    })
    .catch(() => {
      alert('You are slowpoke')
    })
    .finally(() => {
      if (confirm('Try again?')) {
        makeGame()
      }
      else {
        buttonElements.forEach(btnEl => btnEl.remove())
      }
    })
}

const planets = []
const people = []
function fetchData(url, list, setProgress, setCount) {
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      list.push(...result.results)
      if (setCount) {
        setCount(result.count)
      }
      setProgress()
      if (result.next) {
        return fetchData(result.next, list, setProgress)
      }
    })
}

const progressBarEl = document.createElement('div')
progressBarEl.classList.add('progress-bar')
progressBarEl.innerHTML = `<p>0% loaded</p><div class="progress-bar-status" style="width: 0px"></div>`
document.body.append(progressBarEl)

const planetContainerEl = document.createElement('div')
planetContainerEl.classList.add('planet-container')
document.body.append(planetContainerEl)

let planetsCount = 0
let peopleCount = 0

const setProgress = () => {
  const allCount = planetsCount + peopleCount
  const loadedCount = planets.length + people.length
  const loadedPercent = loadedCount / allCount * 100
  const [ labelEl, statusEl ] = progressBarEl.children
  labelEl.textContent = loadedPercent.toFixed(2) + '% loaded'
  statusEl.style.width = loadedPercent + '%'
  if (allCount === loadedCount) {
    setTimeout(() => {
      progressBarEl.style.display = 'none'
    }, 1000)
  }
}

fetchData('https://swapi.dev/api/planets', planets, setProgress, count => planetsCount = count)
  .then(() => { 
    planets.forEach(planet => {
      const planetEl = document.createElement('div')
      planetEl.classList.add('planet')
      planetEl.innerHTML = `
        <h3>${planet.name}</h3>
        <p>Info:</p>
        <p>Rotation period: ${planet.rotation_period} hours</p>
        <p>Orbital period: ${planet.orbital_period} days</p>
        <p>Diameter: ${planet.diameter} km</p>
        <p>Population: ${planet.population}</p>
      `
      planetContainerEl.append(planetEl)
    })
  })
  .catch(error => {
    alert('Error')
    console.log(error)
  })

fetchData('https://swapi.dev/api/people', people, setProgress, count => peopleCount = count)
  .then(() => {
    const planetElements = [...document.querySelectorAll('.planet')]
    planetElements.forEach((planetEl, index) => {
      const showPopulationBtn = document.createElement('button')
      showPopulationBtn.textContent = 'Show residents'
      showPopulationBtn.classList.add('show-people-btn')
      showPopulationBtn.onclick = () => {
        const planet = planets[index]
        const peopleNames = planet.residents.map(residentUrl => {
          return people.find(person => person.url === residentUrl).name
        })
        if (peopleNames.length) {
          alert('Here are the residents:\n' + peopleNames.join(',\n'))
        }
        else {
          alert('No available information about anybody')
        }
      }
      planetEl.append(showPopulationBtn)
    })
  })
  .catch(error => {
    alert('Error')
    console.log(error)
  })

  fetch('/planets')
    .then(response => response.json())
    .then(localPlanets => {
      console.log(localPlanets)
    })