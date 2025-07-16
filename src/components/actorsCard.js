export function actorsCard(actor) {
    const card = document.createElement("div");
    card.className = "actor-card";
  
    const img = document.createElement("img");
    img.src = actor.profile_path
      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
      : "/img/placeholder.png"; 
    img.alt = actor.name;
  
    const enName = document.createElement("p");
    enName.className = "actor-en";
    enName.textContent = actor.name;
  
    const role = document.createElement("p");
    role.className = "actor-role";
    role.textContent = actor.character ? `Роль: ${actor.character}` : "Без роли";
  
    card.append(img, enName, role);
    return card;
  }
  


