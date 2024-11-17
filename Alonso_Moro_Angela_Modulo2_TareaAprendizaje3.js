// Ejercicio 1: Gestión de Lista de Compras (Principiante)

const { clear } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let listado = [];


// function elegirModo(){
//     console.log('Acciones disponibles \n a - Añadir porductos \n d - Eliminar el último producto de la lista \n s - salir');
//     rl.question('Introduce  la acción: ', (acc) => {

//         switch (acc.toUpperCase()){
//             case 'A':
//                 addProd();
//                 break;
//             case 'D':
//                 delProd();
//                 break;
//             case 'S':
//                 console.log(listado);
//                 console.log('Hasta  pronto!');
//                 rl.close();
//                 break;
//             default: 
//                 elegirModo();
//         }
//     }); 
// }


// function addProd(){
//     rl.question('Introduce  un producto o pulsa s: ', (producto) => {

//         if(producto === 's'){
//             console.log(listado);
//             elegirModo();
//         }else{
//             listado.push(producto.trim());
//             addProd();
//         }
//     }); 
// }

// function delProd(){
//     listado.pop();
//     console.log(listado);
//     elegirModo();

// }

// elegirModo();



// Ejercicio 2: Gestión de Usuarios (Intermedio)

// class Usuario{
//     constructor (nombre, edad, email){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.email = email;
//     }

//     mostrarInfo(){
//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Edad: ${this.edad}`);
//         console.log(`Email: ${this.email}`);
//     }

// }

// const usuario = new Usuario ('Hommer', 45, 'amanterechoncho@gmai.com')

// function elegirModo(){
//     console.log('Acciones disponibles \n c - Crear usuario \n i - Mostrar usuario \n s - salir');
//     rl.question('Introduce  la acción: ', (acc) => {

//         switch (acc.toUpperCase()){
//             case 'C':
//                 addUser();
//                 break;
//             case 'I':
//                 printUser();
//                 break;
//             case 'S':
//                 console.log('¡Hasta  pronto!');
//                 rl.close();
//                 break;
//             default: 
//                 elegirModo();
//         }
//     }); 
// }

// function addUser(){
//     rl.question('Nombre: ', (nom) => {
//         rl.question('Edad: ', (ed) => {
//             rl.question('Email: ', (m) => {
//                 const newUser = new Usuario (nom, ed, m);
//                 console.log('Usuario creado con éxito');
//                 newUser.mostrarInfo();
//                 elegirModo();
//             })
//         })
//     })
// }

// function printUser(){
//     usuario.mostrarInfo();
//     elegirModo();
// }

// elegirModo();


// Ejercicio 3: Procesamiento de Datos JSON y Bucle Avanzado (Avanzado)

class Usuario {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Email: ${this.email}`);
    }
}

function introducirUsuarios(){
    rl.question('Introduce el JSON con los usuarios: ', (json) => {
        const usuariosJSON = JSON.parse(json);

        const usuarios = usuariosJSON.map(u => new Usuario(u.nombre, u.edad, u.email))

        rl.question('Introduce un nombre: ', (nombre) => {
            const usuario = usuarios.find(usuario => usuario.nombre.toUpperCase() === nombre.toUpperCase());

            if (usuario){
                console.log(usuario)
            } else{
                console.log(`Usuario ${nombre} no encontrado`)
            }
            rl.close();
        })

    })
}

introducirUsuarios();