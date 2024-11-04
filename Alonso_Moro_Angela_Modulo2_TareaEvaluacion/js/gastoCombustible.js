
//Creación de la clase
class GastoCombustible {
    constructor(vehicleType, date, kilometers, precioViaje) {
        //Creación de los atributos
        this.vehicleType = vehicleType;
        this.date = date;
        this.kilometers = kilometers;
        this.precioViaje = precioViaje;
    }

    // Método para convertir los atributos a formato JSON
    convertToJSON() {
        return JSON.stringify({
            vehicleType: this.vehicleType,
            date: this.date,
            kilometers: this.kilometers,
            precioViaje: this.precioViaje
        });
    }
}
