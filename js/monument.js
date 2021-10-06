// Popup Tour Eiffel

let paris = document.getElementById('monumentTourEiffel');
let parisOverlay = document.getElementById('overlayTourEiffel');
let btnCloseTour = document.getElementById('btnCloseTourEiffel');
paris.addEventListener('click',() => openMoadl(parisOverlay));
btnCloseTour.addEventListener('click',() => closeModal(parisOverlay));
// Popup Arc de Triomphes

let arcDeTriomphes = document.getElementById('monumentArcDeTriomphes');
let arcDeTriomphesOverlay = document.getElementById('overlayArcDeTriomphes');
let btnCloseArc = document.getElementById('btnCloseArcDeTriomphes');
arcDeTriomphes.addEventListener('click',() => openMoadl(arcDeTriomphesOverlay));
btnCloseArc.addEventListener('click',() => closeModal(arcDeTriomphesOverlay));

// Popup Cathédrale Notre Dame

let cathedraleNotreDame = document.getElementById('monumentCathedraleNotreDame');
let cathedraleNotreDameOverlay = document.getElementById('overlayCathedraleNotreDame');
let btnCloseNotreDame = document.getElementById('btnCloseCathedraleNotreDame');
cathedraleNotreDame.addEventListener('click',() => openMoadl(cathedraleNotreDameOverlay));
btnCloseNotreDame.addEventListener('click',() => closeModal(cathedraleNotreDameOverlay));

//  Popup Le Louvres
let leLouvres = document.getElementById('monumentleLouvres');
let leLouvresOverlay = document.getElementById('overlayLouvresMonument');
let btnCloseleLouvres = document.getElementById('btnCloseLouvresMonument');
leLouvres.addEventListener('click',() => openMoadl(leLouvresOverlay));
btnCloseleLouvres.addEventListener('click',() => closeModal(leLouvresOverlay));

// Popup Panthéon
let pantheon = document.getElementById('monumentPantheon');
let pantheonOverlay = document.getElementById('overlayPantheon');
let btnClosePantheonMonument = document.getElementById('btnClosePantheon');
pantheon.addEventListener('click', () => openMoadl(pantheonOverlay));
btnClosePantheonMonument.addEventListener('click',() => closeModal(pantheonOverlay));

// Popup Place de la Concorde
let placeDeLaConcorde = document.getElementById('monumentLaConcorde');
let placeDeLaConcordeOverlay = document.getElementById('overlayLaConcorde');
let btnClosePlace = document.getElementById('btnCloseLaConcorde');
placeDeLaConcorde.addEventListener('click',() => openMoadl(placeDeLaConcordeOverlay));
btnClosePlace.addEventListener('click',() => closeModal(placeDeLaConcordeOverlay));

// function ouverture de la Popup

function openMoadl(monument) {
    monument.style.display = 'block';
}

// function fermeture de la popup

function closeModal(monument){
    monument.style.display =  'none';
}