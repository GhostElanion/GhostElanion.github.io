var a = 0
const mousevent = document.querySelector('.mousevent')
const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
mousevent.addEventListener('click', (event) => {
    horizontal.innerHTML = event.x
    vertical.innerHTML = event.y
})

mousevent.addEventListener('click', () =>{
  btn.classList.toggle('.montrer');
  console.log('tout a fait');
})

const click =( () =>{
  console.log('et la peut être ?');
})


const btn = document.querySelector('.btn')
const btnnum = document.querySelector('.btnnum')

btn.addEventListener('click', () =>{
  a++
  btnnum.innerHTML = a
  console.log('la c fait mdrrr');
})


//regarder : div, listes en html, span