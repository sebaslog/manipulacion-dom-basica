const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

//evento para escuchar click en botones:
btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInput = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInput;
}; 

//evento para formulario:
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    //Propiedad para prevenir que al hacer clicn en el boton de enviar ser recargue la pagina:
    event.preventDefault();
    const sumaInput = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInput;
}; 