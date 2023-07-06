'use strict';

window.addEventListener('error', (event) => {
  console.log('Ooops', event)
})

function isValid(base, degree) {
  return !isNaN(base) && !isNaN(degree) && Number.isInteger(+degree)
}

function pow(base, degree) {
  if (degree < 0) {
    return 1 / pow(base, -degree)
  }

  if (degree === 0) {
    return 1
  }

  return base * pow(base, degree - 1)  
}

/*const base = prompt('Enter base') || ''
const degree = prompt('Enter degree')

if (!isValid(base, degree)) {
  alert('Error')
}
else {
  const result = pow(+base, +degree)
  alert('base^degree = ' + result)
}*/

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

const createDropdown = (function() {
  function createEmptyDD() {
    const dd = document.createElement('div')
    dd.classList.add('custom-dd')
    dd.innerHTML = `<div class="current-element">
        <span class="current-element-value"></span>
        <button>\/</button>
      </div>
      <ul class="list">
      </ul>`
    return dd
  }
  
  function initDD(dd, setCurrentItemIndex) {
    const list = dd.querySelector('.list')
  
    const currentElementBox = dd.querySelector('.current-element')
    currentElementBox.addEventListener('click', () => {
      list.classList.toggle('open')
    })
  
  
    window.addEventListener('click', event => {
      if (!currentElementBox.contains(event.target)) {
        list.classList.remove('open')
      }
    })
  
    const currentElement = dd.querySelector('.current-element-value')
    list.addEventListener('click', event => {
      if (event.target.nodeName === 'LI') {
        currentElement.innerText = event.target.innerText
        setCurrentItemIndex(+event.target.dataset.index)
      }
    })
  }
  
  function fillItems(categories, items, dd, currentItemIndex, onItemElementCreated, isEmptyCategoriesShown) {
    const list = dd.querySelector('.list')
    categories.forEach(category => {
      const categoryItems = items.filter(item => item.category === category)
      if (categoryItems.length || isEmptyCategoriesShown) {
        const categoryEl = document.createElement('div')
        categoryEl.innerText = category
        list.append(categoryEl)
      }

      categoryItems.forEach((item, index) => {
        const li = document.createElement('li')
        li.innerText = item.name
        li.dataset.index = index
        onItemElementCreated(li, index)
        list.append(li)
      })
    })
    
  
    const currentElement = dd.querySelector('.current-element-value')
    currentElement.innerText = items[currentItemIndex].name
  } 
  
  return function createDropdown(categories, items, parentElement, onItemElementCreated, isEmptyCategoriesShown) {
    let currentItemIndex = 0
    const dd = createEmptyDD()
    parentElement.append(dd)
  
    initDD(dd, newIndex => currentItemIndex = newIndex)
    fillItems(categories, items, dd, currentItemIndex, onItemElementCreated, isEmptyCategoriesShown)
  }
})()

createDropdown(categories, items, document.body, decorateElement, false)

function decorateElement(element, index) {
  if (index === 3) {
    element.classList.add('third-element')
  }
}

const purchasings = []

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

  if (purchasings.some(p => p.name === name)) {
    errorElement.innerText = 'Such purchasing is already added'
    return
  }

  if (amount < 1 || amount > 1000000) {
    errorElement.innerText = 'Amount should be within 1 and 1000000'
    return
  }

  errorElement.innerText = ''
  addPurchasing(name, amount)
}

function addPurchasing(name, amount) {
  purchasings.push({
    name,
    amount
  })
  const shoppingListEl = document.querySelector('.shopping-list')
  const pElement = document.createElement('li')
  pElement.innerHTML = `<span>${name}: ${amount}</span><button>X</button>`
  pElement.querySelector('button').onclick = () => {
    const msg = 'Are you sure you want to delete ' + name + ' from the list?'
    document.querySelector('.modal-dialog-text').innerText = msg
    document.querySelector('.modal-bg').style.display = ''

    document.querySelector('.yes-btn').onclick = () => {
      const itemIndexToDelete = purchasings.findIndex(p => p.name === name)
      purchasings.splice(itemIndexToDelete, 1)
      shoppingListEl.children[itemIndexToDelete].remove()

      document.querySelector('.modal-bg').style.display = 'none'
    }    
  }
  shoppingListEl.append(pElement)
}

