import express from "express";

const app = express();

app.use(express.json());

const clientes = [];

clientes.push ({nome: "Carlos",
    id: 1
});

app.get("/", (req, res) => {
    res.send("API funcionando!")
})

app.get("/clientes", (req, res) =>{
    res.json(clientes)
})

console.log (clientes)


export default app;