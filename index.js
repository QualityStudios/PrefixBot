const mc = require('minecraft-protocol');
const ChatMessage = require('prismarine-chat')('1.18.2');
const randomstring = require('randomstring');

function startClient() {
    const client = mc.createClient({
        host: 'sus.shhnowisnottheti.me',
        port: 25565,
        username: randomstring.generate({ length: 16, charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-+/\.<>:"}{[];?' }),
        version: '1.19'
    });

    client.on('login', () => {
        client.write('chat', { message: 'fard' });
    });

    client.on('end', startClient);
};

startClient();
