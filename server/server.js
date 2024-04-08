/* Server, Db and Routes dependencies */
const express = require('express');
const cors = require("cors");
const routerSrvModule = require('./routes/srvRoutes');
const routerCtrlModule = require('./routes/ctrlRoutes');
const dbModule = require("./model/database/dbConfig");
/* Server instance */
const app = express();
/* WebSocket dependencies */
const server = require("http").Server(app);
const WebSocketServer = require("websocket").server;
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

/* Initialize server */
function serverInit() {

    const port = 8080

    app.use(cors());
    app.use(express.json());
    app.use('/', routerSrvModule);
    app.use('/api', routerCtrlModule);
       
    app.listen(port, () => {
        console.log(`Server in ascolto a http://localhost:${port}`);
    });
    
}

