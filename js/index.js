
function Voir() {
    document.getElementById('github').style.display = 'block';
    document.getElementById('img-git').style.display = 'block';
    document.getElementById('codepen').style.display = 'block';
    document.getElementById('img-codepen').style.display = 'block';
    document.getElementById('profil-btn-close').style.display = 'block';
    document.getElementById('profil-btn-voir').style.display = 'none';
}

function Fermer(){
    document.getElementById('github').style.display = 'none';
    document.getElementById('img-git').style.display = 'none';
    document.getElementById('codepen').style.display = 'none';
    document.getElementById('img-codepen').style.display = 'none';
    document.getElementById('profil-btn-close').style.display = 'none';
    document.getElementById('profil-btn-voir').style.display = 'block';

}

const projets = [
    { projetId: 'projet1', detailsId: 'detailsProjet1' },
    { projetId: 'projet2', detailsId: 'detailsProjet2' },
    { projetId: 'projet3', detailsId: 'detailsProjet3' },
    { projetId: 'projet4', detailsId: 'detailsProjet4' },
];

function Details(projetId) {
    console.log("Début Details");
    console.log(projetId);
    document.getElementById(projetId).style.display = 'none';
    document.getElementById(projets.find(p => p.projetId === projetId).detailsId).style.display = 'block';
    console.log("FIn Details");
}

function Retour(detailsId) {
    console.log("Début Retour");
    console.log(detailsId);
    document.getElementById(detailsId).style.display = 'none';
    document.getElementById(projets.find(p => p.detailsId === detailsId).projetId).style.display = 'block';
    console.log("FIn Retour");
}