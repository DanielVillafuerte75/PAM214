function VerifUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Usuario verificado");
        } else {
            reject("Usuario no verificado");
        }
});
}

VerifUsuario("admin")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

VerifUsuario("Daniel")    
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));