//aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//app config
let app = new Application({
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

//load assets
loader
    .add("../assets/MainChar/woman_down/Zhenschina_front.png")
    .load(setup);

function setup(){
    let woman = new Sprite(
        resources["../assets/MainChar/woman_down/Zhenschina_front.png"].texture
        );
    
    app.stage.addChild(woman)
}