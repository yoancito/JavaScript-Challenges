var fs = require('fs');

const adoptioncontroller = require("./controllers/adoption.controller");
adoptioncontroller.consultAdoption().then(rescontroller=>{
    let merge = require("./organize");
    let orderlist = merge.mergeSort(rescontroller)
    createExcel(orderlist);
}).catch(Error=>{
    console.log("error:",Error);
})

const createExcel = (list) => {
    var writeStream = fs.createWriteStream("adopciones.xls");
    var header = "Cecula Adoptador" +"\t"+ "Id Mascota" +"\t"+ "Empleado a cargo" +"\t"+ "Fecha adopción" +"\n";
    writeStream.write(header);
    for (let size=0; size<list.length;size++){
        writeStream.write(`${list[size].idadopta}\t${list[size].idmascota}\t${list[size].idemp}\t${list[size].fecadop}\n`);   
    }
    writeStream.close();
}

const rowsf=(list, rows, size)=>{
    if(size==0){
        return rows
    }
    rows.push(`${list[size].idadopta}\t${list[size].idmascota}\t${list[size].idemp}\t${list[size].fecadop}\n`);
    return rowsf(list, rows, size-1)
}

module.exports={ createExcel }