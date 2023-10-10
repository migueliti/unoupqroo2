//paso 1 identificar el problema
//juego: Game uno
// 1. debe tener 108 cartas en total
//(x4)2. 0 a 9 normales
//3. 4 colores ( V,A,R,A)
//4. comodin +4 y cc
//(x4) 5. especiales, reversa, bloqueo y +2
//paso 2. identificar bcondiciones y/o normas
//1. max. 7 cartas x jugador 
//2. asignacion de cartas aleatoria
//3. no se puede ganar con 1 comodin
//4. si no dices 1, agarras 2/4 cartas
//5. max, 6 o 7 jugadores
//6. no se pueden acumular comodines
//7. si no tengo la carta tomo 1 hasta tenerla
//8. se reusan las ya puestas
//9. solo colocar cartas del mismo numero o color
const rl = require ("readline-sync");

//juego UNO
//define las 108 carta
var deck = [];
//define color 
var colors = ["amarillo", "blue", "green", "red"];
//define tipo de carta
var types = ["comun", "especial", "comodin"];
// define las cartas del 0 a 9
var card = {
  color: null, //amarillo, azul, verde y rojo.
  number: null, //0 al 9
  type: null,// comun, especial y comodin
};
for (var cColor = 0; cColor < colors.length; cColor++ ) {

 for (var cNumber = 0; cNumber < 10; cNumber++) {  
    deck.push({color: colors[cColor], number: cNumber, type: "comun"});
 }
 for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {   
    deck.push({color: colors[cColor], number: cNumber1, type: "comun"});

 }
 deck.push({color: colors[cColor], number: "+2", type: "especial"})
 deck.push({color: colors[cColor], number: "+2", type: "especial"})
 deck.push({color: colors[cColor], number: "b", type: "especial"})
 deck.push({color: colors[cColor], number: "b", type: "especial"})
 deck.push({color: colors[cColor], number: "r", type: "especial"})
 deck.push({color: colors[cColor], number: "r", type: "especial"})
}

deck.push({color: null, number: "+4", type: "especial"})
deck.push({color: null, number: "+4", type: "especial"})
deck.push({color: null, number: "+4", type: "especial"})
deck.push({color: null, number: "+4", type: "especial"})
deck.push({color: null, number: "cc", type: "especial"})
deck.push({color: null, number: "cc", type: "especial"})
deck.push({color: null, number: "cc", type: "especial"})
deck.push({color: null, number: "cc", type: "especial"})

console.log(deck);
//pregunta cuantos jugadores seran
const players = rl.question("cuantos jugadores seran?", {})
// imprimo el const players
console.log(players)
//npm intil sirve para inicializar un proyecto de node