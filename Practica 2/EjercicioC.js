const grupo = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

// Función find
const luis = grupo.find(p => p.nombre === "Luis");
console.log(luis);

// Función forEach
grupo.forEach(p => {
    console.log(p.nombre, p.edad);
});

// Función reduce
const total = grupo.reduce((suma, p) => suma + p.edad, 0);
console.log("Total de la suma: " + total);
