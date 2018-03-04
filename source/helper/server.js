export default class Server  {

    constructor(serverName) {
        this.serverName = serverName;
        this.webSocket = new WebSocket(serverName);
    }

    findRoom() {
        const request = JSON.stringify({
            msg: "findRoom"
        });

        this.webSocket.send(request);
    }

    hit(row, column, userId) {
        const request = JSON.stringify({
            msg: "hit",
            row: row,
            column: column,
            userId: userId
        });

        this.webSocket.send(request);
    }
}

