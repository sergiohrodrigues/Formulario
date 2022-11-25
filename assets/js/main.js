let btnSubmit = document.querySelector('#btn');
let btns = document.querySelectorAll('.form__item')
let erroParag = document.querySelectorAll('#erroParag');

btnSubmit.addEventListener('click', verificarCampoInvalido)

function verificarCampoInvalido(){

    event.preventDefault();

    for(let i = 0; i < btns.length; i++){
        if(btns[i].value === ''){
            btns[i].classList.add('form__item-img');
            erroParag[i].style.display = 'Block';
        }else {
            btns[i].classList.remove('form__item-img');
            erroParag[i].style.display = 'none';
        }
    }
}
