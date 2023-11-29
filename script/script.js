const contentContainer = document.getElementById("contentWindow");
const submitInput = document.getElementById("submit-input");

// HTML Element selection
const selectedElement = document.getElementById('appendElement');

// width and height input
const elementWidth = document.getElementById("elementWidth");
const elementHeight = document.getElementById("elementHeight");

let maxWidth = contentContainer.getBoundingClientRect().width;
let maxHeight = contentContainer.getBoundingClientRect().height;
elementWidth.max = maxWidth;
elementHeight.max = maxHeight;

const selectWidthUnits = document.getElementById("select-width-units");
const selectHeightUnits = document.getElementById("select-height-units");

// Border Style input
const borderThickness = document.getElementById('borderThickness');
const borderStyle = document.getElementById('selectBorderStyle');
const borderColor = document.getElementById('borderColor');
const borderRadius = document.getElementById('borderRadius');
const borderRadiusUnits = document.getElementById('borderRadiusUnits');

// Padding and Margin input

const paddingTopBottom = document.getElementById('paddingTopBottom');
const paddingRightLeft = document.getElementById('paddingRightLeft');

const marginTopBottom = document.getElementById('marginTopBottom');
const marginRightLeft = document.getElementById('marginRightLeft');


// Shadow input
const boxShadowX = document.getElementById('boxShadowX');
const boxShadowY = document.getElementById('boxShadowY');
const boxShadowColor = document.getElementById('boxShadowColor');

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
  let element = document.createElement(`${selectedElement.value}`);

  // get and set element styles from the form 
  element.style.width = `${elementWidth.value}${selectWidthUnits.value}`;
  element.style.height = `${elementHeight.value}${selectHeightUnits.value}`;
  element.style.backgroundColor = `${elementBackgroundColor.value}`;
  element.style.color = `${fontColor.value}`;
  element.style.fontSize = `${fontSize.value}${fontUnits.value}`;
  element.style.border = `${borderThickness.value}px ${borderStyle.value} ${borderColor.value}`;
  element.style.borderRadius = `${borderRadius.value}${borderRadiusUnits.value}`;

  element.style.padding = `${paddingTopBottom.value}em ${paddingRightLeft.value}em`;
  element.style.margin = `${marginTopBottom.value}em ${marginRightLeft.value}em`;

  element.style.boxShadow = `${boxShadowX.value}px ${boxShadowY.value}px ${boxShadowColor.value}`;

  element.style.wordBreak = 'break-word';

  element.innerText = elementInnerText.value;
  contentContainer.appendChild(element);
});

const resetInput = document.getElementById('reset-input');

resetInput.addEventListener('click', () => {
  contentContainer.innerHTML = '';
});

// 
const btnSave = document.getElementById("btn-save");
const btnLoad = document.getElementById("btn-load");
const btnReset = document.getElementById("btn-rest")
const hideFormBtn = document.getElementById('hideForm');
const formContainer = document.getElementById('formContainer');

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
  window.location.reload();
});

hideFormBtn.addEventListener('click', () => {
  if (!formContainer.classList.contains('hide')) {
    formContainer.classList.add('hide');
    hideFormBtn.classList.add('moved');
    hideFormBtn.innerText = '▶';
    contentContainer.style.margin = '1em'
  } else {
    formContainer.classList.remove('hide');
    hideFormBtn.classList.remove('moved');
    hideFormBtn.innerText = '◀';
  }
});