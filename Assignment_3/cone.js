var cone = null;

function init() {
    var cone = document.getElementById( "Cone-vertex-shader" );
    cone = new Cone( n ); 

     Cone = WebGLUtils.setupWebGL( cone );

    if ( !Cone ) {
        alert("Unable to setup WebGL");
        return;
    }

    Cone.clearColor( 1.0, 0.0, 0.0, 1.0 );

    render();
}

function render() {
   cone.render();
}

window.onload = init;
