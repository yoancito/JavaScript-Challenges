/**
 * Igual que el ejercicio anterior, pero ingresar en el array números aleatorios sin que se repitan.
 **/

 let arr = []

 /**
  * 
  * @param {*} i  Tamaño del arreglo.
  * @param {*} j  Numero maximo a llenar el arreglo.
  * @returns Arreglo lleno con numeros aleatorios hasta j sin repetirse
  */
 const fillArr = (i,j) => {
    if (i == 0) return arr 
    n = parseInt(Math.random() * (j+1));

    for (let i = 0; i < j; i++) {
        if (arr[i]==n) return fillArr(i,j)
    }
    arr.push(n)
    return fillArr(i-1,j);
 }
 
 /**
  * 
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
