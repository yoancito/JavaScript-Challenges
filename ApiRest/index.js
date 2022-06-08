const express = require('express')
const app = express()
const port = 3000

// Endpoint hello world 
app.get('/', (req, res) => {
    res.send('Rutas: /employee \n /pet \n /adopter \n /adoption')
})

// Importar empleados routers
const empleados_router = require("./routers/employee.router")
app.use(empleados_router)

// Importar mascotas router
const mascotas_router = require("./routers/pet.router")
app.use(mascotas_router)

// importar adoptador
const adoptador_router = require("./routers/adopter.router")
app.use(adoptador_router)

const adopcion_router = require("./routers/adoption.router")
app.use(adopcion_router)

// Levantar el servicio para escuchar las solicitudes (request-req)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})