const projets = [
    { projetId: 'projet1', detailsId: 'detailsProjet1' },
    { projetId: 'projet2', detailsId: 'detailsProjet2' },

];

const fonctionsProjets = {};

projets.forEach((projets) => {
    fonctionsProjets[projets.projetId] = function () {
        Details(projets.projetId);
    };

    fonctionsProjets[projets.detailsId] = function () {
        Retour(projets.detailsId, projets.projetId);
    };
});

function Details(projetId) {
    console.log(projetId);
    document.getElementById(projetId).style.display = 'none';
    document.getElementById('details' + projetId).style.display = 'block';
}

function Retour(detailsId, projetId) {
    console.log(detailsId);
    document.getElementById(detailsId).style.display = 'none';
    document.getElementById(projetId).style.display = 'block';
}



const projet1 = ["Pyramide_1.png", "Pyramide_2.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0) {
        numero = slide.length - 1;
    }
    if (numero > slide.length - 1) {
        numero = 0;
    }

    document.getElementById("Projet1").src = slide[numero];
}