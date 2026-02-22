fetch("games.json")
  .then(response => response.json())
  .then(games => {
    const gameButtons = document.getElementById("gameButtons");
    const gameContainer = document.getElementById("gameContainer");

    games.forEach(game => {
      const button = document.createElement("button");
      button.textContent = game.name;

      button.addEventListener("click", () => {
        gameContainer.innerHTML = `
          <iframe src="${game.url}" allowfullscreen></iframe>
        `;
      });

      gameButtons.appendChild(button);
    });
  })
  .catch(error => {
    console.error("Error loading games:", error);
  });
