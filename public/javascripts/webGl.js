var scene = new THREE.Scene( );
     
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls( camera, renderer.domElement );

//create geometry
var geometry = new THREE.DodecahedronBufferGeometry(1, 0);

// create a material, colour or image texture

var material = new THREE.MeshBasicMaterial( { color: 0xea2369, wireframe: true });

var shape = new THREE.Mesh( geometry, material );
scene.add ( shape );

camera.position.z = 3;

//game logic
var update = function( )
{
  shape.rotation.x += 0.01;  
  shape.rotation.y += 0,005;
};

//draw scene
var render = function( )
{
    renderer.render( scene, camera );
};

//run game loop (update, render, repeat)


var GameLoop = function( )
{
   requestAnimationFrame( GameLoop );
   update( );
   render( );
    
};


//function fancyBackground(GameLoop){
//    var elem = document.getElementById('webGl');
//    webGl = GameLoop();
//}

GameLoop( );

//bind to ID

