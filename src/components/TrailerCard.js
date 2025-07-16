import { api } from "../utils/api";

export function TrailerCard(item) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("div");
  
    div.className = "small-trailer";
    title.className = "title_small";
    img.src = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
    title.textContent = item.title;
  
    div.append(img, title);
  
    div.onclick = () => {
      let iframe = document.querySelector(".trailer");
  
      api.get(`/movie/${item.id}/videos`).then((res) => {
        console.log(res);
  
        let found = res.data.results.find(
          (video) => video.type.toLowerCase() === "trailer"
        );
  
        if (found) {
          iframe.src = `https://www.youtube.com/embed/${found.key}`;
        }
      });
    };
  
    return div;
  }
  