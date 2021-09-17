import app from './App';
import appStorage from './AppStorage';
import Note from './Note';
import Notes from './notes';
import './SCSS/reset.scss';
import './SCSS/main.scss';

const note = new Note();
const notes = new Notes();
const pinned: HTMLDivElement = document.querySelector("#pinnedNotes");
const notesDiv: HTMLDivElement = document.querySelector("#notes");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");
notes.pinnedNotesDiv = pinned;
notes.notesDiv = notesDiv;

submitButton.addEventListener('click', () => {
    let newNote = note.saveToNote(app.counter, inputTitle.value,inputText.value, "lightgray", false);
    note.noteToArr(newNote);
    notes.notesDiv.appendChild(notes.createNote(newNote));
});

window.addEventListener('beforeunload', function() {
    appStorage.saveToLocal(app.noteArr);
});
// powyzej : za nim strona sie zamknie zapisuje notatki w pam podrecznej

window.addEventListener('load', () => {
    app.noteArr = appStorage.getFromLocal();
    //pow: wczytuje z pam podr

    if(app.noteArr){
        app.noteArr.forEach((elem, index) => {

            app.noteArr[index] = app.noteArr[index];

            if(app.noteArr[index].isPinned){
                pinned.appendChild(notes.createNote(app.noteArr[index]));
            }else{
                notesDiv.appendChild(notes.createNote(app.noteArr[index]));
            }
        });
    }
});
