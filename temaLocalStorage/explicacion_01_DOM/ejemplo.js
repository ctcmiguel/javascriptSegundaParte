const imprimir = () => document.getElementById('demo').innerHTML = localStorage.getItem('nombre')

imprimir();
const grabar = () =>{
    //Agrego la variable nombre
    const usuarioNuevo = prompt('Dame el nombre del usuario');
    localStorage.setItem('nombre', usuarioNuevo);
    // Imprimo el valor de nombre en el html
    imprimir();
}

const borrar = () => {
    localStorage.removeItem('nombre');
    imprimir();
}