const sketchZoneEl = document.querySelector('.sketch-zone');



const createDivs = () => {

  for (i = 1; i < 4097; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    div.classList = 'grid';
    

    sketchZoneEl.appendChild(div);

   
      div.addEventListener('mouseover', function hover() {
        div.classList='hovered grid';

       
      })
    }


  }






window.onload = createDivs;

