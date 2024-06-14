const inputBox = document.getElementById("input-box");
const homeIcon = document.getElementById("house-icon");
const saveIcon = document.getElementById("save-icon");
const upperIcon = document.getElementById("upper-icon");
const lowerIcon = document.getElementById("lower-icon");
const fontIcon = document.getElementById("font-icon");
const boldIcon = document.getElementById("bold-icon");
const savedFiles = document.getElementById("saved-file");
const main = document.getElementById('main')
const start = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const loginDiv = document.getElementById("login-div");
const loginInput = document.getElementById("login-input");
const loginBtn = document.getElementById("login-btn");
const loginPage = document.getElementById("login-page");
const loginName = document.getElementById("login-name");
const minusUser = document.getElementById("minus-user");
const navbar = document.getElementById("navbar");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getLoginInput() {
  const loginInputVal = loginInput.value
  loginName.innerText = loginInputVal
}

loginBtn.onclick = () => {
  if (loginInput.value == '') {
    alert('You must give your name')
  } else {
    getLoginInput()
    minusUser.style.display = 'none'
    const newI = document.createElement('i')
    newI.classList.add("fa-solid", "fa-user")
    navbar.appendChild(newI)
  }
}

startBtn.onclick = () => {
  if (loginInput.value == '') {
    alert('You must give your name')
  } else {
    getLoginInput()
    main.style.display = 'block'
    loginPage.style.display = 'none'
  }
}

function savingFile() {
  let div = document.createElement('div')
  div.style.display = 'flex'
  div.style.justifyContent = 'space-between'
  let p = document.createElement('p');
  p.innerHTML = inputBox.value
  let copyIcon = document.createElement('i')
  copyIcon.innerHTML = `<i class="fa-solid fa-copy"></i>`
  div.appendChild(p)
  div.appendChild(copyIcon)
  savedFiles.appendChild(div)
  copyIcon.onclick = () => {
    if (confirm('Are you sure you want to change your Text?')) {
      inputBox.value = p.innerText
    } else {
      console.log('You did not save your file');
    }
  }
}

const fontArray = [
  '"Tiny5", sans-serif', '"Roboto Mono", monospace', '"Cactus Classical Serif", serif',
  '"LXGW WenKai TC", cursive', '"Lato", sans-serif', '"Oswald", sans-serif', '"Roboto Mono", monospace'
]

function fontFunc() {
  const num = Math.floor(Math.random() * fontArray.length)
  const getFont = fontArray[num]
  inputBox.style.fontFamily = getFont
}

fontIcon.onclick = () => {
  fontFunc()
}

saveIcon.onclick = () => {
  savingFile()
  alert('Your file has been saved')
}

function boldInput() {
  inputBox.style.fontWeight = 'bold'
}

boldIcon.onclick = () => {
  if (inputBox.style.fontWeight != 'bold') {
    boldInput()
  } else {
    inputBox.style.fontWeight = '400'
  }
}

function upperClick() {
  inputBox.value = inputBox.value.toUpperCase()
}

upperIcon.onclick = () => {
  upperClick()
}

function lowerClick() {
  inputBox.value = inputBox.value.toLowerCase()
}

lowerIcon.onclick = () => {
  lowerClick()
}

homeIcon.onclick = () => {
  inputBox.value = ''
}

const input_serialized = JSON.stringify(inputBox.value)
console.log(input_serialized)
localStorage.setItem("data", input_serialized)
console.log(localStorage)

let input_deserialized = JSON.parse(localStorage.getItem("data"))
console.log(input_deserialized)
