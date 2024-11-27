const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

let locations = [];

io.on('connection', (socket) => {
  console.log('New client connected');

  // Send existing locations to the new client
  socket.emit('initialLocations', locations);

  // Listen for new locations from clients
  socket.on('newLocation', (location) => {
    locations.push(location);
    io.emit('broadcastLocation', location);
  });

  socket.on('disconnect', () => {
    locations = locations.filter(loc => loc.socketId !== socket.id);
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

// Include the socket.io client script
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'socket.io', 'client-dist', 'socket.io.js'));
});