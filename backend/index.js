//Servidor
const app = require('./app');
const appWs = require('./app-ws');

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`App Express está rodando na porta ${process.env.PORT || 3001}`)
});

const wss = appWs(server);

setInterval(() => {
    wss.broadcast({ temperature: (Math.random() * (40 - (-5)) + (-5)).toFixed(2) })
}, 1000);
