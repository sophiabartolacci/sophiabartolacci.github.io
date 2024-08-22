document.addEventListener("DOMContentLoaded", function () {
  let gallery = [
    {
      title: "Places",
      image: "../photos/coverPhotos/places.jpg",
      alt: "Cover photo for Places",
      link: "./places.html",
      class: "places-cover",
    },
    {
      title: "Portraits",
      image: "../photos/coverPhotos/portraits.jpg",
      alt: "Cover photo for Portraits",
      link: "./portraits.html",
      class: "portraits-cover",
    },
    {
      title: "Drexel FSAE",
      image: "../photos/coverPhotos/sae.jpg",
      alt: "Cover photo for Drexel FSAE",
      link: "./sae.html",
      class: "sae-cover",
    }
  ];

  const galleryList = document.getElementById('gallery');

  gallery.forEach(gallery => {
      const galleryBox = document.createElement('div');
      galleryBox.className = 'photo-box';
      galleryBox.classList.add(gallery.class);
      galleryBox.onclick = () => window.location.href = gallery.link;

      const img = document.createElement('img');
      img.src = gallery.image;
      img.alt = gallery.alt;

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = gallery.title;

      galleryBox.appendChild(img);
      galleryBox.appendChild(title);
      galleryList.appendChild(galleryBox);
  });
});