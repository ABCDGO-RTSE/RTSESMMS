const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
    res.send('Test successful')
})


// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')

// var port = new SerialPort({
//     path: '/dev/cu.usbserial-0001',
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// })

// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// parser.on('data', function (data) {

//     console.log('Received data from port: ' + data);

//     io.emit('data', data);

// });

// const io = require("socket.io")(3002, {
//     cors: {
//         origin: process.env.APP_URL,
//         credentials: true
//     }
// });


// const io = require("socket.io")(4000, {
//     cors: {
//         origin: process.env.APP_URL,
//         credentials: true
//     }
// })

// var i = 0

// setInterval(() => {
//     i++;
//     io.emit("tick", i);
// }, 1000);

app.post('/get_sensor_data', async (req, res) => {
    let body = req;
    // io.emit('data', body);
})

export default {
    path: '/api',
    handler: app
}