// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const divMembElement = document.querySelector('div.team-member');


let singleMember;


const teamList = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'

    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
];

let singleName;


for (let i = 0 ; i < teamList.length ; i++){
    console.log('Nome:' + teamList[i].name);
    console.log('Ruolo:' + teamList[i].role);
    console.log('Foto:' + teamList[i].img);
    // const img = document.createElement ("img");    
    
    singleName = "<div class='cards'> <h1>" + teamList[i].name + "</h1> <h2>" + teamList[i].role + "</h2> <img src='./img/" + teamList[i].img +"' class='w-75 rounded-3BONU'> </div>" ;
    
    // img.src = "img/" + teamList[i].img;
    divMembElement.innerHTML += singleName;
    // divMembElement.append (img);
}
