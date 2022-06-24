const mousevent = document.querySelector('.mousevent')
const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
mousevent.addEventListener('mousemove', (event) => {
    horizontal.innerHTML = event.x
    vertical.innerHTML = event.y
})

mousevent.addEventListener('click', () =>{
  btn.classList.toggle('.montrer');
  console.log('tout a fait');
})

//regarder : div, listes en html, span