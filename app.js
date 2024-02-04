//MANERA LARGA
//Título
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
//Párrafo
let parrafo = document.querySelector('p');
parrafo.innerHTML = ('Ingresa un número del 1 al 10');
//Función del botón "INTENTAR"
function intentoUsuario() {
    alert('click desde el botón');
}*/


//    ARREGLOS DE LISTA (ARRAY)
/* Crear una lista almacenada en una variable;
let lista = [];    */

/* Agregar elementos a la lista;
lista = [1,2,3,4,5];    */

/* Consultar los elementos de la lista en la consola;
console.log(lista);    */

/* Añadir un nuevo elemento al final de la lista;
lista.push(X);  (Dentro del paréntesis ingresa el elemento a añadir) */

/* Borrar un elemento del final de la lista;
lista.pop();    */   
/* Borrar el primer elemento de la lista;
lista.pop(0);    */
/* Borrar cierto elemento de la lista, conociendo su índice/posición;
lista.pop(X);

/* Para conocer la cantidad de elmentos que contiene la lista;
console.log(lista.length);    */

/* Para mostrar un elemento en particular de la lista, 
(el primer elemento tiene la posición 0) se usa;
console.log(lista[3]);    */

/* Para mostrar el valor del último elemento en la lista; 
console.log(lista[lista.length-1]);    */

let listaDeNumeroSorteado = [];
let numeroMaximo = 10;

//MANERA RESUMIDA para asignar texto a los elementos de HTML
// Creamos una función general en la cual podremos reutilizar 'n' veces.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);

//Función que genera número secreto
function generarNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;
    }
//Se guarda la función "generarNumeroSecreto" en una variable
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

//Añadimos la función al botón de INTENTAR
function intento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(`Usuario digitó: ${numeroDeUsuario}`);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos===1?"intento":"intentos"}`);
       
        //Habilitar el botón "Nuevo Juego"
         document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //Usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        wipeBox();
    }
    return;
}
//Función para limpiar la caja del Valor ingresado (valorUsuario)
function wipeBox() {
        document.querySelector('#valorUsuario').value = '';
}

//Función para no repetir los números generados aleatoriamente
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumeroSorteado);
//Si ya salieron todos los números aleatorios;
    if (listaDeNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {
    //Si el número generado está incluído en la lista
        if (listaDeNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaDeNumeroSorteado.push(numeroGenerado);
            return numeroGenerado
        }
    } 
}

//Función para generar las condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto')
    asignarTextoElemento('p',  `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    console.log(`Número secreto: ${numeroSecreto}`);
    intentos = 1;
}
//Reiniciando el juego:
function reiniciarJuego() {
    // 1.- limpiar la caja
    wipeBox();
    /* 2.- Indicar mensaje de solicitud de número
       3.- Generar número aleatorio
       4.- Reiniciar contador de intentos*/
    condicionesIniciales();
    // 5.- Deshabilitar el botón "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();