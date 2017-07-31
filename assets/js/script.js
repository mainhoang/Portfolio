function goHome (){

    var hero = document.getElementById('hero');
    var sections = document.getElementsByTagName('section');
    var animatedBoxes = document.getElementsByClassName('animated-boxes');

    hero.style.display = 'block';

    for (var i = 1; i < sections.length; i++){

        sections[i].style.display = 'none';

        if(animatedBoxes[i - 1].classList.contains('expand-box')){
            animatedBoxes[i - 1].classList.remove('expand-box');
            animatedBoxes[i - 1].classList.add('collapse-box');
        }

    }

}

function toggleClass (element){

	var animatedBoxes = document.getElementsByClassName('animated-boxes');
	var thisBox = element.childNodes[1];

	for(var i = 0; i < animatedBoxes.length; i++){
        // collapse active link
        if(animatedBoxes[i].classList.contains('expand-box') && window.innerWidth <= 420){
            animatedBoxes[i].classList.remove('expand-box');
			animatedBoxes[i].classList.add('collapse-box');
        }
		else if(animatedBoxes[i].classList.contains('expand-box')){
			animatedBoxes[i].classList.remove('expand-box');
			animatedBoxes[i].classList.add('collapse-box');
		}

        if(animatedBoxes[i].dataset.section !== thisBox.dataset.section && window.innerWidth <= 420){
            animatedBoxes[i].parentNode.style.top = '0';
            animatedBoxes[i].parentNode.style.position = 'absolute';
            animatedBoxes[i].parentNode.style.opacity = '0';
        }

	}

	thisBox.classList.toggle('expand-box');
    thisBox.classList.remove('collapse-box');
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
