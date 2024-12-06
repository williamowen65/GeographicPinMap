# Geographic Pin Map

This project is meant to demonstrate my skills with 3rd party libraries. 
In order to do this and meet my goals of pushing myself to create something new, I am creating a Geographic Pin Map.

We've all seen the pin maps before at gas stations 
<img src="https://cdn-haccf.nitrocdn.com/YObyvryzdImjKKudBftGrMrahQVEBpfb/assets/images/optimized/rev-a694fa1/www.mapize.com/wp-content/uploads/2023/07/mackenzie-cruz-L1G-OvEyoVY-unsplash.jpg" alt="Geographic Pin Map" style="max-width: 600px; width: 100%">


I'm going to use D3.js to build an Earth. As a user you can give the map your location and add a pin.  

My thoughts are that this would be a cool way to show users where other users are coming from.

I'd like to start with Earth but later add the ability to  slightly adjust the scope, or apply custom rotation to it.

I do want it to slowly revolve. 

--- 

D3.js data visualization has been a favorite of mine because the library is so vast and level of control provided from the api is impressive especially given the complexity of the data visualizations. The library can be used for all sorts of graphs and charts ranging from "simple" to "complex."

Somewhere between simple to complex, my project follows a few specific steps but D3 handles all of the heavy lifting. I simply need to be aware of all the steps needed to be done. 

## Steps include

- Finding the correct JSON data to represent Earth
  - This should be online and free. It'll have the outlines/coordinates/names, etc.
- Finding the correct D3 Projection
  - I want a sphere.
- Generate the D3 Map.
- Figure out how to add a point to it
  - Refactor into method
- Figure out how to rotate it. 
- Add button to add location to the map.

View the live deployment here

> https://notch-marble-garlic.glitch.me/


<img src="./demo-gif.gif">

---

Notes on progress:  

> The initial setup of Earth and a dot took surprisingly little time thanks to CoPilot.  
> In order to complete the work hours requirement I am adding another library to this project.   
> That library is 'Socket.io' for a real time connection for sharing location over the map  
> And also the Express library is used to serve content.   
 



