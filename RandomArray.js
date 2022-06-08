/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 **/

let arr = []
/**
 * @param {*} i  Tamaño del arreglo.
 * @param {*} j  Numero maximo a llenar el arreglo.
 * @returns Arreglo lleno con numeros aleatorios hasta j
 */
const fillArr = (i,j) => {
    if (i == 0) return arr 
    arr.push(parseInt(Math.random() * (j+1)));
    return fillArr(i -1,j);
}

/**
 * @param {*} a Arreglo a imprimir 
 */
const printArr = (a) => {
    let text = a.toString();
    console.log(a);
}

console.log("Tamaño del arreglo >");
let inp = process.openStdin();

inp.on("data", function(captureNum){
    var n = captureNum;
    n = parseInt(n,10);

    console.time("Tiempo");
    fillArr(n,n);
    console.timeEnd("Tiempo");

    printArr(arr);
    process.exit();
})