document.querySelector('.no-btn').onclick = () => {
  document.querySelector('.modal-bg').style.display = 'none'
}

document.querySelector('.modal-bg').onclick = event => {
  if (event.target.classList.contains('modal-bg')) {
    event.target.style.display = 'none'
  }
}

function showInfo() {
  alert('User info: ' + this.name + ', ' + this.age)
}

const obj = {
  name: 'Joe',
  age: 20,
  showInfo,
  get info() {
    return this.name + ', ' + this.age + (this.additionalInfo ? ` (${this.additionalInfo})` : '')
  },
  set info(value) {
    if (value?.length > 5) {
      this.additionalInfo = value
    }
  }
}

console.log(obj.info) // Joe, 20

obj.info = '123' // error
console.log(obj.info) // Joe, 20
obj.info = 'cool guy'
console.log(obj.info) // Joe, 20 (cool guy)

const obj2 = {
  name: 'Jane',
  age: 25,
  showInfo
}

const obj3 = {
  name: 'Joe',
  age: 20,
  showInfo
}

const baseObj = {
  showInfo
}
const objWithProto = Object.create(baseObj)
objWithProto.name = 'Proto'
objWithProto.age = 30

function User(name, age, surname) {
  this.name = name
  this.surname = surname
  this.age = age
  User.count++;
}

//User.prototype = Object.create(User.prototype)
User.prototype.showInfo = function () {
  alert('User info: ' + this.getInfo())
}
User.prototype.getInfo = function() {
  return this.name + ' ' + this.surname + ', ' + this.age
}
Object.defineProperty(User.prototype, 'info', {
  get: function() {
    return this.name + ', ' + this.age + (this.additionalInfo ? ` (${this.additionalInfo})` : '')
  },
  set: function(value) {
    if (value?.length > 5) {
      this.additionalInfo = value
    }
  }
});
User.count = 0

function AdminUser(name, age, surname, permissions) {
  User.call(this, name, age, surname)
  this.permissions = permissions
}

AdminUser.prototype = Object.create(User.prototype)
AdminUser.prototype.accessRoot = function() {
  // access secret data
}

function GuestUser(name, age, surname, lastVisit) {
  User.call(this, name, age, surname)
  this.lastVisit = lastVisit
}

GuestUser.prototype = Object.create(User.prototype)
GuestUser.prototype.upgradeToUser = function() {
  // upgrade
}

function ConsoleUser(name, age, surname) {
  User.call(this, name, age, surname)
}

ConsoleUser.prototype = Object.create(User.prototype)
ConsoleUser.prototype.showInfo = function () {
  console.log('User info: ' + this.getInfo())
}

const user1 = new User('User', 40)
user1.age = 45

const admin = new AdminUser('Tim', 50)
const guest = new GuestUser('Incognito', 25)
const consoleUser = new ConsoleUser('Dig', 70, 'Cool')

const users = [user1, admin, guest, consoleUser]
console.log('There are ' + User.count + ' users')


class NewUser {
  static count = 0
  constructor(name, age, surname) {
    this.name = name
    this.age = age
    this.surname = surname
    NewUser.count++
  }

  showInfo() {
    alert('User info: ' + this.getInfo())
  }

  getInfo() {
    return this.name + ' ' + this.surname + ', ' + this.age
  }

  get info() {
    return this.name + ', ' + this.age + (this.additionalInfo ? ` (${this.additionalInfo})` : '')
  }

  set info(value) {
    if (value?.length > 5) {
      this.additionalInfo = value
    }
  }
}

class NewAdminUser extends NewUser {
  constructor(name, age, surname, permissions) {
    super(name, age, surname)
    this.permissions = permissions
  }

  accessRoot() {
    // access secret data
  }
}

class NewGuestUser extends NewUser {
  constructor(name, age, surname, lastVisit) {
    super(name, age, surname)
    this.lastVisit = lastVisit
  }

  upgradeToUser() {
    // upgrade
  }
}

class NewConsoleUser extends NewUser {
  showInfo() {
    console.log('User info: ' + this.getInfo())
  }
}

const newuser1 = new NewUser('User', 40)

const newadmin = new NewAdminUser('Tim', 50)
const newguest = new NewGuestUser('Incognito', 25)
const newconsoleUser = new NewConsoleUser('Dig', 70, 'Cool')
console.log('There are ' + NewUser.count + ' users')




