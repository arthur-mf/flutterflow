// Créez l'overlay et les éléments Lottie
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

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottie';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Ajoutez les éléments au body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Fonction pour cacher l'overlay et afficher le Lottie
function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
}

// Ajoutez un écouteur d'événement pour cacher l'overlay lorsque tous les fichiers JS externes sont chargés
document.addEventListener('DOMContentLoaded', () => {
    // Remplacez les lignes suivantes par le code réel qui charge vos fichiers JS externes
    // À des fins de démonstration, nous utiliserons un setTimeout pour simuler le chargement de fichiers JS externes.
    setTimeout(hideOverlay, 100); // Remplacez par votre code de chargement réel.
});

// Fallback : Si toutes les ressources externes sont chargées et que l'événement DOMContentLoaded ne se déclenche pas,
// nous cacherons toujours l'overlay lorsque l'événement de chargement de la fenêtre est déclenché.
window.addEventListener('load', hideOverlay);

// Ajoutez ce code à votre fichier JavaScript pour charger l'animation Lottie
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // ID de l'élément HTML
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'loader.json' // Chemin vers votre fichier d'animation Lottie
});
