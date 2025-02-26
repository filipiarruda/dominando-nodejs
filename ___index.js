const express = require("express");

const server = express();

server.get('/hello', (req, res) => {

    const { nome, idade } = req.query;

    return res.json({ 
        title: 'Hello World',
        message: `Olá ${nome} tudo bem?`,
        idade: idade
    });
});

server.get('/hello/:nome', (req, res) => {

    const nome = req.params.nome;

    return res.json({ 
        title: 'Hello World',
        message: `Olá ${nome} tudo bem?`
    });

});


server.listen(3030);