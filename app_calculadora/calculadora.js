const calc = require('./index');  // Corrigido nome do arquivo
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!!');
});

// Correção: Uso correto de template strings
app.get('/somar/:nome', (req, res) => {
    res.send(`Olá, ${req.params.nome}!`);
});

// Criando rota para operações matemáticas
app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calc.somar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calc.subtrair(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calc.multiplicar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (Number(b) === 0) {
        return res.send('Erro: divisão por zero não é permitida!');
    }
    const resultado = calc.dividir(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`APP rodando na porta ${PORT}`);
});
