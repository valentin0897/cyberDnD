//app config
let app = new PIXI.Application({
    width: 256, 
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1});
document.body.appendChild(app.view);

//full screen
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

