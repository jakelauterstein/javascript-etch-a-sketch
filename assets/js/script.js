let color = 'black';
let click = false;

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

  color='black';
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

