//Variables
let numeroMaximo = 0;
let numeroSecreto = 0; 
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 0;
//let palabraVeces = 'vez';
// seleccion de numero de intentos
maximosIntentos = parseInt(prompt("me Indicas el numero maximo de intentos Para jugar a adivinar"));
// prompt para poder seleccionar numero entre 1 y n de juego
numeroMaximo = parseInt(prompt("Me indicas desde 1 hasta que numero quieres intentar adivinar"));

numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

while(numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximo} por favor:`));

    //console.log(typeof(numeroUsuario))
    //console.log('Numero de usuario:',numeroUsuario);

    /*este codigo realiza 
    la comparación
    */
    //console.log('Resultado de la comparación:',numeroUsuario==numeroSecreto)

    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==  1 ? 'vez' : 'veces' }`);
    
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor')
        } else{
            alert('el número secreto es mayor')
        }
        // incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++;
        //palabraVeces = 'veces';
        if(intentos == maximosIntentos){

            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.El numero secreto era ${numeroSecreto}`);
            break;
        }
        
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    } 
}