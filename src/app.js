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

app.post("/clientes", (req, res) => {
    clientes.push(req.body);
    res.status(201).json(req.body);
})

app.put("/clientes/:id", (req, res) => {
    for (let i = 0; i < clientes.length; i++) {

    }
})

console.log (clientes)


export default app;