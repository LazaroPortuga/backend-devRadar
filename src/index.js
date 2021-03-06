const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect('mongodb+srv://week10:week10@omnistack-kjfh0.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,    
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

app.use(cors())
// app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
app.use(router)

{// METODOS HTTP: GET, POST, PUT ,DELETE ... 

// TIPOS DE PARÂMETROS: 
    // Query Params: req.query (filtros, ordenação, paginação, ... );
    // Route Params: req.params (Identificar um recurso na alteração ou remoção);
    // body : req.body (dados para criação ou edição de um registro);
}


app.listen(3333, ()=> {
    console.log("SERVIDOR RUNNNIG NA PORTA 3333")
})
