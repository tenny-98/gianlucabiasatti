// Slideshow logic for index.html
document.addEventListener("DOMContentLoaded", function () {
  // Slideshow on Main
  const slides = document.querySelectorAll(".slideshow-container .slide");
  if (slides.length) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  }

  // Album page photo grid and lightbox
  if (window.location.pathname.endsWith("album.html")) {
    // Example album data
    const albums = {
      egitto: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504615755583-2916b52192b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101062946-4377e57745c3?auto=format&fit=crop&w=800&q=80"
      ],
      norvegia: [
        "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1433878455169-4698b20b6be9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80"
      ],
      islanda: [
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101062946-4377e57745c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80"
      ],
      patagonia: [
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      namibia: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
      ],
      giappone: [
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3be5?auto=format&fit=crop&w=800&q=80"
      ],
      italia: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
      ],
      canada: [
        "https://images.unsplash.com/photo-1465101062946-4377e57745c3?auto=format&fit=crop&w=800&q=80"
      ],
      scotia: [
        "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80"
      ]
    };

    // Get album from URL
    function getQueryParam(param) {
      const url = new URL(window.location.href);
      return url.searchParams.get(param);
    }
    const albumName = getQueryParam('album');
    const photos = albums[albumName] || [];
    const photoGrid = document.getElementById('photo-grid');
    const albumTitleDiv = document.getElementById('album-title');
    const albumTitles = {
      egitto: "Egitto",
      norvegia: "Norvegia",
      islanda: "Islanda",
      patagonia: "Patagonia",
      namibia: "Namibia",
      giappone: "Giappone",
      italia: "Italia",
      canada: "Canada",
      scotia: "Scozia"
    };
    albumTitleDiv.textContent = albumTitles[albumName] || "Album";

    // Fill photo grid (simulate 80 photos per album for demo)
    let allPhotos = [];
    for (let i = 0; i < 80; i++) {
      allPhotos.push(photos[i % photos.length]);
    }
    photoGrid.innerHTML = '';
    allPhotos.forEach((src, idx) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Foto " + (idx + 1);
      img.dataset.idx = idx;
      photoGrid.appendChild(img);
    });

    // Lightbox logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let currentIdx = 0;

    function showLightbox(idx) {
      lightboxImg.src = allPhotos[idx];
      lightbox.classList.add("active");
      currentIdx = idx;
    }
    function closeLightbox() {
      lightbox.classList.remove("active");
    }
    function showPrev() {
      showLightbox((currentIdx - 1 + allPhotos.length) % allPhotos.length);
    }
    function showNext() {
      showLightbox((currentIdx + 1) % allPhotos.length);
    }

    photoGrid.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG") {
        showLightbox(Number(e.target.dataset.idx));
      }
    });

    document.getElementById("close-lightbox").onclick = closeLightbox;
    document.getElementById("lightbox-prev").onclick = showPrev;
    document.getElementById("lightbox-next").onclick = showNext;

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeLightbox();
    });
    lightbox.onclick = function(e) {
      if (e.target === lightbox) closeLightbox();
    };
  }
});