const sketchZoneEl = document.querySelector('.sketch-zone');
const btnEl = document.querySelector('.btn');


const removeDiv = (choice) =>{
  const oldGrid = document.querySelectorAll('.grid');

  oldGrid.remove();
}


const createDivs = () => {


  for (i = 0; i < (10 * 10); i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    div.classList = 'grid';

    sketchZoneEl.appendChild(div);

   
      div.addEventListener('mouseover', function hover() {
        div.classList='hovered grid';
      })
    }
  

    btnEl.addEventListener('click', function userPrompt() {
      const choice = prompt('Please enter a number between 10 and 100 to determine the resolution of your etch a sketch');

      console.log(choice);

      removeDiv(choice)

    })

    


  }


window.onload = createDivs;

