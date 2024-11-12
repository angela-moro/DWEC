// Ejercicio 1: Calculadora Básica (nivel principiante)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;
let operando;

// rl.question('Introduce el primer número: ', (n1) => {
    
//     let num1 = parseInt(n1);

//     rl.question('Introduce el segundo número: ', (n2) => {

//         let num2 = parseInt(n2);

//         rl.question('Operacion a realizar: +, -, *, /: ', (op) => {
            
//             let resultado;
//             operando = op;

//             switch(operando){
//                 case '+':
//                     resultado = num1 + num2;
//                     break;
//                 case '-':
//                     resultado = num1 - num2;
//                     break;
//                 case '*':
//                     resultado = num1 * num2;
//                     break;
//                 case '/':
//                     resultado = num1 / num2;
//                     break;
//                 }
//             console.log(`El resultado es : ${resultado}`);
//             rl.close();
            
//         });
//     });
// });


// Ejercicio 2: Adivina el Número (nivel intermedio)

// let aleat = Math.floor(Math.random()*2); //genera dos numeros entre 0 y 1
// console.log(`${aleat}`);
// rl.question('Introduce el número: ', (n1) => {let num1 = parseInt(n1)
    

//     if (num1 > aleat){
//         console.log(`El número introducido es mayor`);
            
//     } else if (num1 < aleat){
//         console.log(`El número introducido es menor`);
//     } else {
//         console.log(`¡Has acertado!`);
//     }
//      rl.close();   
// });


// Ejercicio 3: FizzBuzz Personalizado (nivel avanzado)

let max;
let div1;
let div2;

rl.question('Introduce el maximo: ', (m) => {
    
        let max = parseInt(m);
    
        rl.question('Introduce el primer divisor: ', (d1) => {
    
            let div1 = parseInt(d1);
    
            rl.question('Introduce el segundo divisor: ', (d2) => {
                
                let div2 = parseInt(d2);

                for (let n=1; n < max; n++){

                    if(n % d1 == 0){
                        
                        if(n % d2 == 0){

                            console.log("FizzBuzz")

                        } else {
                            
                            console.log("Fizz");

                        }
                    } else if(n % d2 == 0){

                        console.log("Buzz")

                    } else{
                        console.log(`${n}`)
                    }
                }

                rl.close();
                
            });
        });
    });
