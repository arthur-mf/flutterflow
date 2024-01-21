const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const gifContainer = document.createElement('div');
gifContainer.id = 'gifContainer';
gifContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const gifElement = document.createElement('img');
gifElement.width = 640; // Définissez la largeur du GIF
gifElement.height = 360; // Définissez la hauteur du GIF
gifElement.src = 'https://arthur-mf.github.io/flutterflow/loading.gif'; // Remplacez par l'URL de votre GIF
gifElement.style.userSelect = 'none'; // Désactiver la sélection de texte
gifElement.style.pointerEvents = 'none'; // Désactiver les événements de la souris sur l'image

gifContainer.appendChild(gifElement);

document.body.appendChild(overlay);
document.body.appendChild(gifContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    gifContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});

window.addEventListener('load', hideOverlay);
