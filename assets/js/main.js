let btnSubmit = document.querySelector('#btn');
let btns = document.querySelectorAll('.form__item')
let erroParag = document.querySelectorAll('#erroParag');
const sucess = document.querySelector("#sucess")

btnSubmit.addEventListener('click', verificarCampoInvalido)

function verificarCampoInvalido(event) {
    event.preventDefault();

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].value !== '') {
            btns[i].classList.remove('form__item-img');
            erroParag[i].style.display = 'none';
            sucess.style.display = "block"
            btns[i].value = ""
        } else {
            btns[i].classList.add('form__item-img');
            erroParag[i].style.display = 'Block';
        }
    }
}

btns.forEach((inpt) => {
    inpt.addEventListener("blur", () => {   
        for (let i = 0; i < erroParag.length; i++) {
            inpt.classList.remove('form__item-img')
            erroParag[i].style.display = "none"
        }
    })
})