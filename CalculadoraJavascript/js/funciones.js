let arrayNumeros=[];

function mostrarValorEnInput(valor){
    if (document.querySelector('input').value==0){
        document.querySelector('input').value=valor;
    }else{
        document.querySelector('input').value+=valor;
    }

}

document.querySelectorAll('.botonOperacion').forEach(function(boton){
    const operacionesAceptadas = ['+','-','*','/'];
    if (operacionesAceptadas.includes(boton.innerText)){
        boton.addEventListener('click',function (){
            arrayNumeros.push(document.querySelector('input').value);
            document.querySelector('input').value+=boton.innerText;
        });
    }else{
        console.log("Al botón "+boton.innerText+" no se le escucha");
    }

})

function suma(){
    const denominador=parseInt(arrayNumeros.pop());
    const numerador=parseInt(arrayNumeros.pop());
    const totalSuma=numerador+denominador;
    document.querySelector('input').value=totalSuma;
    arrayNumeros=[];
    arrayNumeros.push(totalSuma);
}
function resta(){
    const denominador=parseInt(arrayNumeros.pop());

    const numerador=parseInt(arrayNumeros.pop());
    const totalResta=numerador-denominador;
    document.querySelector('input').value=totalResta;
    arrayNumeros=[];
    arrayNumeros.push(totalResta);
}
function multiplicacion(){
    const denominador=parseInt(arrayNumeros.pop());
    const numerador=parseInt(arrayNumeros.pop());
    const totalMultiplicacion=numerador*denominador;
    document.querySelector('input').value=totalMultiplicacion;
    arrayNumeros=[];
    arrayNumeros.push(totalMultiplicacion);
}
function division(){
    const denominador=parseInt(arrayNumeros.pop());
    if(denominador==0){
        document.querySelector('input').value='Errr';
    }else{
        const numerador=parseInt(arrayNumeros.pop());
        const totalSuma=numerador*denominador;
        document.querySelector('input').value=totalSuma;
        arrayNumeros=[];
        arrayNumeros.push(totalSuma);
    }
}

function borrarInput(){
    document.querySelector('input').value=0;
}

function total(){

    const pantalla = Array.from(document.querySelector('input').value);

    if (pantalla.includes('+')){
        segundoNumero=document.querySelector('input').value.split('+')[1];
        arrayNumeros.push(segundoNumero);
        suma();
    }else if(pantalla.includes('-')){
        segundoNumero=document.querySelector('input').value.split('-')[1];
        arrayNumeros.push(segundoNumero);
        resta();
    }else if (pantalla.includes('*')){
        segundoNumero=document.querySelector('input').value.split('*')[1];
        arrayNumeros.push(segundoNumero);
        multiplicacion();
    }else if (pantalla.includes('/')){
        segundoNumero=document.querySelector('input').value.split('/')[1];
        arrayNumeros.push(segundoNumero);
        division();
    }
}