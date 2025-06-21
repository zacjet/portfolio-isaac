function showSection(section) {
  const contentArea = document.getElementById('contentArea');
  contentArea.innerHTML = '';

  if (section === 'gonnzaga') {
    const images = [
      'images/gonzaga1.jpg',
      'images/gonzaga2.jpg',
      'images/gonzaga3.jpg'
    ];

    images.forEach(function(src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Foto do projeto Gonnzaga';
      contentArea.appendChild(img);
    });

  } else if (section === 'pec') {
    const title = document.createElement('h2');
    title.textContent = 'Pec - Tudo Que Eu Quero';

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/eqK-M_MnRgg";
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.aspectRatio = "16 / 9";
    iframe.style.maxWidth = "100%";
    iframe.style.border = "none";

    contentArea.appendChild(title);
    contentArea.appendChild(iframe);
  }
}

// Exibe o projeto Gonnzaga por padrão ao abrir o site
showSection('gonnzaga');
