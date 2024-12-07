const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

// Load environment variables
require('dotenv').config();


const app = express();
const server = http.createServer(app);
const io = socketIo(server,
    {
        cors: {
            // handle connection for production server and local dev
            origin: process.env.ENV === 'production' ? "https://notch-marble-garlic.glitch.me/" : "http://localhost:5500",
            methods: ["GET", "POST"]
        }
    }
);

// 5500 is a special dev port on my computer (mobile dev)
const PORT = process.env.PORT || 5500;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Keeps track of all locations shared over the server
let locations = {};
// Tracks total count of viewers
let totalViewers = 0;

// Listen for new connections
io.on('connection', (socket) => {
    console.log('New client connected');
    // Increment total viewers
    totalViewers++;

    // Send existing locations to the new client
    // This uses "Socket" to send data to the new client
    socket.emit('initialLocations', locations);

    // This uses 'io' to send data to all clients
    io.emit('emitViewerCount', totalViewers);

    // Listen for new locations from clients
    socket.on('newLocation', (location) => {
        // attach socketId to location
        location.socketId = socket.id;
        if (locations[socket.id]) {
            // Update location?
        } else {
            io.emit('broadcastLocation', location);
            locations[socket.id] = location;
        }
        // locations.push(location);
        console.log('New location added', { locations })
    });

    // Listen for disconnections
    socket.on('disconnect', () => {
        const coordinates = locations[socket.id];
        delete locations[socket.id];
        io.emit('removeLocation', coordinates);
        totalViewers--;
        io.emit('emitViewerCount', totalViewers);
        console.log('Client disconnected', { locations, socketId: socket.id, totalViewers });
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


// Serve assets files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

