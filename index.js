(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,642,1442,142],[1190,386,768,94],[1190,482,793,87],[0,538,707,99],[1444,0,512,384],[752,0,436,640],[0,0,750,536]]}
];


// symbols:



(lib.CachedBmp_71 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
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


(lib.Rectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-300.4,-29.45,0.4168,0.4168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(-300.4,-29.4,601.0999999999999,59.2), null);


(lib.image3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(117,167,0.4123,0.4875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image3, new cjs.Rectangle(117,167,309.2,261.3), null);


(lib.image2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,1.6645,1.3077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image2, new cjs.Rectangle(0,0,725.7,837), null);


(lib.image1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,1.2504,1.2396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1, new cjs.Rectangle(0,0,640.2,476), null);


(lib.Description2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-187.65,-26,0.5,0.5);

	this.instance_1 = new lib.Rectangle();
	this.instance_1.setTransform(4.45,3.65,1,1.1995,0,0,0,0,0.1);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Description2, new cjs.Rectangle(-295.9,-31.7,601.0999999999999,71), null);


(lib.Description1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-159.7,111.95,0.5,0.5);

	this.instance_1 = new lib.Rectangle();
	this.instance_1.setTransform(38.45,133.8,0.9567,0.9331);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Description1, new cjs.Rectangle(-248.9,106.3,575.1,55.3), null);


(lib.Description = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(-172.4,-25.45,0.4732,0.4732);

	this.instance_1 = new lib.Rectangle();
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Description, new cjs.Rectangle(-300.4,-29.4,601.0999999999999,59.2), null);


// stage content:
(lib.LAB1111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Description();
	this.instance.setTransform(322.5,-33.45,1.0566,1);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Description1();
	this.instance_1.setTransform(309.5,-33.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Description2();
	this.instance_2.setTransform(309.5,-33.45);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},70).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},70).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,x:327.5,y:77.55,alpha:1},14,cjs.Ease.get(1)).wait(70).to({x:309.5,y:-33.45,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},10).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},15).wait(61).to({regX:38.6,regY:133.9,x:347.9,y:100.35,alpha:0.9956},0).wait(1).to({x:347.3,y:100.05,alpha:0.9822},0).wait(1).to({x:346.3,y:99.5,alpha:0.96},0).wait(1).to({x:344.95,y:98.75,alpha:0.9289},0).wait(1).to({x:343.2,y:97.75,alpha:0.8889},0).wait(1).to({x:341.05,y:96.55,alpha:0.84},0).wait(1).to({x:338.55,y:95.1,alpha:0.7822},0).wait(1).to({x:335.6,y:93.5,alpha:0.7156},0).wait(1).to({x:332.3,y:91.65,alpha:0.64},0).wait(1).to({x:328.6,y:89.55,alpha:0.5556},0).wait(1).to({x:324.5,y:87.25,alpha:0.4622},0).wait(1).to({x:320,y:84.75,alpha:0.36},0).wait(1).to({x:315.15,y:82,alpha:0.2489},0).wait(1).to({regX:0,regY:0,x:271.3,y:-54.85,alpha:0.1289},0).to({_off:true,x:309.5,y:-33.45,alpha:0},1).wait(10).to({_off:false,alpha:1},0).to({x:282,y:-71.7},15,cjs.Ease.get(1)).wait(70).to({x:309.5,y:48.4},0).wait(1).to({regX:38.6,regY:133.9,x:348.1,y:181.85,alpha:0.9955},0).wait(1).to({x:348.25,y:180.65,alpha:0.982},0).wait(1).to({x:348.5,y:178.55,alpha:0.9596},0).wait(1).to({x:348.8,y:175.7,alpha:0.9281},0).wait(1).to({x:349.2,y:171.95,alpha:0.8877},0).wait(1).to({x:349.7,y:167.45,alpha:0.8383},0).wait(1).to({x:350.3,y:162.05,alpha:0.7799},0).wait(1).to({x:351,y:155.9,alpha:0.7125},0).wait(1).to({x:351.75,y:148.85,alpha:0.6361},0).wait(1).to({regX:0,regY:0,x:314.05,y:7.15,alpha:0.5508},0).wait(1).to({regX:38.6,regY:133.9,x:352.65,y:139.3,alpha:0.4585},0).wait(1).to({y:137.35,alpha:0.3574},0).wait(1).to({y:135.3,alpha:0.2476},0).wait(1).to({regX:0,regY:0,x:314.05,y:-0.85,alpha:0.1289},0).to({x:309.5,y:48.4,alpha:0},1).wait(1));

	// image
	this.instance_3 = new lib.image1();
	this.instance_3.setTransform(321.1,241,1,1,0,0,0,320.1,238);

	this.instance_4 = new lib.image2();
	this.instance_4.setTransform(320.95,240.8,0.9969,1.0059,0,0,0,320.2,238.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.image3();
	this.instance_5.setTransform(358.95,240.8,0.9969,1.0059,0,0,0,320.2,238.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({regX:320.2,regY:238.2,scaleX:0.9969,scaleY:1.0059,x:320.95,y:240.8,alpha:0},15).to({_off:true},10).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regY:238.3,scaleX:0.8837,scaleY:0.5774,x:282.6,y:140.65,alpha:1},15).wait(60).to({regY:238.2,scaleX:0.9969,scaleY:1.0059,x:320.95,y:240.8,alpha:0},0).wait(15).to({_off:true},10).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(209).to({_off:false},0).to({scaleX:1.1606,scaleY:1.3929,x:377.45,y:188.8,alpha:1},15).wait(70).to({scaleX:0.9969,scaleY:1.0059,x:358.95,y:240.8},0).to({alpha:0.8008},3).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.7,174.8,405.59999999999997,668.3);
// library properties:
lib.properties = {
	id: '4270E5EC45E0DC49A951AC5D6378EBC6',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4270E5EC45E0DC49A951AC5D6378EBC6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;