export default {
    name: 'HeaderComponent',
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        // Génère des valeurs aléatoires pour les couleurs RGB
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
  
        // Applique la couleur aléatoire au survol du lien
        link.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      });
  
      link.addEventListener('mouseout', () => {
        // Rétablit la couleur d'arrière-plan initiale quand le survol est terminé
        link.style.backgroundColor = '';
      });
    });
  });
  