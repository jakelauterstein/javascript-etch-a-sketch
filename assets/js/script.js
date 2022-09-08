let color = 'black';
let click = false;

let blackBtn = document.querySelector('.black-btn');
let whiteBtn = document.querySelector('.white-btn');
let eraserBtn = document.querySelector('.eraser-btn');
let randomBtn = document.querySelector('.random-btn');


function populateBoard (size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


  let amount = size * size;
  for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    board.style.backgroundColor = '#B4B4B1';
    board.appendChild(square)
  }

}

populateBoard(16);

function changeSize(input) {
  if (input >=2 || input <= 100) {
    populateBoard(input); 
  } else {
    alert('Please enter a number between 2 and 100')
  }

}

function colorSquare() {
    if(click) {
      if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
      } else {
        this.style.backgroundColor = color;
      }

    }
    
  }

function changeColor(choice) {
  color = choice;

  if (color === 'black') {
    blackBtn.classList = 'selected'
    whiteBtn.classList.remove("selected");
    eraserBtn.classList.remove("selected");
    randomBtn.classList.remove("selected");
  } else if (color === 'white') {
    whiteBtn.classList = 'selected'
    blackBtn.classList.remove("selected");
    eraserBtn.classList.remove("selected");
    randomBtn.classList.remove("selected");
  } else if (color=== '#B4B4B1'){
    eraserBtn.classList = 'selected'
    whiteBtn.classList.remove("selected");
    blackBtn.classList.remove("selected");
    randomBtn.classList.remove("selected");
  } else if (color === 'random') {
    randomBtn.classList = 'selected'
    whiteBtn.classList.remove("selected");
    eraserBtn.classList.remove("selected");
    blackBtn.classList.remove("selected");
  } else {
    console.log('we good');
  }

}



function removeColor() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = '#B4B4B1' );
}

document.querySelector('body').addEventListener('mousedown', () =>{
  click = !click;

})
document.querySelector('body').addEventListener('mouseup', () =>{
  click = !click;

})

document.querySelector('body').addEventListener('touchstart', () =>{
  click = !click;

})
document.querySelector('body').addEventListener('touchend', () =>{
  click = !click;

})

function unselect () {
  randomBtn.classList.remove('selected');
    whiteBtn.classList.remove("selected");
    eraserBtn.classList.remove("selected");
    blackBtn.classList.remove("selected");
}




// ============  BEGIN SWATCHY COLOR PICKER CODE ==================

let hasSwatchyRun = false;

/**
 *
 * @param {Boolean} [autoClose=false] - Should the color picker close after selecting a color?
 * @param {Array} [swatches] - Custom color swatches to use. Enter an array of hex codes
 * @constructor
 */
function Swatchy(
    autoClose=true,
    swatches=[
        "#B71C1C", "#D32F2F", "#F44336", "#E57373", "#FFCDD2",
        "#880E4F", "#C2185B", "#E91E63", "#F06292", "#F8BBD0",
        "#4A148C", "#7B1FA2", "#9C27B0", "#BA68C8", "#E1BEE7",
        "#311B92", "#512DA8", "#673AB7", "#9575CD", "#D1C4E9",
        "#1A237E", "#303F9F", "#3F51B5", "#7986CB", "#C5CAE9",
        "#0D47A1", "#1976D2", "#2196F3", "#64B5F6", "#BBDEFB",
        "#01579B", "#0288D1", "#03A9F4", "#4FC3F7", "#B3E5FC",
        "#006064", "#0097A7", "#00BCD4", "#4DD0E1", "#B2EBF2",
        "#004D40", "#00796B", "#009688", "#4DB6AC", "#B2DFDB",
        "#194D33", "#388E3C", "#4CAF50", "#81C784", "#C8E6C9",
        "#33691E", "#689F38", "#8BC34A", "#AED581", "#DCEDC8",
        "#827717", "#AFB42B", "#CDDC39", "#DCE775", "#F0F4C3",
        "#F57F17", "#FBC02D", "#FFEB3B", "#FFF176", "#FFF9C4",
        "#FF6F00", "#FFA000", "#FFC107", "#FFD54F", "#FFECB3",
        "#E65100", "#F57C00", "#FF9800", "#FFB74D", "#FFE0B2",
        "#BF360C", "#E64A19", "#FF5722", "#FF8A65", "#FFCCBC",
        "#3E2723", "#5D4037", "#795548", "#A1887F", "#D7CCC8",
        "#263238", "#455A64", "#607D8B", "#90A4AE", "#CFD8DC",
        "#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF",
    ]
) {

    if (!hasSwatchyRun) {
        hasSwatchyRun = true;
        let swatchyCount = document.querySelectorAll('.swatchy-trigger');

        for (let id = 0; id < swatchyCount.length; id++) {

            let output
            let container

            // swatches = props?.swatches ?? this.swatches

            document.querySelectorAll('.swatchy-trigger').item(id)
            document.querySelectorAll('.swatchy-trigger').item(id).addEventListener('click', togglePopup)
            output = document.querySelectorAll('.swatchy-output').item(id)

            // create popup element
            container = document.createElement("div")
            container.classList.add('swatchy-element')
            container.setAttribute('style', 'display: none;')
            output.after(container)

            // add swatches to popup
            let swatchContainer = document.createElement('div')
            swatchContainer.classList.add('swatchy-swatches')
            container.appendChild(swatchContainer)

            let swatchCount = -1;
            for (const swatch of swatches) {
                swatchCount++;
                if ((swatchCount % 5 === 0) && (swatchCount % 10 !== 0)) {
                    let gap = document.createElement('div')
                    swatchContainer.appendChild(gap)
                }
                let colorButton = document.createElement('div')
                colorButton.setAttribute('data-swatchy-color', swatch)
                colorButton.style.backgroundColor = swatch
                colorButton.classList.add('swatchy-color-button')
                colorButton.addEventListener('click', selectColor)
                swatchContainer.appendChild(colorButton)

            }

            function selectColor(e) {
                let input = document.querySelectorAll('.swatchy-output').item(id)
                let newColor = e.target.getAttribute('data-swatchy-color')
                changeColor(newColor);
                input.setAttribute('value', newColor)
                input.setAttribute('data-swatchy-color', newColor)
                input.setAttribute('style', 'background-color: ' + newColor + '; color: ' + newColor + ';')
                if (autoClose) {
                    togglePopup()
                }
            }

            function togglePopup() {
                let el = document.querySelectorAll('.swatchy-element').item(id)

                let display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display
                if ('none' === display) {
                    el.style.display = 'block'
                } else {
                    el.style.display = 'none'
                }
            }
        }
    } else {
        console.info('You only need to call swatchy once per page');
    }
}
























// const sketchZoneEl = document.querySelector('.sketch-zone');
// const btnEl = document.querySelector('.btn');


// const removeDiv = (choice) =>{
//   const oldGrid = document.querySelectorAll('.grid');

//   oldGrid.remove();
// }


// const createDivs = () => {


//   for (i = 0; i < (10 * 10); i++) {
//     const div = document.createElement('div');
//     div.setAttribute('id', i);
//     div.classList = 'grid';

//     sketchZoneEl.appendChild(div);

   
//       div.addEventListener('mouseover', function hover() {
//         div.classList='hovered grid';
//       })
//     }
  

//     btnEl.addEventListener('click', function userPrompt() {
//       const choice = prompt('Please enter a number between 10 and 100 to determine the resolution of your etch a sketch');

//       console.log(choice);

//       removeDiv(choice)

//     })

    


//   }


// window.onload = createDivs;

