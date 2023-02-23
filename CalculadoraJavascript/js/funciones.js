let arrayNumeros=[];
let acumulador=0;

document.querySelector('.primeraFila:first-child').addEventListener('dblclick', function(){
    acumulador=0;
    arrayNumeros=[];
});

function acumular(){
    acumulador+=parseInt(document.querySelector('input').value);
    document.querySelector('input').value='0';
}

function resultadoAcumulardor(){
    document.querySelector('input').value=acumulador.toString();
}

function mostrarValorEnInput(valor){
    if (document.querySelector('input').value==='0'){
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
    if(denominador===0){
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
    let pantalla= document.querySelector('input').value;
    //Encontramos donde se situa el operador
    let pos_operador=pantalla.indexOf(obtenerOperador(pantalla));
    console.log(pos_operador);
    if (pos_operador>0){
        document.querySelector('input').value=pantalla.slice(0,pos_operador);
    }
    else{
        console.log('Ha borrado');
        document.querySelector('input').value='0';
    }
}

function obtenerOperador(cadena){
    if(cadena.includes('+')){
        return '+';
    }
    if (cadena.includes('-')){
        return '-';
    }
    if (cadena.includes('*')){
        return '*';
    }
    if (cadena.includes('/')){
        return '/';
    }
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