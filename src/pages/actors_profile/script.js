// import { header } from "../../components/header";
// import { Card } from "../../components/now_playing";
// import { render } from "../../utils/utils";
// import { footer } from "../../components/footer";
// import { api } from "../../utils/api";
// header();
// footer();

// const actorId = new URLSearchParams(location.search).get("id");
// const people = JSON.parse(localStorage.getItem("popularPeople"));
// const actor = people.find(p => p.id == actorId);

// const poster = document.querySelector(".poster");
// const nameEl = document.querySelector("h1");
// const originalTitle = document.querySelector(".original-title");
// const genre = document.querySelector(".genres");
// const popularity = document.querySelector(".popularity");
// const photoGallery = document.querySelector(".photo-gallery");
// const movieContainer = document.querySelector(".actors_movie");

//   poster.src = `https://image.tmdb.org/t/p/w300${actor.profile_path}`;
//   nameEl.textContent = actor.name;
//   originalTitle.textContent = actor.original_name ;
//   genre.textContent = actor.known_for_department;
//   popularity.textContent = actor.popularity;






import { header } from "../../components/header";
import { Card } from "../../components/now_playing";
import { render } from "../../utils/utils";
import { footer } from "../../components/footer";
import { api } from "../../utils/api";

// Вызов header и footer
header();
footer();

// Получение actorId из URL
const actorId = new URLSearchParams(location.search).get("id");

// Получение актёра из localStorage
const storedPeople = localStorage.getItem("popularPeople");
const people = storedPeople ? JSON.parse(storedPeople) : [];
const actor = people.find(p => p.id == actorId);
// Получение DOM-элементов
const poster = document.querySelector(".poster");
const nameEl = document.querySelector("h1");
const originalTitle = document.querySelector(".original-title");
const genre = document.querySelector(".genres");
const popularity = document.querySelector(".popularity");
const photoGallery = document.querySelector(".photo-gallery");
const movieContainer = document.querySelector(".actors_movie");

// Проверка на существование данных
if (!actor) {
  console.error("Актёр не найден в popularPeople.");
  if (nameEl) nameEl.textContent = "Информация об";
} else {
  if (poster) poster.src = `https://image.tmdb.org/t/p/w300${actor.profile_path}`;
  if (nameEl) nameEl.textContent = actor.name;
  if (originalTitle) originalTitle.textContent = actor.original_name;
  if (genre) genre.textContent = actor.known_for_department;
  if (popularity) popularity.textContent = actor.popularity;
}

// Получение фильмов
api.get(`/person/${actorId}/movie_credits`)
  .then(res => {
    const movies = res.data.cast.slice(0, 4);
    if (movieContainer) {
      render(movies, movieContainer, Card);
    }
  })
  .catch(err => {
    console.error("Ошибка при загрузке фильмов актёра:", err);
  });

// Получение фото
api.get(`/person/${actorId}/images`)
  .then(res => {
    if (!photoGallery) return;
    photoGallery.innerHTML = "";
    res.data.profiles.slice(0, 6).forEach((img, i) => {
      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w300${img.file_path}`;
      image.className = `photo ${i === 0 || i === 4 ? "wide" : ""}`;
      photoGallery.append(image);
    });
  })
  .catch(err => {
    console.error("Ошибка загрузки изображений актёра:", err);
  });
