function goHome (){
    var home = document.getElementById('hero');
    var allSections = document.getElementsByTagName('section');
    var boxes = document.getElementsByClassName('animated-boxes');
    console.log("ALL: ", typeof allSections);

    home.style.display = 'block';

    for (var i = 1; i < allSections.length; i++){
        allSections[i].style.display = 'none';
        if(boxes[i - 1].classList.contains('expand-box')){
            boxes[i-1].classList.remove('expand-box');
            boxes[i-1].classList.add('collapse-box');
        }
            
    }

}

function toggleClass (element){

	var boxes = document.getElementsByClassName('animated-boxes');
	var thisBox = element.childNodes[1];
    
	for(var i = 0; i < boxes.length; i++){
		if(boxes[i].classList.contains('expand-box')){
			boxes[i].classList.remove('expand-box');
			boxes[i].classList.add('collapse-box');
		}
	}
    
	thisBox.classList.toggle('expand-box');
    showSection(thisBox);
}

function showSection(box){

    var sections = document.getElementsByTagName('section');

    for(var s = 0; s < sections.length; s++){
        if(box.dataset.section !== sections[s].id){
            sections[s].style.display = 'none';
        }
        if(box.dataset.section === sections[s].id){
            sections[s].style.display = 'block';
        }
    }
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