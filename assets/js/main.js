let btnSubmit = document.querySelector('#btn');
let inputs = document.querySelectorAll('#input')
let erroParag = document.querySelectorAll('#erroParag');
const sucess = document.querySelector("#sucess")

btnSubmit.addEventListener('click', verificarCamposInvalido)

function verificarCamposInvalido(evento){
    evento.preventDefault()
    const arrayInputs = Array.from(inputs)

    const todosInputs = arrayInputs.filter((item) => {
        if(item.value !== ''){
            return true
        } else {
            return false
        }
    })

    if(todosInputs.length === inputs.length){
        aplicarMensagemDeErro(evento)
    }
     else {
        for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('form__item-img');
                erroParag[i].style.display = 'Block';
                inputs[i].value = ''
            }
    }
}

function aplicarMensagemDeErro(evento) {
    evento.preventDefault()
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== '') {
            inputs[i].classList.remove('form__item-img');
            erroParag[i].style.display = 'none';
            inputs[i].value = ""
            sucess.style.display = "block"
            setTimeout(sucesso, 3000)
        } else {
            inputs[i].classList.add('form__item-img');
            erroParag[i].style.display = 'Block';
        }
    }
}

function sucesso(){
    sucess.style.display = "none"
}

inputs.forEach((inpt) => {
    inpt.addEventListener("input", (evento) => {   
        if(inpt.value.length > 5){
            evento.srcElement.nextElementSibling.style.display = 'none'
            inpt.classList.remove('form__item-img')
        }
    })
})
