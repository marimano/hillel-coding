//"use strict";
// g: undefined
g = 10
// g: 10
j = 20 // помилка

123 //числовий літерал
'123' // рядковий літерал
"123"; // рядковий літерал
`123 ${j} ${(123*456-71)}` // `123 20 56017`
true // булевий літерал
null
undefined

const h = null

'I\'m 100'

+'123' // 123
+'ierywiu' // NaN
+123 // 123
+true // 1
+false // 0
+null // 0
+undefined // NaN
-'123' // -123
-'kjhkj' // NaN
-123 // -123
-true // -1
-false // 0
-null // 0
-undefined // NaN

!'skdfhjkhf' // false
!123 // false

!true // false
!false // true

!null // true
!undefined // true

!!'fhksjhf' // true

Boolean('ksdkfh') // true
Number(true) // 1
String(false) // 'false'

12 + 3 // 15

'' + 10 // '10'
'tyru' + true // 'tyrutrue'
'u ' + null // ' null'

null + true // 1
+'wurtweuyr' + true // NaN

'tyru' - true // NaN

123*0 // 0

45 / 0 // Infinity
-123 / 0 // -Infinity

0 / 0 // NaN

true || false // true
true && false // false

true || false && true // true
(true || false) && true // true

/*djsfkjhf
dlfkdskfj
sdklkj

sfkldkjfhd*/

function a() {
  console.log('a')
  return true
}

function b() {
  console.log('b')
  return false
}

function c() {
  console.log('c')
  return true
}

a() || b() && c()

var myVar = 123

let sum = myVar + 78

let myVar2 = 456

myVar2 = 18 // помилка

myVar = 30 // помилки не буде

var g = 123
// g: 123

let i = 0;

// actions

i = i + 1
i += 1
i++
++i
// i: 4
const y = i++ // y: 4
// i: 5
const x = ++i // x: 5

--i // i = i - 1
i-- // i = i - 1

i = i * 5
i *= 5

i /= 10

const result = alert('Hello!')
console.log(result) // undefined

const input = +prompt('How old are you?')
console.log(input)

if (input) {
  // non zero number, non NaN
}

const yesOrNo = confirm('Так чи ні?')
console.log(yesOrNo)

if (yesOrNo) {
  alert('ви погодилися')
}
else {
  alert('ви не погодилися')
}

const appleCount = +prompt('How many apples?')

if (appleCount === 1) {
  alert('1 apple')
}
else if (appleCount > 1 || appleCount === 0) {
  alert(appleCount + ' apples')
}
else {
  alert('Error')
}

