# Geographic Pin Map

## Live Deployment
[Click here to view the app](https://notch-marble-garlic.glitch.me/)

## Video Demo
<img src="./assets/demo-gif.gif" alt="Demo of project gif">

## Project Overview
This project demonstrates my skills with **third-party libraries** by creating a **Geographic Pin Map**. The inspiration comes from traditional pin maps seen at gas stations, but with a modern, interactive approach.
<img src="https://cdn-haccf.nitrocdn.com/YObyvryzdImjKKudBftGrMrahQVEBpfb/assets/images/optimized/rev-a694fa1/www.mapize.com/wp-content/uploads/2023/07/mackenzie-cruz-L1G-OvEyoVY-unsplash.jpg" alt="Geographic Pin Map" style="max-width: 600px;">

I chose **D3.js** for data visualization due to its vast capabilities and high level of control. This library allows for the creation of everything from simple graphs to complex, dynamic maps.

## Features
- Uses **D3.js** to render a dynamic map of the Earth.
- Allows users to **add pins** by providing their location.
- Implements a **WebSocket server** using **Express.js** and **Socket.io** to synchronize pins in real time.
- Hosted on **Glitch**, a platform well-suited for projects requiring both a frontend and a backend.

## Development Plan
### 1. Implementing the D3.js Map
- Locate the geographic data: [World GeoJSON dataset](https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson).
- Define a **projection** for mapping coordinates onto the globe.
- Add the map to the **DOM** using D3.js.

### 2. Setting Up the WebSocket Server
- Use **Express.js** to serve the frontend.
- Implement **Socket.io** to handle real-time communication between users.

### 3. Deploying the Project
- Encountered deployment challenges:
  - **Netlify and GitHub Pages** were not viable as they only support static sites.
  - **Vercel** had issues with WebSockets.
  - **Heroku** deployed successfully but lacks WebSocket support.
- **Glitch** turned out to be the best option, offering an easy and flexible deployment environment.

## Future Enhancements
- Encapsulate the functionality into a reusable **custom web component**:
  ```html
  <geographic-pin-map server="...server url..." />
  ```
- Improve UI/UX for a more interactive experience.
- Add additional pin metadata (e.g., labels, categories, timestamps).
- Explore alternate hosting solutions for better scalability.

---
This project is a work in progress. Contributions and feedback are welcome!

