function toggleClass (element){

	var boxes = document.getElementsByClassName('color-box');
	var thisBox = element.childNodes[1];

	for(var i = 0; i < boxes.length; i++){
		if(boxes[i].classList.contains('expand-box')){
			boxes[i].classList.remove('expand-box');
			boxes[i].classList.add('collapse-box');
		}
	}

	thisBox.classList.toggle('expand-box');
	
}