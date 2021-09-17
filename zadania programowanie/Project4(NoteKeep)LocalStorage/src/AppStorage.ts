class AppStorage{

    constructor(){}
    
    saveToLocal(notes: INote[]){
        localStorage.setItem("notes", JSON.stringify(notes));
    }
// "notes" - klucz do zapisu obiektu listy notatek, JSON.stringify(notes)) stringify robi string a parse obiekt z stringa) local storage tez wbudowana metoda jsa sluzy do dostepu do pam wew przegladarki
// zapisujac w pam podrecznej musze podac klucz "notes" moze byc dowlolna nazwa
    getFromLocal(){
        const notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : null;
    }
}
const appStorage = new AppStorage();

export default  appStorage;
