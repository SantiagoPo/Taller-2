
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const miPromesa = new Promise((resolve, reject) => {
  rl.question("Ingrese su edad: ", (edad) => {
    edad = parseInt(edad);
    if (edad >= 18) {
      resolve("Puede ingresar a la discoteca");
    } else {
      reject("No puede ingresa a la discoteca ya que es menor de edad, o su edad es incorrecta");
    }
    rl.close();
  });
});

async function ejecutarPromesa() {
  try {
    const resultado = await miPromesa;
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

ejecutarPromesa();

