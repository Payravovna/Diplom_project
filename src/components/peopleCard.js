import { redirect } from "../utils/helpers";

let peopleCounter = 3;
export function peopleCard(person) {

  let info = document.createElement("div");
  let nameBox = document.createElement("div");
  let name = document.createElement("p");
  let nameEng = document.createElement("p");
  let place = document.createElement("p");

  info.className = "popular_info";
  nameBox.className = "popular_name";
  name.className = "name";
  nameEng.className = "name_eng";
  name.textContent = person.name;
  nameEng.textContent = person.original_name;
  place.className = "popular_place";
  place.textContent = `${peopleCounter}  место`
  peopleCounter++;



  nameBox.append(name, nameEng,);
  info.append(nameBox, place);

  info.onclick = () => {

    redirect(`/actors_profile?id=${person.id}`);
    
  };


  return info;
}


