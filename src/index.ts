const PORT = 25998;
const HOST = "192.168.1.3";

var dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
  console.log(`<< ${message} >> `);
  if (message.indexOf('[Ent]') > -1) {
    console.log('  ');
  }
});

server.bind(PORT, HOST);