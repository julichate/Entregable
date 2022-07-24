/*Declaración de variables y Arrays */

const invitados = ["García", "Perez", "Rodriguez", "Romero", "Fisicaro","Pons","Pardo","Flores","Quiles","Mansilla"] /* Lista de invitados */
let accion = 0
const presentes = [] /* Lista de presentes */
const ausentes = [] /* Lista de ausentes */


/*Función para completar el array presentes */
function ingreso() {
    let nombreInvitado = prompt("Ingrese el nombre del invitado.")
    
    if(invitados.indexOf(nombreInvitado) == -1){
        alert("Esta persona no está invitada")
    }
    else if(invitados.indexOf(nombreInvitado  != -1)){
        presentes.push(nombreInvitado)
        
        alert("puede ingresar")
    }

    
}



/*Función para completar el array ausentes */
function ausencia() {

    let nombreAusente = prompt("Ingrese el nombre de la persona ausente.")

    if(invitados.indexOf(nombreAusente) == -1){
        alert("Esta persona no está invitada")
    }
    
    else if(invitados.indexOf(nombreAusente) != -1){
        ausentes.push(nombreAusente)

         
    }
}


/*Programa Principal*/


do {
accion = prompt("Para dar ingreso de invitado, presione 1; para notificar ausencia, presione 2; para ver lista de presentes, presione 3; para ver lista de ausentes, presione 4; para finalizar, presione 5")


if (accion == 1){

    ingreso()
    
    }

 else if (accion == 2) {
    ausencia()
 }

 else if (accion == 3){
    console.log("los presentes son: " + (\n) + presentes.join("\n"))
 }

 else if (accion == 4) {
    console.log("Los ausentes son: " + (\n) + ausentes.join("\n"))  
 }

 else if (accion == 5) {
    alert("Programa finalizado")
 }

 else if (accion > 5 || accion == 0 ) {
    alert("ingresó una opción inválida")
 }
} while (accion != 5)

