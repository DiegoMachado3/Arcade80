const button = document.querySelector('.botao_venda1')
const button2 = document.querySelector('.botao_venda2')
const button3 = document.querySelector('.botao_venda3')

const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
      console.log('clicou!')
      popup.style.display = 'block'
})

button2.addEventListener('click', () => {
    console.log('clicou!')
    popup.style.display = 'block'
})

button3.addEventListener('click', () => {
    console.log('clicou!')
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const cliqueNoElemento = event.target.classList[0]
    console.log(cliqueNoElemento)
    const nomesClasses = ['popup-close', 'popup-wrapper', 'popup-link']
    const fecharPopup = nomesClasses.some(classe => classe === cliqueNoElemento) 

    if (fecharPopup) {
        popup.style.display = 'none'
    }
})