document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const href = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Durée de la transition en millisecondes
        });
    });
    document.body.classList.add('fade-in');
});

window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
<script>
    // Sélectionner l'image par son ID
    const image = document.getElementById('clickable-image');

    // Ajouter un événement de clic sur l'image
    image.addEventListener('click', () => {
        alert("Vous avez cliqué sur l'image !");
    });
// Ajouter un événement de clic au bouton Home
document.getElementById('home-button').addEventListener('click', () => {
    window.location.href ='page principale.html';
});
</script>
