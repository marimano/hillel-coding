'use strict';

/*const x = +prompt('Enter x')
const y = +prompt('Enter y')
const z = +prompt('Enter z')
const t = +prompt('Enter t')
const k = +prompt('Enter k')

// x*y + z*t, xє(0;1), yє(5;10), zє(-oo;oo), tє(-5;5)

if (!isNaN(x) && 0 < x && x < 1 && 
  !isNaN(y) && 5 < y && y < 10 &&
  !isNaN(z) &&
  !isNaN(t) && -5 < t && t < 5 &&
  !isNaN(k) && 10 < k && k < 20
) {
  const result = x * y + z * t + k
  alert('x * y + z = ' + result)
}
else {
  alert('Error')
}

if (!isNaN(x) && 0 < x && x < 1) {
  if (!isNaN(y) && 5 < y && y < 10) {
    if (!isNaN(z)) {
      if (!isNaN(t) && -5 < t && t < 5) {
        if (!isNaN(k) && 10 < k && k < 20) {
          const result = x * y + z * t
          alert('x * y + z = ' + result)
        }
        else {
          alert('Invalid k')
        }
      }
      else {
        alert('Invalid t')
      }
    }
    else {
      alert('Invalid z')
    }
  }
  else {
    alert('Invalid y')
  }
}
else {
  alert('Invalid x')
}


function getNumber(name, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  const num = +prompt('Enter ' + name)
  if (isNaN(num)) {
    alert('Invalid ' + name)
    return
  }

  if (num <= min) {
    console.log('Set to min')
    return min
  }

  if (num >= max) {
    console.log('Set to max')
    return max
  }
  
  return num
}

{
  const x = getNumber('x', 0, 1)
  const y = getNumber('y', 5, 10)
  const z = getNumber('z')
  const t = getNumber('t', -5, 5)
  const k = getNumber('k', 10, 20)

  if (x !== undefined && y !== undefined && z !== undefined && t !== undefined && k !== undefined) {
    const result = x * y + z * t + k
    alert('x * y + z = ' + result)
  }
}*/

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

const base = prompt('Enter base') || ''
const degree = prompt('Enter degree')

if (!isValid(base, degree)) {
  alert('Error')
}
else {
  const result = pow(+base, +degree)
  alert('base^degree = ' + result)
}

const lis = [...document.querySelectorAll('li')]
function onClick(event) {
  alert('First')
}

lis.forEach(li => li.addEventListener('click', onClick))

//lis.forEach(li => li.removeEventListener('click', onClick))