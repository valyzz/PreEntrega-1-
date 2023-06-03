let i = 1;

function concatenar(nombre, apellido) {
  return nombre + " " + apellido;
}

do {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let respuesta = prompt("¿Desea reservar una habitación? Indique si o no");

  if (respuesta === "si") {
    alert(
      "Hola " +
        concatenar(nombre, apellido) +
        " Has reservado una habitación exitosamente. Muchas gracias!"
    );
    i++;
  } else {
    alert(
      "Es una lástima, será en otra ocasión. " +
        concatenar(nombre, apellido) +
        "Hasta la próxima"
    );
  }
} while (i < 4);

alert("Las habitaciones están agotadas, mil disculpas. Inténtelo nuevamente otro día.");

