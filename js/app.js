document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector("#form");
  newForm.addEventListener("submit", handleNewForm);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

const handleNewForm = function(event) {
  event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector("#animal-list");
  animalList.appendChild(animalListItem);

  event.target.reset();
};

const createAnimalListItem = function(form) {
  const animalListItem = document.createElement("li");
  animalListItem.classList.add("animal-list-item");

  const animal = document.createElement("h2");
  animal.textContent = form.animal.value;
  animalListItem.appendChild(animal);

  const family = document.createElement("h2");
  family.textContent = form.family.value;
  animalListItem.appendChild(family);

  const lifespan = document.createElement("h3");
  lifespan.textContent = form.lifespan.value;
  animalListItem.appendChild(lifespan);

  const speed = document.createElement("h3");
  speed.textContent = form.speed.value;
  animalListItem.appendChild(speed);

  const height = document.createElement("h3");
  height.textContent = form.height.value;
  animalListItem.appendChild(height);

  return animalListItem;
};

const handleDeleteAllClick = function(event) {
  const animalList = document.querySelector("#animal-list");
  animalList.innerHTML = "";
};
