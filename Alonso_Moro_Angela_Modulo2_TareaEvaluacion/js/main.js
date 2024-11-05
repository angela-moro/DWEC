// ------------------------------ 1. VARIABLES GLOBALES ------------------------------
let tarifasJSON = null;
let gastosJSON = null;
let tarifasJSONpath = '../data/tarifasCombustible.json';
let gastosJSONpath = '../data/gastosCombustible.json';

// ------------------------------ 2. CARGA INICIAL DE DATOS (NO TOCAR!) ------------------------------
// Esto inicializa los eventos del formulario y carga los datos iniciales
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar los JSON cuando la página se carga, antes de cualquier interacción del usuario
    await cargarDatosIniciales();

    // mostrar datos en consola
    console.log('Tarifas JSON: ', tarifasJSON);
    console.log('Gastos JSON: ', gastosJSON);

    calcularGastoTotal();

    // Inicializar eventos el formularios
    document.getElementById('fuel-form').addEventListener('submit', guardarGasto);
});

// Función para cargar ambos ficheros JSON al cargar la página
async function cargarDatosIniciales() {

    try {
        // Esperar a que ambos ficheros se carguen
        tarifasJSON = await cargarJSON(tarifasJSONpath);
        gastosJSON = await cargarJSON(gastosJSONpath);

    } catch (error) {
        console.error('Error al cargar los ficheros JSON:', error);
    }
}

// Función para cargar un JSON desde una ruta específica
async function cargarJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${path}`);
    }
    return await response.json();
}

// ------------------------------ 3. FUNCIONES ------------------------------
// Calcular gasto total por año al iniciar la aplicación
function calcularGastoTotal() {
    // array asociativo con clave=año y valor=gasto total
    let aniosArray = {
        2010: 0,
        2011: 0,
        2012: 0,
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
        2018: 0,
        2019: 0,
        2020: 0
    };

    // Sumar gastos existentes
    gastosJSON.forEach(gasto => {
        const fecha = new Date(gasto.date);
        const year = fecha.getFullYear();
        if (aniosArray.hasOwnProperty(year)) {
            aniosArray[year] += gasto.precioViaje;
        }
    });
    // Actualizar el HTML con los gastos totales
    for (let anno in aniosArray) {
        document.getElementById(`gasto${anno}`).textContent = aniosArray[anno].toFixed(2);
    }
}

// guardar gasto introducido y actualizar datos
function guardarGasto(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const tipoVehiculo = document.getElementById('vehicle-type').value;
    const fecha = new Date(document.getElementById('date').value);
    const kilometros = parseFloat(document.getElementById('kilometers').value);
    const anio = fecha.getFullYear();

    // Validaciones
    if (isNaN(kilometros) || kilometros <= 0) {
        console.error('Kilómetros inválidos');
        return;
    }
    if (!tipoVehiculo || isNaN(anio)) {
        console.error('Datos de vehículo o fecha no válidos');
        return;
    }

    // Encontrar la tarifa correspondiente
    const tarifaAnio = tarifasJSON.tarifas.find(tarifa => tarifa.anio === anio);
    if (!tarifaAnio) {
        console.error(`Tarifa no encontrada para el año ${anio}`);
        return;
    }

    const tarifa = tarifaAnio.vehiculos[tipoVehiculo];
    if (!tarifa) {
        console.error(`Tarifa no encontrada para el tipo de vehículo ${tipoVehiculo} en el año ${anio}`);
        return;
    }

    // Calcular el precio del viaje
    const precioViaje = kilometros * tarifa;

    // Crear el objeto GastoCombustible y añadirlo a la lista de gastos
    const nuevoGasto = {
        vehicleType: tipoVehiculo,
        date: fecha.toISOString(),
        kilometers: kilometros,
        precioViaje: precioViaje
    };

    // Agregar el nuevo gasto al array de gastos
    gastosJSON.push(nuevoGasto);

    // Actualizar la visualización y recalcular el total
    actualizarListaGastos(nuevoGasto);
    calcularGastoTotal();
    vaciarFormulario();

}

// Función para vaciar el formulario
function vaciarFormulario() {
    document.getElementById('vehicle-type').value = ''; // Vaciar el tipo de vehículo
    document.getElementById('date').value = ''; // Vaciar la fecha
    document.getElementById('kilometers').value = ''; // Vaciar los kilómetros
}

// Actualizar la lista de gastos en el DOM
function actualizarListaGastos(gasto) {
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${new Date(gasto.date).toLocaleDateString()}: ${gasto.vehicleType} - ${gasto.kilometers} km - ${gasto.precioViaje.toFixed(2)}€`;
    expenseList.appendChild(listItem);
}

// Mostrar el último gasto en "Gastos recientes"
function mostrarUltimoGasto(gasto) {
    const recentExpenses = document.getElementById('recent-expenses'); // Asegúrate de que este elemento existe en tu HTML
    recentExpenses.innerHTML = ''; // Limpiar contenido previo

    const jsonGasto = gasto.convertToJSON(); // Convertir a JSON usando el método del objeto
    const listItem = document.createElement('li');
    listItem.textContent = jsonGasto; // Mostrar JSON en el elemento
    recentExpenses.appendChild(listItem);
}