let currentValue = ''

let workspace = document.getElementById('workSpace')
let clear_doc = document.getElementById('clear')
clear_doc.addEventListener('click', function() {
  clear()
})

let but_7 = document.getElementById('7')
but_7.addEventListener('click', function() {
  clickNumber('7')
})

let but_8 = document.getElementById('8')
but_8.addEventListener('click', function() {
  clickNumber('8')
})

let but_9 = document.getElementById('9')
but_9.addEventListener('click', function() {
  clickNumber('9')
})

let but_slash = document.getElementById('/')
but_slash.addEventListener('click', function() {
  clickDiv()
})

let but_6 = document.getElementById('6')
but_6.addEventListener('click', function() {
  clickNumber('6')
})

let but_5 = document.getElementById('5')
but_5.addEventListener('click', function() {
  clickNumber('5')
})

let but_4 = document.getElementById('4')
but_4.addEventListener('click', function() {
  clickNumber('4')
})

let but_X = document.getElementById('X')
but_X.addEventListener('click', function() {
  clickX()
})

let but_3 = document.getElementById('3')
but_3.addEventListener('click', function() {
  clickNumber('3')
})

let but_2 = document.getElementById('2')
but_2.addEventListener('click', function() {
  clickNumber('2')
})

let but_1 = document.getElementById('1')
but_1.addEventListener('click', but1 => {
  currentValue += but_1.id
  workspace.innerHTML = currentValue
})

let but_minus = document.getElementById('-')
but_minus.addEventListener('click', function() {
  clickMinus('5')
})

let but_0 = document.getElementById('0')
but_0.addEventListener('click', but0 => {
  currentValue += but_0.id
  workspace.innerHTML = currentValue
})

let but_dec = document.getElementById('.')
//but_dec.setAttribute('onclick', clickNumber("."));

let but_equal = document.getElementById('=')
but_equal.addEventListener('click', function() {
  clickEquals()
})

let but_plus = document.getElementById('+')
but_plus.addEventListener('click', function() {
  clickPlus()
})

function clear() {
  currentValue = ''
  workspace.innerHTML = currentValue
}

function clickNumber(numberEntered) {
  currentValue += numberEntered
  workspace.innerHTML = currentValue
}

function clickDiv() {
  currentValue += ' / '
  workspace.innerHTML = currentValue
}

function clickX() {
  currentValue += ' X '
  workspace.innerHTML = currentValue
}

function clickPlus() {
  currentValue += ' + '
  workspace.innerHTML = currentValue
}

function clickMinus() {
  currentValue += ' - '
  workspace.innerHTML = currentValue
}

function clickEquals() {
  let sidesOf = ['']
  let operatorArr = ['']
  for (let i = 0; i < currentValue.length; i++) {
    if (
      !(
        currentValue.charAt(i) === ' ' ||
        currentValue.charAt(i) === '/' ||
        currentValue.charAt(i) === 'X' ||
        currentValue.charAt(i) === '+' ||
        currentValue.charAt(i) === '-'
      )
    ) {
      sidesOf[sidesOf.length - 1] += +currentValue.charAt(i)
    } else if (currentValue.charAt(i) === ' ') {
    } else {
      sidesOf.push('')
      operatorArr.push(currentValue.charAt(i))
    }
  }
  let newValue = 0
  for (let i = 0; i < sidesOf.length; i++) {
    if (operatorArr[i] === '') {
      newValue = +sidesOf[i]
    } else if (operatorArr[i] === '/') {
      newValue = newValue / +sidesOf[i]
    } else if (operatorArr[i] === 'X') {
      newValue = newValue * +sidesOf[i]
    } else if (operatorArr[i] === '-') {
      newValue = newValue - +sidesOf[i]
    } else if (operatorArr[i] === '+') {
      newValue += +sidesOf[i]
    }
  }
  workspace.innerHTML = newValue
  currentValue = newValue
}
