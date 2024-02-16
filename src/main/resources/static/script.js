const billetter = [];
function kjøp(){
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;
    let billett = [];
    let ut = "";

    if (!telefon){
        alert("Feil telefon nummer!");
    }

    switch (film){
        case "Pirates of the Caribbean" :{
            billett = {film,antall,fornavn,etternavn,telefon,epost};
            billetter.push(billett);
        }
            break;
        case "Cars 4" :{
            billett = {film,antall,fornavn,etternavn,telefon,epost};
            billetter.push(billett);
        }
            break;
        case "Det regner kjøttboller" :{
            billett = {film,antall,fornavn,etternavn,telefon,epost};
            billetter.push(billett);
        }
            break;
        case "Titanic" :{
            billett = {film,antall,fornavn,etternavn,telefon,epost};
            billetter.push(billett);
        }
            break;
        default: alert("Du må velge film");
            break;
    }

    for (let billett of billetter){
        ut += "Film: " + billett.film + "<br>" + "Antall: " + billett.antall + "<br>" + "Fornavn: " + billett.fornavn +
            "<br>" + "Etternavn: " + billett.etternavn + "<br>" + "Telefon: " + billett.telefon + "<br>" + "Epost: " +
            billett.epost + "<br><br>";
    }
    document.getElementById("utFelt").innerHTML = ut;
    // Her må man ha input validation
    // Her trenger jeg en funsjon som clearer alle input fieldene etter du har submitted
}
function slett(){
    document.getElementById("utFelt").innerHTML = "";
    billetter.length = 0;
}