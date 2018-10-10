//Declaración de variables
var nombreUsuario;
var usuarioSimona = "Simona Lugo Olguín";
var contraseña = 701125;
var saldoCuenta;
var saldoCuentaSimona = 30000;
var limiteExtraccion;
var limiteExtraccionSimona = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML


function ingresoUsuario() {
var ingresarNombreDeUsuario = prompt("Ingrese su nombre de usuario");
  if (ingresarNombreDeUsuario == usuarioSimona) {
    var ingresarContraseña = prompt("Hola" + usuarioSimona + ".Ingresá tu contraseña.");
    if (ingresarContraseña == contraseña){
        nombreUsuario = usuarioSimona;
        saldoCuenta = saldoCuentaSimona;
        limiteExtraccion = limiteExtraccionSimona;
    } else {
        alert("algo2");
    }
  }
  else {
    alert("algo");
  }
}

ingresoUsuario();

var depositoDinero = function(deposito){
  saldoCuenta += deposito;
}
var restarDinero = function(extraccion){
  saldoCuenta -= extraccion;
}
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var stringlimite = prompt("Ingrese el limite de extracción")
  limiteExtraccion = parseInt(stringlimite);
  actualizarLimiteEnPantalla();
  alert("Su nuevo límite de extracción es: $" + limiteExtraccion);
}


function multiploDe100 (){
  if ((extraccion%100)==0 ){
    chequeoDeCapitalyLimite();
  }
  else {
    alert("Solo puedes extraer billetes de 100")
  }
}



function chequeoDeCapitalyLimite(){
  if ((extraccion <= saldoCuenta) && (extraccion <= limiteExtraccion)){
    var saldoAnteriorExtraccion = saldoCuenta;
    multiploDe100();
    restarDinero(extraccion);
    alert("Usted ha retidado: $" + extraccion + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorExtraccion + ".\n" + "Tu saldo actual es: $" + saldoCuenta+ ".");
}   else if (extraccion > saldoCuenta){
  alert("Usted no posee suficiente saldo, consiga otro trabajo.");
  }
    else if (extraccion > limiteExtraccion) {
    alert("El banco no confia en usted, no puede retirar tanto dinero");
  }
}


function extraerDinero() {
var stringExtraccion = prompt("Ingrese el monto que desea extraer");
extraccion = parseInt(stringExtraccion);
multiploDe100();
actualizarSaldoEnPantalla();
}

function depositarDinero() {
  var stringCantidadDeposito = prompt("Ingrese el monto que desea depositar en su cuenta");
  var deposito = parseInt(stringCantidadDeposito);
  saldoAnteriorAlDeposito = saldoCuenta;
  depositoDinero(deposito);
  actualizarSaldoEnPantalla();
  alert("Tu deposito:$ " + deposito + ".\n" + "Tu saldo anterior era:$ " + saldoAnteriorAlDeposito + ".\n" + "Tu saldo actual:$ " + saldoCuenta +".");
}

function pagarServicio() {
var respuestaPrompt = prompt("Ingrese el número que corresponda con el servicio que queres pagar:\n1-Agua\n2-Luz\n3-Internet\n4-Telefono");
switch (respuestaPrompt) {
  case "1":
  if (agua<=saldoCuenta) {
saldoAnteriorPago = saldoCuenta;
     restarDinero(agua);
     actualizarSaldoEnPantalla();
  }
  alert("Has pagado el servicio Agua.\nHas pagado: $" + agua + ".\n" + "Tu nuevo saldo es: $"+ saldoCuenta + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorPago + ".\n" )
    break;
  case "2":
  if (luz<=saldoCuenta) {
  saldoAnteriorPago = saldoCuenta;
    restarDinero(luz);
    actualizarSaldoEnPantalla();
  }
  alert("Has pagado el servicio Luz.\nHas pagado: $" + luz + ".\n" + "Tu nuevo saldo es: $"+ saldoCuenta + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorPago + ".\n" )
  break;
  case "3":
    if (internet<=saldoCuenta) {
    saldoAnteriorPago = saldoCuenta;
    restarDinero(internet);
    actualizarSaldoEnPantalla();
    }
    alert("Has pagado el servicio Internet.\nHas pagado: $" + internet + ".\n" + "Tu nuevo saldo es: $"+ saldoCuenta + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorPago + ".\n" )
    break;
    case "4":
    if (telefono<=saldoCuenta) {
    saldoAnteriorPago = saldoCuenta;
    restarDinero(telefono);
    actualizarSaldoEnPantalla();
    }
    alert("Has pagado el servicio Telefono.\nHas pagado: $" + telefono + ".\n" + "Tu nuevo saldo es: $"+ saldoCuenta + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorPago + "." )
    break;
  default:
}
}

function chequeoCuentaAmiga(numeroCuentaAmiga, transferencia) {
  if ((numeroCuentaAmiga == cuentaAmiga1) || (numeroCuentaAmiga == cuentaAmiga2)){
    restarDinero(transferencia);
  } else {
    alert("XXxX");
  }
}

function transferirDinero(){
  var stringPromptTransferencia = prompt("Ingrese el monto que desea transferir");
  var transferencia = parseInt(stringPromptTransferencia);
  if (transferencia<=saldoCuenta) {
    var saldoAnteriorTransferencia = saldoCuenta;
    console.log(saldoAnteriorTransferencia);
    var numeroCuentaAmiga = prompt("Ingrese el número de cuenta al que desea hacer la transferencia");
    chequeoCuentaAmiga(numeroCuentaAmiga, transferencia);
    actualizarSaldoEnPantalla();
    alert("Se ha realizado la tranferencia con exito.\n"+ "Has tranferido: $" + transferencia + ".\n" + "Su saldo actual es:$" + saldoCuenta + ".\n" + "Tu saldo anterior era: $" + saldoAnteriorTransferencia + ".");
  } else {
    alert("xxxxxx");
  }
}
/*

*/


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
