import { actorsCard } from "../../components/actorsCard";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { Card } from "../../components/now_playing";
import { api } from "../../utils/api";
import { render } from "../../utils/utils";

header();
footer();

const movieId = localStorage.getItem("movieId");

let promise1 = api.get(`/movie/${movieId}`);
let promise2 = api.get(`/movie/${movieId}/credits`);
let promise3 = api.get(`/movie/${movieId}/videos`);
let promise4 = api.get(`/movie/${movieId}/images`);
let promise5 = api.get(`/movie/${movieId}/similar`);

Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then(([movieRes, creditsRes, videosRes, imagesRes, similarRes]) => {
    let movie = movieRes.data;
    let credits = creditsRes.data;
    let videos = videosRes.data;
    let images = imagesRes.data;


    let title = document.querySelector("h1")
    let original_title = document.querySelector(".original-title")
    let disc = document.querySelector(".description")
    original_title.textContent = movie.original_title;
    title.textContent = movie.title;
    disc.textContent = movie.overview;

    
        let actorContainer = document.querySelector(".actors");
        render(credits.cast.slice(0, 8), actorContainer, actorsCard);

        const trailer = videos.results.find(v => v.type === "Trailer" && v.site === "YouTube");
        if (trailer) {
          let iframe = document.querySelector(".trailer");
          iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
          document.querySelector(".title_huge").textContent = trailer.name;
        }
   
    let posterEl = document.querySelector(".poster");
    posterEl.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    posterEl.alt = movie.title;

    document.querySelector(".details").innerHTML = `
      <p><strong>Жанр:</strong> ${movie.genres.map(g => g.name).join(', ')}</p>
      <p><strong>Год:</strong> ${movie.release_date.slice(0, 4)}</p>
      <p><strong>Длительность:</strong> ${Math.floor(movie.runtime / 60)} ч ${movie.runtime % 60} мин</p>
    `;

    const actorsMovie = document.querySelector(".actors_movie");
    render(images.posters.slice(0, 4), actorsMovie, poster => {
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${poster.file_path}`;
      img.className = "card";
      return img;
    });

    const photoGallery = document.querySelector(".photo-gallery");
    images.backdrops.slice(0, 6).forEach(backdrop => {
      const img = document.createElement("img");
      img.src = backdrop.file_path
        ? `https://image.tmdb.org/t/p/w500${backdrop.file_path}`
        : "/img/image.png"; 
    
      img.className = "photo";
      photoGallery.appendChild(img);
    });
    



    let similarContainer = document.querySelector(".similar-movies");
    let similarMovies = similarRes.data.results;
    render(similarMovies.slice(0, 4), similarContainer, Card);

  })

  .catch(err => {
    console.error( err);
  });

