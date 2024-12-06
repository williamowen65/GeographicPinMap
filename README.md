# Geographic Pin Map

View the live deployment here

> https://notch-marble-garlic.glitch.me/


<img src="./demo-gif.gif">

This project is meant to demonstrate my skills with 3rd party libraries. 
In order to do this and meet my goals of pushing myself to create something new, I created a Geographic Pin Map.

We've all seen the pin maps before at gas stations 
<img src="https://cdn-haccf.nitrocdn.com/YObyvryzdImjKKudBftGrMrahQVEBpfb/assets/images/optimized/rev-a694fa1/www.mapize.com/wp-content/uploads/2023/07/mackenzie-cruz-L1G-OvEyoVY-unsplash.jpg" alt="Geographic Pin Map" style="max-width: 600px; width: 100%">


--- 
D3.js data visualization has been a favorite of mine because the library is so vast and level of control provided from the api is impressive especially given the complexity of the data visualizations. The library can be used for all sorts of graphs and charts ranging from "simple" to "complex."

[D3.js website](https://d3js.org/)

I'm going to use D3.js to build an Earth. As a user you can give the map your location and add a pin.  



<fieldset>
<legend><h3 style="translate: 0px -1px; margin: 0 5px;">D3 Steps include: ... </h3> </legend>
<ul>
  <li>Locate the location data JSON <br>(Copilot found this for me! --> <a href="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson</a>)
 
  </li>
  <li>Define a projection for your map
    <ul>
      <li>This is a function which can take coordinates and plot them on the map</li>
      <li>D3 is very flexible and can handle many different styles of maps</li>
    </ul>
  </li>
  <li>Add the map to the DOM</li>
</ul>
</fieldset>

---

The other half of this project is the websocket server which uses express and socket.io

[Express.js](https://expressjs.com/)  
[socket.io](https://socket.io/)

This enables me to use a remote server to host and serve files, while also keeping a websocket connection to browsers that are opened to this geographic map window.

---

The challenging part of this was finding out where I can deploy this project. I couldn't deploy to some of my normal locations because they were meant for static sites (No netlify, no Github pages).   

I tried deploying on Vercel but had some issues getting it working... 
I then tried Heroku, which I got deployed, but after deployment I found out Heroku doesn't support websockets...

It just so happened that I recently discovered a host called Glitch. Deployment was very easy there. And this is a host I am planning on using again in the future. 

[
Glitch: The friendly community where everyone builds the web
](https://glitch.com/)


--- 

The main thing I would want to do to improve this app is encapsulate it so it can be used in other applications with ease.

```html
<geographic-pin-map server=" ... server url ... " />
```

This could be accomplished with custom components. However it would still require deployment of a server to handle it. And it's a problem for another day.



