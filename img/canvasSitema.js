(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"canvasSitema_atlas_", frames: [[843,0,101,113],[0,0,618,378],[949,189,52,61],[981,88,36,39],[949,252,51,58],[981,129,33,34],[843,115,136,72],[620,0,221,237],[946,0,74,86],[843,189,104,74],[620,239,50,58]]}
];


// symbols:



(lib.jupiter = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.marte = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mercurio = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.neptuno = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pluton = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.saturno = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sol = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tierra = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.urano = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.venus = function() {
	this.spriteSheet = ss["canvasSitema_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.venus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.venus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.venus_1, new cjs.Rectangle(0,0,50,58), null);


(lib.urano_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.urano();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.urano_1, new cjs.Rectangle(0,0,104,74), null);


(lib.tierra_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.tierra();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tierra_1, new cjs.Rectangle(0,0,74,86), null);


(lib.sol_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.sol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sol_1, new cjs.Rectangle(0,0,221,237), null);


(lib.saturno_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.saturno();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saturno_1, new cjs.Rectangle(0,0,136,72), null);


(lib.pluton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.pluton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pluton_1, new cjs.Rectangle(0,0,33,34), null);


(lib.neptuno_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.neptuno();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.neptuno_1, new cjs.Rectangle(0,0,51,58), null);


(lib.mercurio_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.mercurio();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mercurio_1, new cjs.Rectangle(0,0,36,39), null);


(lib.marte_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.marte();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.marte_1, new cjs.Rectangle(0,0,52,61), null);


(lib.jupiter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.jupiter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jupiter_1, new cjs.Rectangle(0,0,101,113), null);


// stage content:
(lib.canvasSitema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.sol.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("sol.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.mercurio.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("mercurio.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.venus.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("venus.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.tierra.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("tierra.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.marte.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("marte.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.jupiter.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("jupiter.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.saturno.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("saturno.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.urano.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("urano.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.neptuno.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		window.open("neptuno.html", "_self");
			// Fin del código personalizado
		}
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.pluton.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			// Inicio del código personalizado
			// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
			window.open("pluton.html", "_self");
			// Fin del código personalizado
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.pluton = new lib.pluton_1();
	this.pluton.parent = this;
	this.pluton.setTransform(627.5,65,1,1,0,0,0,16.5,17);
	new cjs.ButtonHelper(this.pluton, 0, 1, 1);

	this.neptuno = new lib.neptuno_1();
	this.neptuno.parent = this;
	this.neptuno.setTransform(608.5,184,1,1,0,0,0,25.5,29);
	new cjs.ButtonHelper(this.neptuno, 0, 1, 1);

	this.urano = new lib.urano_1();
	this.urano.parent = this;
	this.urano.setTransform(531,74,1,1,0,0,0,52,37);
	new cjs.ButtonHelper(this.urano, 0, 1, 1);

	this.saturno = new lib.saturno_1();
	this.saturno.parent = this;
	this.saturno.setTransform(515,334,1,1,0,0,0,68,36);
	new cjs.ButtonHelper(this.saturno, 0, 1, 1);

	this.jupiter = new lib.jupiter_1();
	this.jupiter.parent = this;
	this.jupiter.setTransform(447.5,193.5,1,1,0,0,0,50.5,56.5);
	new cjs.ButtonHelper(this.jupiter, 0, 1, 1);

	this.marte = new lib.marte_1();
	this.marte.parent = this;
	this.marte.setTransform(351,112.5,1,1,0,0,0,26,30.5);
	new cjs.ButtonHelper(this.marte, 0, 1, 1);

	this.tierra = new lib.tierra_1();
	this.tierra.parent = this;
	this.tierra.setTransform(348,306,1,1,0,0,0,37,43);
	new cjs.ButtonHelper(this.tierra, 0, 1, 1);

	this.venus = new lib.venus_1();
	this.venus.parent = this;
	this.venus.setTransform(288,204,1,1,0,0,0,25,29);
	new cjs.ButtonHelper(this.venus, 0, 1, 1);

	this.mercurio = new lib.mercurio_1();
	this.mercurio.parent = this;
	this.mercurio.setTransform(259,341.5,1,1,0,0,0,18,19.5);
	new cjs.ButtonHelper(this.mercurio, 0, 1, 1);

	this.sol = new lib.sol_1();
	this.sol.parent = this;
	this.sol.setTransform(128.5,293.5,1,1,0,0,0,110.5,118.5);
	new cjs.ButtonHelper(this.sol, 0, 1, 1);

	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.052,1.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.sol},{t:this.mercurio},{t:this.venus},{t:this.tierra},{t:this.marte},{t:this.jupiter},{t:this.saturno},{t:this.urano},{t:this.neptuno},{t:this.pluton}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(325,225,650,450);
// library properties:
lib.properties = {
	width: 650,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/canvasSitema_atlas_.png?1594088443711", id:"canvasSitema_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;