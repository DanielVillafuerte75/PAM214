function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 5000); // espera 5 segundos
  });
}

async function mostrarDatos() {
  try {
    console.log("Esperando datos...");
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

mostrarDatos();
