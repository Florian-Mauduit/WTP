// Popup Tour Eiffel

let paris = document.getElementById('monumentTourEiffel');
let parisOverlay = document.getElementById('overlayTourEiffel');
let btnCloseTour = document.getElementById('btnCloseTourEiffel');
paris.addEventListener('click',openMoadl);
btnCloseTour.addEventListener('click',closeModal);
// Popup Arc de Triomphes

let arcDeTriomphes = document.getElementById('monumentArcDeTriomphes');
let arcDeTriomphesOverlay = document.getElementById('overlayArcDeTriomphes');
let btnCloseArc = document.getElementById('btnCloseArcDeTriomphes');
arcDeTriomphes.addEventListener('click', openMoadl);
btnCloseArc.addEventListener('click',closeModal);

// Popup Cathédrale Notre Dame

let cathedraleNotreDame = document.getElementById('monumentCathedraleNotreDame');
let cathedraleNotreDameOverlay = document.getElementById('overlayCathedraleNotreDame');
let btnCloseNotreDame = document.getElementById('btnCloseCathedraleNotreDame');
cathedraleNotreDame.addEventListener('click', openMoadl);
btnCloseNotreDame.addEventListener('click',closeModal);

//  Popup Le Louvres
let leLouvres = document.getElementById('monumentleLouvres');
let leLouvresOverlay = document.getElementById('overlayLouvresMonument');
let btnCloseleLouvres = document.getElementById('btnCloseLouvresMonument');
leLouvres.addEventListener('click', openMoadl);
btnCloseleLouvres.addEventListener('click',closeModal);

// Popup Panthéon
let pantheon = document.getElementById('monumentPantheon');
let pantheonOverlay = document.getElementById('overlayPantheon');
let btnClosePantheonMonument = document.getElementById('btnClosePantheon');
pantheon.addEventListener('click', openMoadl);
btnClosePantheonMonument.addEventListener('click',closeModal);

// Popup Place de la Concorde
let placeDeLaConcorde = document.getElementById('monumentLaConcorde');
let placeDeLaConcordeOverlay = document.getElementById('overlayLaConcorde');
let btnClosePlace = document.getElementById('btnCloseLaConcorde');
placeDeLaConcorde.addEventListener('click', openMoadl);
btnClosePlace.addEventListener('click',closeModal);

// function ouverture de la Popup

function openMoadl() {
    parisOverlay.style.display = 'block';
    arcDeTriomphesOverlay.style.display = 'block';
    cathedraleNotreDameOverlay.style.display = 'block';
    leLouvresOverlay.style.display = 'block';
    pantheonOverlay.style.display = 'block';
    placeDeLaConcordeOverlay.style.display = 'block';
}

// function fermeture de la popup

function closeModal(){
    parisOverlay.style.display = 'none';
    arcDeTriomphesOverlay.style.display = 'none';
    cathedraleNotreDameOverlay.style.display = 'none';
    leLouvresOverlay.style.display = 'none';
    pantheonOverlay.style.display = 'none';
    placeDeLaConcordeOverlay.style.display = 'none';
}