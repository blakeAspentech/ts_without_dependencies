import { someFunction } from "./other_module";
import {BlobElement} from "./views/blobElement";
import {createKeyboard} from "./views/keyboard";
//import keyFile from './resources/keyboard.json';

document.addEventListener('DOMContentLoaded', (_event) => {
  someFunction();
  const radius:number = 10;
  /*function keycap(x:number,y:number,ctx:CanvasRenderingContext2D, isLeft:boolean = true): void {
    /*ctx.moveTo(x,y + radius);
    ctx.arcTo(x,y, x+radius,y, radius);
    ctx.lineTo(x+radius*2, y);
    ctx.arcTo(x+radius*3, y, x+radius*3,y+radius, radius);
    ctx.lineTo(x+radius*3, y+radius*2);
    ctx.arcTo(x+radius*3,y+radius*3, x+radius*2,y+radius*3, radius);
    ctx.lineTo(x+radius,y+radius*3);
    ctx.arcTo(x, y+radius*3, x, y+radius*2, radius);
    ctx.lineTo(x,y+radius);*
    ctx.roundRect(x,y,radius*2,radius*2, radius);

    if (isLeft)
    {
      x=x-radius/2
      y=y+radius
      //keycap(x,y,ctx,false)
    ctx.moveTo(x,y + radius);
    //ctx.arcTo(x,y, x+radius,y, radius);
    ctx.moveTo(x+radius/2+radius*2.75, y+radius*1.75);
    //ctx.arcTo(x+radius*3, y, x+radius*3,y+radius, radius);
    ctx.lineTo(x+radius*3, y+radius*2);
    ctx.arcTo(x+radius*3,y+radius*3, x+radius*2,y+radius*3, radius);
    ctx.lineTo(x+radius,y+radius*3);
    ctx.arcTo(x, y+radius*3, x, y+radius*2, radius);
    ctx.lineTo(x,y+radius);
    ctx.lineTo(x+radius*.75,y-radius*.75);
      
    }

    
  }*/
  let grid: HTMLElement = document.getElementById("gridContainer")!;
  let blob: BlobElement = new BlobElement("blah");
  let blobTwo: BlobElement = new BlobElement("bleh");
  let keyboard: SVGSVGElement = createKeyboard();

  
  window.addEventListener('keydown', event => {
      console.log('grid keydown: ', event.key);
      if(event.key == 'a')
      {
        console.log(keyboard.children[0]);
      }
      
    });
  grid.appendChild(keyboard);
  keyboard.focus();
  //createKeyboard();
  /*const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;

  ctx.beginPath();
  ctx.imageSmoothingEnabled = true;
  ctx.lineWidth = 2.5;
  
  keycap(50,50,ctx);
  ctx.strokeStyle = "white";
  ctx.stroke();

  //grid.appendChild(canvas)
  /*grid.appendChild(blob.element);
  grid.appendChild(blobTwo.element);
  for (let x = 0; x<10; x++)
  {
    blob = new BlobElement(x.toString());
    grid.appendChild(blob.element);
  }*/

  console.log("here");
  console.log(blob);

});
