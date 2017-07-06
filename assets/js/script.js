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

new SiriWave({
  width: 2000,
  height: 100,
  speed: 0.01,
  container: document.getElementById('waves'),
  autostart: true,
});

new SiriWave({
  width: 1500,
  height: 100,
  speed: 0.008,
  container: document.getElementById('waves-bg'),
  autostart: true,
  

});