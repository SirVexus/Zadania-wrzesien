import Note  from '../../src/Note';
//const Note = require('../../src/Note');

describe('Notes functionality', () => {
    let note: Note;
    let randomString: string;

    beforeEach(() => {
        note = new Note();
        randomString = Math.random().toString();
    })

    it('should be created', () => {
        note = new Note();
        expect(note).toBeDefined();
    })

    it('should save Note', () => {
        const result = note.saveToNote(randomString, "title","text", "lightgray", false);
        expect(result.id).toEqual(randomString);
        expect(result.title).toEqual("title");
        expect(result.text).toEqual("text");
        expect(result.bgColor).toEqual("lightgray");
        expect(result.isPinned).toEqual(false);
    })

    it('should throw error when title is empty', () => {
        expect(() => note.saveToNote(randomString, "", "text", "lightgray", false))
        .toThrow("Title can`t be empty")
    })

    it('should format new notes in correct format', () => {
        const result = note.saveToNote(randomString, "title","text", "lightgray", false);
        expect(result.date).toHaveLength(10);
    })

    it('should throw error when note id is empty', () => {
        expect(() => note.saveToNote('', randomString, "text", "lightgray", false))
        .toThrow("Note id can`t be empty");
    })
})
