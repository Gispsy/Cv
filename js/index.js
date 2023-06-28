
function Voir() {
    document.getElementById('github').style.display = 'block';
    document.getElementById('img-git').style.display = 'block';
    document.getElementById('codepen').style.display = 'block';
    document.getElementById('img-codepen').style.display = 'block';
    document.getElementById('profil-btn-close').style.display = 'block';
    document.getElementById('profil-btn-voir').style.display = 'none';
}

function Fermer() {
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

function reloadElements() {
    // Sélectionner les barres de progression des frameworks
    var bootstrapBarre = document.querySelector('.fa-bootstrap + .framework-icone + .framework-base .framework-barre');
    var symfonyBarre = document.querySelector('.fa-symfony + .framework-icone + .framework-base .framework-barre');
    var reactBarre = document.querySelector('.fa-react + .framework-icone + .framework-base .framework-barre');

    // Réinitialiser la largeur des barres de progression à 0%
    bootstrapBarre.style.width = '0%';
    symfonyBarre.style.width = '0%';
    reactBarre.style.width = '0%';

    // Générer des valeurs aléatoires pour la progression
    var bootstrapProgress = Math.random() * 100;
    var symfonyProgress = Math.random() * 100;
    var reactProgress = Math.random() * 100;

    // Mettre à jour la largeur des barres de progression avec les valeurs aléatoires
    bootstrapBarre.style.width = bootstrapProgress + '%';
    symfonyBarre.style.width = symfonyProgress + '%';
    reactBarre.style.width = reactProgress + '%';

    // Ajouter la classe 'reset' pour réinitialiser l'animation
    bootstrapBarre.classList.add('reset');
    symfonyBarre.classList.add('reset');
    reactBarre.classList.add('reset');

    // Attendre un court instant avant de supprimer la classe 'reset' pour activer l'animation
    setTimeout(function () {
        // Supprimer la classe 'reset' pour activer l'animation
        bootstrapBarre.classList.remove('reset');
        symfonyBarre.classList.remove('reset');
        reactBarre.classList.remove('reset');
    }, 100);
}