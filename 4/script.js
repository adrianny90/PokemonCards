const space = document.getElementById("pokemon-container");
const addItem = document.createElement("p");
const image = document.createElement("img");
const type = document.createElement("a");
const div = document.createElement("div");
const pokemonInfo = document.createElement("p");
type.className = "text-1xl justify-self-auto";
type.style.justifyContent = "space-around";
type.style.alignItems = "center";
type.style.textAlign = "center";
type.style.backgroundColor = "#3323";
image.className = "img";
image.style.alignContent = "center";
image.classList.add("mb-4");
div.style.backgroundColor = "rgb(254, 253, 221)";
addItem.className = "space-around text-2xl";
div.classList.add(
  "bg-white",
  "rounded-lg",
  "shadow-md",
  "p-4",
  "flex",
  "flex-col",
  "items-center",
  "text-center"
);
div.appendChild(image);
div.appendChild(addItem);
div.appendChild(pokemonInfo);
space.appendChild(div);

const pokemon = async (id) => {
  try {
    const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!getData.ok) {
      throw new Error(
        `Request failed with stasus code of ${getData.status} for pokemon with number ${id}`
      );
    } else {
      const data = await getData.json();
      image.src = data.sprites.front_shiny;
      addItem.textContent = data.name;

      pokemonInfo.textContent = `ID: ${data.id} | Type: ${data.types
        .map((typeInfo) => typeInfo.type.name)
        .join(", ")}`;
      pokemonInfo.classList.add("text-gray-600");
    }
  } catch (error) {
    console.error("Something went wrong", error);
  }
};

function delayedPokemonFetch(max, delay) {
  for (let i = 1; i <= max; i++) {
    setTimeout(() => {
      pokemon(i);
    }, i * delay);
  }
}

delayedPokemonFetch(30, 2000);
