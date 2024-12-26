const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket rodando em ws://localhost:8080');

server.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    
    socket.send('Bem-vindo ao servidor WebSocket!');

    
    socket.on('message', (message) => {
        console.log('Mensagem recebida do cliente:', message);

        
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Cliente disse: ${message}`);
            }
        });
    });

    
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});
