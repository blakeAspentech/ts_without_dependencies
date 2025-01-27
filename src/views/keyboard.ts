import { someFunction } from "./../other_module";
import keyFile from './../resources/keyConfig.json';



export function createKeyboard(): SVGSVGElement
{
	//var keyFile = require('./../resources/keyboard.json');
	let keyboardSVG : SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
	keyboardSVG.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
	keyboardSVG.setAttribute('height','400');
	keyboardSVG.setAttribute('width','400');
	keyboardSVG.setAttribute("id","keyboard");


	var basicKey = document.createElementNS('http://www.w3.org/2000/svg','path');
	var keyDown = document.createElementNS('http://www.w3.org/2000/svg','animate');
	keyDown.setAttribute('id','downstroke');
	keyDown.setAttribute('attributeName','d');
	keyDown.setAttribute('dur','.1s');
	keyDown.setAttribute('fill','freeze');
	keyDown.setAttribute('begin','indefinite');
	var keyUp = keyDown.cloneNode() as SVGElement;
	keyUp.setAttribute('id','upstroke');
	


	basicKey.setAttribute("stroke","white");
	basicKey.setAttribute("fill","none");
	basicKey.setAttribute("d","\
		m 10 10 h 6 a 3 3, 0, 0, 1, 1.5 5.2 l -3 3 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -1.5 -5.2 l 3 -3 a 3 3, 0, 0, 1, 2 -1 Z \
		m 8.5 3 v 6 a 3 3, 0, 0, 1, -1 2 l -2.5 2.5 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -3 -3 v -6\
		");
	
	//var keyLayout = keyFile;
	console.log("help: ");
	try
	{
		console.log(keyFile);
	}
	catch(e)
	{
		console.log("ERROR: ");
		console.log(e);

	}
	

	let firstRow = 'tab q w e r t y u i o p [ ] \\'.split(' ');
	let secondRow = 'capslock a s d f g h j k l ; \' enter'.split(' ');
	let thirdRow = 'shift z x c v b n m , . / rshift'.split(' ');

	let isoLayout = [firstRow, secondRow, thirdRow];

	basicKey.setAttribute("id","key_test");
	keyboardSVG.appendChild(basicKey);
	for (const [row, keyList] of isoLayout.entries())
	{
		console.log(row + " shows " + keyList.entries());
		for (const [index, char] of keyList.entries())
		{

			var key = basicKey.cloneNode() as SVGElement;
			key.setAttribute("id","key_"+char);
			var upstroke = keyUp.cloneNode() as SVGElement;
			upstroke.setAttribute("id","upstroke_" + char);
			var downstroke = keyUp.cloneNode() as SVGElement;
			downstroke.setAttribute("id","downstroke_" + char);


			downstroke.setAttribute('values',"M "
			      	+ String(15*index) + " " + String(18*row) + " m 10 10 h 6 a 3 3, 0, 0, 1, 1.5 5.2 l -3 3 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -1.5 -5.2 l 3 -3 a 3 3, 0, 0, 1, 2 -1 Z\
				 		m 8.5 3 v 6 a 3 3, 0, 0, 1, -1 2 l -2.5 2.5 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -3 -3 v -6;\
				 	M "+ String(15*index) + " " + String(18*row) + " m 10 15 h 6 a 3 3, 0, 0, 1, 1.5 5.2 l -3 3 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -1.5 -5.2 l 3 -3 a 3 3, 0, 0, 1, 2 -1 Z\
			      		m 8.5 3 v 2 a 3 3, 0, 0, 1, -1 2 l -2.5 2.5 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -3 -3 v -2;");
			upstroke.setAttribute('values',"M "
			      	+ String(15*index) + " "+ String(18*row) + " m 10 15 h 6 a 3 3, 0, 0, 1, 1.5 5.2 l -3 3 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -1.5 -5.2 l 3 -3 a 3 3, 0, 0, 1, 2 -1 Z\
			      		m 8.5 3 v 2 a 3 3, 0, 0, 1, -1 2 l -2.5 2.5 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -3 -3 v -2;\
			      	M "+ String(15*index) + " " + String(18*row) + " m 10 10 h 6 a 3 3, 0, 0, 1, 1.5 5.2 l -3 3 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -1.5 -5.2 l 3 -3 a 3 3, 0, 0, 1, 2 -1 Z\
				 		m 8.5 3 v 6 a 3 3, 0, 0, 1, -1 2 l -2.5 2.5 a 3 3, 0, 0, 1, -2 1 h -6 a 3 3, 0, 0, 1, -3 -3 v -6;");

			key.appendChild(upstroke);
			key.appendChild(downstroke);
			key.setAttribute("d", "M " + String(15*index) + " " + String(18*row) + " " + key.getAttribute("d"));
			keyboardSVG.appendChild(key);
		}
	}

	



	console.log("creating binding");
	document.addEventListener('keydown', event => {
  		console.log('svg keydown: ', event.key);
  		let curKey = keyboardSVG.getElementById("key_" + event.key.toLowerCase()) as SVGElement;
  		(keyboardSVG.getElementById('downstroke_'+event.key.toLowerCase()) as any).beginElement();
  		curKey.setAttribute("fill","gray");
		});


	document.addEventListener('keyup', event => {
  		console.log('svg keydown: ', event.key);
  		let curKey = keyboardSVG.getElementById("key_" + event.key.toLowerCase()) as SVGSVGElement;
  		(keyboardSVG.getElementById('upstroke_'+event.key.toLowerCase()) as any).beginElement();
  		curKey.setAttribute("fill","none");
		});


	return keyboardSVG;
}