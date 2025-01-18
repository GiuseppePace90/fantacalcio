/* Import dependencies */
const express = require('express');
const http = require('http');
const webSocket = require('ws');
const cors = require("cors");
const routerSrvModule = require('./routes/srvRoutes');
const routerCtrlModule = require('./routes/ctrlRoutes');
const dbModule = require("./model/database/dbConfig");
/* App instance */
const app = express();
/* Server instance */
const server = http.createServer(app);
/* WebSocket server instance */
const WSServer = webSocket.Server;
/* Database instance */
const database = new dbModule();

/* Database connection */
database.Connect().then(
    function(result) {
        if(result === 1) {
            console.log("Connessione al database avvenuta con successo");
            serverInit();
        } else {
            console.log("Impossibile connettersi al db. Errore " + result);
        }},
    function(error) {
        console.log("Impossibile connettersi al db. Errore " + error);
    }
);

/* Initialize app */
function serverInit() {

    app.use(cors());
    app.use(express.json());
    app.use('/', routerSrvModule);
    app.use('/api', routerCtrlModule);

    wsConnection();
}

/* Initialize WS server and enstablish connection */
function wsConnection() {

    const port = 4040;

    let wss = new WSServer({
        server: server
    });

    wss.on('connection', function connection(ws) {
        console.log('Client connesso');

        ws.on('message', function incoming(message) {
            console.log('Messaggio ricevuto:', message);
        });

        ws.on('close', function close() {
            console.log('Connessione chiusa');
        });

        ws.on('error', function error(err) {
            console.error('Errore WebSocket:', err);
        });
    });

    server.listen(port, () => console.log("Server in ascolto alla porta " + `${port}`));
}

