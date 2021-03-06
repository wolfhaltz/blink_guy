function blink(){

    var btn = document.getElementsByClassName('btn');
    var btnBlink = document.getElementsByClassName('btn--blink');

    console.log(btnBlink);

    if(btnBlink[0] ==  null){
        blinkTheGuy();
        return
    }

    if(btn && btnBlink[0] != null){
        unblinkTheGuy();
        return
    }
}

function blinkTheGuy(){
    var hair = document.getElementsByClassName('hair');

    var head = document.getElementsByClassName('head');
    var forehead = document.getElementsByClassName('forehead');
    
    var mouth = document.getElementsByClassName('mouth');

    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');

    var shoulder = document.getElementsByClassName('shoulder');
    var trunk = document.getElementsByClassName('trunk');
    var armsLeft = document.getElementsByClassName('arms--left');
    var armsRight = document.getElementsByClassName('arms--right');

    var sectionBtn = document.getElementsByClassName('section-btn');
    var btn = document.getElementsByClassName('btn');

    var music = document.getElementsByClassName('music-lyrics');

    hair[0].classList.add('fringe');

    head[0].classList.add('skin--blink');
    head[0].classList.add('head--blink');
    forehead[0].classList.add('skin--blink');
    
    mouth[0].classList.add('mouth--blink');
    mouth[0].classList.remove('mouth');

    eyeLeft[0].classList.add('eyes--blink');
    eyeRight[0].classList.add('eyes--blink');

    shoulder[0].classList.add('shoulder--blink');
    trunk[0].classList.add('trunk--blink');
    armsLeft[0].classList.add('arms--left--blink');
    armsRight[0].classList.add('arms--right--blink');

    sectionBtn[0].classList.add('section-btn--blink');
    btn[0].classList.add('btn--blink');

    music[0].classList.add('music-lyrics--blink');
}

function unblinkTheGuy(){
    var hair = document.getElementsByClassName('hair');

    var head = document.getElementsByClassName('head');
    var forehead = document.getElementsByClassName('forehead');
    
    var mouth = document.getElementsByClassName('mouth--blink');

    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');

    var shoulder = document.getElementsByClassName('shoulder');
    var trunk = document.getElementsByClassName('trunk');
    var armsLeft = document.getElementsByClassName('arms--left');
    var armsRight = document.getElementsByClassName('arms--right');

    var sectionBtn = document.getElementsByClassName('section-btn');
    var btn = document.getElementsByClassName('btn');

    var music = document.getElementsByClassName('music-lyrics');

    hair[0].classList.remove('fringe');

    head[0].classList.remove('skin--blink');
    head[0].classList.remove('head--blink');
    forehead[0].classList.remove('skin--blink');
    
    mouth[0].classList.add('mouth');
    mouth[0].classList.remove('mouth--blink');

    eyeLeft[0].classList.remove('eyes--blink');
    eyeRight[0].classList.remove('eyes--blink');

    shoulder[0].classList.remove('shoulder--blink');
    trunk[0].classList.remove('trunk--blink');
    armsLeft[0].classList.remove('arms--left--blink');
    armsRight[0].classList.remove('arms--right--blink');

    sectionBtn[0].classList.remove('section-btn--blink');
    btn[0].classList.remove('btn--blink');

    music[0].classList.remove('music-lyrics--blink');
}