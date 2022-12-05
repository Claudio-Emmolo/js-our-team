// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const divMembElement = document.querySelector('div.team-member');

const h1Element = document.createElement ('h1');
const h2Element = document.createElement ('h2');
const pElement = document.createElement ('p');

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

for (let i = 0 ; i < teamList.length ; i++){
    console.log('Nome:' + teamList[i].name);
    console.log('Ruolo:' + teamList[i].role);
    console.log('Foto:' + teamList[i].img);

    h1Element.innerText = teamList[i].name;
    h2Element.innerText = teamList[i].role;
    pElement.innerText = teamList[i].img;
    
    divMembElement.append(h1Element);
    divMembElement.append(h2Element);
    divMembElement.append(pElement);
}
