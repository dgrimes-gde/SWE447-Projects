var cone = null;

function init() {
    var cone = document.getElementById( "Cone-vertex-shader" );
    cone = new Cone( n ); 

    gl = WebGLUtils.setupWebGL( cone );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

    render();
}

function render() {
   cone.render();
}

window.onload = init;
