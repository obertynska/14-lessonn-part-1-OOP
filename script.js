'use strict';

let selector1 = prompt('Selector', ''),
    height1  = prompt('Height', ''), 
    width1  = prompt('Width', ''), 
    bg1  = prompt('Back-ground color', ''), 
    fontsize1 = prompt('Fontsize', ''),
    text1 = prompt('Text');



const DomElement = function(selector, height, width, bg, fontsize, text){
	  this.selector = selector;
	  this.height = height;
	  this.width = width; 
	  this.bg = bg;
	  this.fontsize = fontsize;
      this.text = text;
	  this.createElement = function(){
		
	  let element;

		if(this.selector[0] === '#'){
			element = document.createElement('p');
			element.setAttribute('id', 'best');
		} else if (this.selector[0] === '.') {
			element = document.createElement('div');
			element.setAttribute('class', 'block');
		};
		document.body.appendChild(element);
		element.textContent = this.text;
		element.style.cssText = `height: ${this.height}px;
		                         background-color: ${this.bg};
		                         width: ${this.width}px;
		                         font-size: ${this.fontsize}px;
		                       `;
	};
            
};

let obj = new DomElement(selector1, height1, width1, bg1, fontsize1, text1);
obj.createElement();
