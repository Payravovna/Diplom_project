import { redirect } from "../utils/helpers";

export function seacher(movie) {
    const card = document.createElement("div");
    const content = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const subtitle = document.createElement("p");
    const rating = document.createElement("div");

    card.classList.add("movie-card");
    content.classList.add("movie-content");
    subtitle.classList.add("subtitle");
    rating.classList.add("rating_movie");
  

    img.src = movie.poster;
    img.alt = movie.title;
    title.textContent = movie.title;
    subtitle.textContent = movie.originalTitle;
  
    const ratingValue = movie.rating || movie.rating_movie || 0;
    rating.textContent = ratingValue;
    rating.classList.add(ratingValue >= 6 ? "good" : "bad");
  
    card.appendChild(img);
    content.appendChild(title);
    content.appendChild(subtitle);
    card.appendChild(content);
    card.appendChild(rating);
    

    card.onclick = () => {
        redirect(`/movie?id=${movie.id}`);
      };
    
    return card;

  }

  
