var soundElements = [document.querySelector('[data-sound="boom"]'),
    document.querySelector('[data-sound="clap"]'),
    document.querySelector('[data-sound="hihat"]'),
    document.querySelector('[data-sound="kick"]'),
    document.querySelector('[data-sound="openhat"]'),
    document.querySelector('[data-sound="ride"]'),
    document.querySelector('[data-sound="snare"]'),
    document.querySelector('[data-sound="tink"]')
];
var Sounds;
(function (Sounds) {
    Sounds[Sounds["boom"] = 0] = "boom";
    Sounds[Sounds["clap"] = 1] = "clap";
    Sounds[Sounds["hithat"] = 2] = "hithat";
    Sounds[Sounds["kick"] = 3] = "kick";
    Sounds[Sounds["openhat"] = 4] = "openhat";
    Sounds[Sounds["ride"] = 5] = "ride";
    Sounds[Sounds["snare"] = 6] = "snare";
    Sounds[Sounds["tink"] = 7] = "tink";
})(Sounds || (Sounds = {}));
var playButtons = [
    document.querySelector('#track1Play'),
    document.querySelector('#track2Play'),
    document.querySelector('#track3Play'),
    document.querySelector('#track4Play')
];
var recordButtons = [
    document.querySelector('#track1Record'),
    document.querySelector('#track2Record'),
    document.querySelector('#track3Record'),
    document.querySelector('#track4Record')
];
var checkBoxes = [
    document.querySelector('#track1Checkbox'),
    document.querySelector('#track2Checkbox'),
    document.querySelector('#track3Checkbox'),
    document.querySelector('#track4Checkbox')
];
var PlaySelectedButton = document.querySelector('#PlaySelectedButton');
var chanels = [];
chanels[0] = [];
chanels[1] = [];
chanels[2] = [];
chanels[3] = [];
var startRecordTimes = [];
document.body.addEventListener('keypress', handleKeyPress);
PlaySelectedButton.addEventListener('click', playSelectedTracks);
recordButtons.forEach(function (button, i) { return button.addEventListener('click', function (ev) {
    chanels[i] = [];
    startRecordTimes[i] = ev.timeStamp;
}); });
playButtons.forEach(function (button, i) { return button.addEventListener('click', function () {
    chanels[i].forEach(function (sound) {
        var timeout = sound.time - startRecordTimes[i];
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}); });
function handleKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    checkBoxes.forEach(function (checkbox, i) {
        if (checkBoxes[i].checked) {
            chanels[i].push({
                key: key,
                time: time
            });
        }
    });
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case 'q':
            soundElements[Sounds.boom].currentTime = 0;
            soundElements[Sounds.boom].play();
            break;
        case 'w':
            soundElements[Sounds.clap].currentTime = 0;
            soundElements[Sounds.clap].play();
            break;
        case 'e':
            soundElements[Sounds.hithat].currentTime = 0;
            soundElements[Sounds.hithat].play();
            break;
        case 'r':
            soundElements[Sounds.kick].currentTime = 0;
            soundElements[Sounds.kick].play();
            break;
        ////////////////////////////////
        case 'a':
            soundElements[Sounds.openhat].currentTime = 0;
            soundElements[Sounds.openhat].play();
            break;
        case 's':
            soundElements[Sounds.ride].currentTime = 0;
            soundElements[Sounds.ride].play();
            break;
        case 'd':
            soundElements[Sounds.snare].currentTime = 0;
            soundElements[Sounds.snare].play();
            break;
        case 'f':
            soundElements[Sounds.tink].currentTime = 0;
            soundElements[Sounds.tink].play();
            break;
    }
}
function playSelectedTracks() {
    checkBoxes.forEach(function (box, i) {
        if (checkBoxes[i].checked) {
            chanels[i].forEach(function (sound) {
                var timeout = sound.time - startRecordTimes[i];
                setTimeout(function () { return playSound(sound.key); }, timeout);
            });
        }
    });
}
