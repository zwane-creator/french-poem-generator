function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dca402bf6e5cod4bb210fdbta88ea4c3";
  let context =
    "You are a literature expert and love to write short poems, jokes, recipes and quotes. Your mission a 4 line poem/jokes/recipes/quotes and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end not at the beginning of the poem on a <br />";
  let prompt = `User instructions: Generate a English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating a ${instructionsInput.value}</div>`;

  console.log("Generating ");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
