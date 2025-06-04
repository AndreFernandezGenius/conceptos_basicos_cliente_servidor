export function eventosCliente(referencia,funcion){
    const referenciaHtml = document.querySelector(`${referencia}`);
    referenciaHtml.addEventListener("click",funcion)
}