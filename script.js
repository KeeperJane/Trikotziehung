const players = [
  "Spieler 1","Spieler 2","Spieler 3","Spieler 4","Spieler 5",
  "Spieler 6","Spieler 7","Spieler 8","Spieler 9","Spieler 10"
];

function loadPlayers() {
  const container = document.getElementById("playerList");
  container.innerHTML = "";
  players.forEach(p => {
    const row = document.createElement("div");
    row.className = "row";

    const box = document.createElement("input");
    box.type = "checkbox";
    box.className = "chk";

    const label = document.createElement("span");
    label.textContent = p;

    row.appendChild(box);
    row.appendChild(label);
    container.appendChild(row);
  });
}

function resetAll() {
  document.querySelectorAll(".chk").forEach(c => c.checked = false);
}

window.onload = loadPlayers;
