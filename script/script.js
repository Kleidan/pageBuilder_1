const contentContainer = document.getElementById("contentWindow");

const submitInput = document.getElementById("submit-input");

// width and height input
const elementWidth = document.getElementById("elementWidth");
const elementHeight = document.getElementById("elementHeight");

let maxWidth = contentContainer.offsetWidth;
let maxHeight = contentContainer.offsetHeight;
elementWidth.max = maxWidth;
elementHeight.max = maxHeight;

const selectWidthUnits = document.getElementById("select-width-units");
const selectHeightUnits = document.getElementById("select-height-units");

// Element Color
const elementBackgroundColor = document.getElementById("elementBackgroundColor");

// Font Color
const fontColor = document.getElementById("elementFontColor");

// Font Size
const fontSize = document.getElementById("fontSize");
const fontUnits = document.getElementById("select-font-units");

// Inner Text
const elementInnerText = document.getElementById("elementInnerText");


// Form Event Listener

const myForm = document.getElementById("myForm");

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // create an element
  let element = document.createElement("div");

  // get and set element styles from the form 
  element.style.width = `${elementWidth.value}${selectWidthUnits.value}`;
  element.style.height = `${elementHeight.value}${selectHeightUnits.value}`;
  element.style.backgroundColor = `${elementBackgroundColor.value}`;
  element.style.color = `${fontColor.value}`;
  element.style.fontSize = `${fontSize.value}${fontUnits.value}`;
  element.innerText = elementInnerText.value;

  // append to container
  contentContainer.appendChild(element);
});

const btnSave = document.getElementById("btn-save");
const btnLoad = document.getElementById("btn-load");
const btnReset = document.getElementById("btn-rest")


btnSave.addEventListener('click', () => {
  localStorage.setItem('elements', contentContainer.outerHTML);
  console.log(contentContainer.outerHTML);
});

btnLoad.addEventListener('click', () => {
  if (localStorage.getItem('elements') !== '') {
    const item = localStorage.getItem('elements');
    contentContainer.outerHTML = item;
  } else {
    alert('There is nothing in the memory');
  }
});

btnReset.addEventListener('click', () => {
  localStorage.setItem('elements', '');
  window.location.reload;
});