var gl = null;

function init() {
    var cone = document.getElementById( "Cone-vertex-shader" );

    gl = WebGLUtils.setupWebGL( cone );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 1.0, 1.0 );

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
