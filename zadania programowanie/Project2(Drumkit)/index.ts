const soundElements: HTMLAudioElement[] = [document.querySelector('[data-sound="boom"]'), 
                                        document.querySelector('[data-sound="clap"]'),
                                        document.querySelector('[data-sound="hihat"]'),
                                        document.querySelector('[data-sound="kick"]'),
                                        document.querySelector('[data-sound="openhat"]'),
                                        document.querySelector('[data-sound="ride"]'),
                                        document.querySelector('[data-sound="snare"]'),
                                        document.querySelector('[data-sound="tink"]') 
                                    ];
enum Sounds {
    boom = 0,
    clap = 1,
    hithat = 2,
    kick = 3,
    openhat = 4,
    ride = 5,
    snare = 6,
    tink = 7
}
const playButtons: HTMLButtonElement[] = [
    document.querySelector('#track1Play'),
    document.querySelector('#track2Play'),
    document.querySelector('#track3Play'),
    document.querySelector('#track4Play')
  ];
const recordButtons: HTMLButtonElement[] = [
      document.querySelector('#track1Record'),
      document.querySelector('#track2Record'),
      document.querySelector('#track3Record'),
      document.querySelector('#track4Record')
    ];
const checkBoxes: HTMLInputElement[] = [
  document.querySelector('#track1Checkbox'),
  document.querySelector('#track2Checkbox'),
  document.querySelector('#track3Checkbox'),
  document.querySelector('#track4Checkbox')
];
const PlaySelectedButton: HTMLInputElement = document.querySelector('#PlaySelectedButton');
const chanels: {key,time}[][] = [];
chanels[0]=[];
chanels[1]=[];
chanels[2]=[];
chanels[3]=[];
const startRecordTimes: number[] = [];

document.body.addEventListener('keypress', handleKeyPress);
PlaySelectedButton.addEventListener('click', playSelectedTracks);

recordButtons.forEach((button, i: number) => button.addEventListener('click', (ev) => {
    chanels[i] = [];
    startRecordTimes[i] = ev.timeStamp;
}))

playButtons.forEach((button, i: number) => button.addEventListener('click', () => {
        chanels[i].forEach(sound =>{
        const timeout = sound.time - startRecordTimes[i];
        setTimeout(() => playSound(sound.key),timeout);
    })
}))

function handleKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    checkBoxes.forEach((checkbox, i) => {
        if(checkBoxes[i].checked) {
            chanels[i].push({
            key,
            time
            })
        }
    })
    playSound(key);
}   

function playSound(key: string){

    switch(key){
        case 'q':
            soundElements[Sounds.boom].currentTime = 0;
            soundElements[Sounds.boom].play()
        break;

        case 'w':
            soundElements[Sounds.clap].currentTime = 0;
            soundElements[Sounds.clap].play()
        break;

        case 'e':
            soundElements[Sounds.hithat].currentTime = 0;
            soundElements[Sounds.hithat].play()
        break;

        case 'r':
            soundElements[Sounds.kick].currentTime = 0;
            soundElements[Sounds.kick].play()
        break;
        ////////////////////////////////
        case 'a':
            soundElements[Sounds.openhat].currentTime = 0;
            soundElements[Sounds.openhat].play()
        break;

        case 's':
            soundElements[Sounds.ride].currentTime = 0;
            soundElements[Sounds.ride].play()
        break;

        case 'd':
            soundElements[Sounds.snare].currentTime = 0;
            soundElements[Sounds.snare].play()
        break;

        case 'f':
            soundElements[Sounds.tink].currentTime = 0;
            soundElements[Sounds.tink].play()
        break;
    }
}

function playSelectedTracks() {
    checkBoxes.forEach((box, i:number) => {
        if(checkBoxes[i].checked){
            chanels[i].forEach(sound =>{
                const timeout = sound.time - startRecordTimes[i];
                setTimeout(() => playSound(sound.key),timeout);
            })
        }
    });
}


