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

var wavesFore = new SiriWave({
  width: 2000,
  height: 100,
  speed: 0.01,
  container: document.getElementById('waves'),
  autostart: true,
  color: '#eec9f2'
});

var waveBg = new SiriWave({
  width: 1500,
  height: 70,
  speed: 0.008,
  container: document.getElementById('waves-bg'),
  autostart: true,
  color: "#ba32dc"

});

var wavesBlue = new SiriWave({
  width: 1500,
  height: 85,
  speed: 0.008,
  container: document.getElementById('waves-blue'),
  autostart: true,
  color: "#55b6f7"

});