const words = ["Puna", "Salta",  "Asado", "Petroleo", "Yunga", "Jujuy", "Salta", "Calchaquies", "Fede"];
let selectedWord = "";
let guessedLetters = [];
let wordIndex = 0;
let mistakes = 0;

function startGame() {
  wordIndex = 0;
  mistakes = 0;
  loadWord();
  generateKeyboard();
  document.getElementById("message").textContent = "";
  document.getElementById("error-message").textContent = "";
}

function loadWord() {
  selectedWord = words[wordIndex].toUpperCase(); // Convertimos a mayúsculas para uniformidad
  guessedLetters = [selectedWord[0]]; // Muestra la primera letra automáticamente
  displayWord();
}

function displayWord() {
  const display = selectedWord
    .split("")
    .map((letter) =>
      guessedLetters.includes(letter) ? letter : "_"
    )
    .join(" ");
  document.getElementById("word").textContent = display;
}

function generateKeyboard() {
  const keyboard = document.getElementById("keyboard");
  keyboard.innerHTML = ""; // Limpia el teclado antes de generarlo
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  alphabet.split("").forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("key");
    button.onclick = () => guessLetter(letter);
    keyboard.appendChild(button);
  });
}

function guessLetter(letter) {
  const button = Array.from(document.getElementsByClassName("key")).find(
    (btn) => btn.textContent === letter
  );
  button.classList.add("disabled");
  button.disabled = true;

  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
    displayWord();
    checkWin();
  } else {
    mistakes++;
    document.getElementById("error-message").textContent = `La letra "${letter}" no está en la palabra`;
    document.getElementById("error-message").style.color = "red";
  }
}

function checkWin() {
  const uniqueLetters = [...new Set(selectedWord)]; // Letras únicas de la palabra
  if (guessedLetters.length === uniqueLetters.length) {
    const message = document.getElementById("message");
    message.textContent = "Correcto, Palabra completada. ";
    message.style.color = "green";

    wordIndex++;
    if (wordIndex < words.length) {
      setTimeout(() => {
        document.getElementById("error-message").textContent = "";
        message.textContent = "";
        loadWord();
        resetKeyboard();
      }, 2000);
    } else {
      message.textContent = "Felicidades, Has completado todas las palabras.";
    }
  }
}

function resetKeyboard() {
  const buttons = document.querySelectorAll(".key");
  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

// Inicia el juego
startGame();
