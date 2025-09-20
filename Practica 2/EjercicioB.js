
const productos = [
    { nombre: 'Laptop', precio: 12000 },
    { nombre: 'Mouse', precio: 250 },
    { nombre: 'Teclado', precio: 750 },
    { nombre: 'Monitor', precio: 3000 }
];
const filtroPrecio = productos.filter(prs => prs.precio > 1000);
// codigo

console.log(filtroPrecio);