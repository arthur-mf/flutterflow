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

const videoContainer = document.createElement('div');
videoContainer.id = 'videoContainer';
videoContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
videoContainer.style.display = 'none';

const videoElement = document.createElement('video');
videoElement.width = 640; // Définissez la largeur de la vidéo
videoElement.height = 360; // Définissez la hauteur de la vidéo
videoElement.controls = true; // Ajoutez des contrôles vidéo
videoElement.autoplay = true; // Lecture automatique de la vidéo

const sourceElement = document.createElement('source');
sourceElement.src = 'https://arthur-mf.github.io/flutterflow/loading.mp4'; // Remplacez par l'URL de votre vidéo
sourceElement.type = 'video/mp4';

videoElement.appendChild(sourceElement);
videoContainer.appendChild(videoElement);

document.body.appendChild(overlay);
document.body.appendChild(videoContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    videoContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});

window.addEventListener('load', hideOverlay);
