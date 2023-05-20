// const pokemon = [
//   {
//     slot: 1,
//     type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
//   },
//   {
//     slot: 2,
//     type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
//   },
// ];

// const newPoke = pokemon.map((t) => console.log(t.type.name));

const $searchForm = $("form");

$searchForm.on("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const pokemon = formData.get("pokemone").toLowerCase();
  console.log(pokemon);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  console.log(url);
  const $screen = $(".screen");
  const $result = $(".result");
  // $.ajax(url).then((response) => console.log(response));

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      $screen.html(`<img src =${data.sprites.front_default} alt=${data.name}>`);
      $result.html(`
      <div>
      <b>name: </b>${data.name}
      </div>
      <div>
      <b>id: </b> ${data.id}
      </div>
      <div>
      <b> weight: </b>${data.weight}
      </div>
      <div>
      <b>type: </b>${data.types.map((v) => v.type.name)}
      </div>
      `);
    })
    .catch(() => {
      $result.html(`There is an error`);
    });
});
