const names = [
    "James Smith", "John Johnson", "Robert Williams", "Michael Brown", "William Jones",
    "David Garcia", "Richard Martinez", "Joseph Rodriguez", "Charles Wilson", "Thomas Anderson",
    "Daniel Thomas", "Matthew Taylor", "Anthony Hernandez", "Mark Moore", "Paul Jackson",
    "Andrew White", "Joshua Harris", "Ryan Martin", "Nicholas Thompson", "Jacob Lee"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Garcia", "Martinez", "Rodriguez", "Wilson", "Anderson",
    "Thomas", "Taylor", "Hernandez", "Moore", "Jackson",
    "White", "Harris", "Martin", "Thompson", "Lee"
];

function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomEmoji() {
    const emojis = ['🔴', '🟢'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

document.getElementById('mastercard-button').addEventListener('click', function() {
    const messageContainer = document.getElementById('message-container-mastercard');
    const cardNumberElement = document.getElementById('card-number-mastercard');
    const cvvElement = document.getElementById('cvv-mastercard');
    const dateElement = document.getElementById('date-mastercard');
    const valueElement = document.getElementById('value-mastercard');
    const functionElement = document.getElementById('function-mastercard');
    const nameElement = document.getElementById('name-mastercard');

    // Mostrar el contenedor del mensaje de MasterCard
    messageContainer.style.display = 'block';

    // Generar un nuevo número de tarjeta (barajar los segmentos)
    const cardNumber = '5142-9914-3890-4169'.split('-').sort(() => Math.random() - 0.5).join('-');
    cardNumberElement.textContent = cardNumber;

    // Generar un nuevo CVV
    const randomCVV = Math.floor(Math.random() * (985 - 145 + 1)) + 145;
    cvvElement.textContent = randomCVV;

    // Generar una nueva fecha
    const randomMonth = String(Math.floor(Math.random() * (29 - 3 + 1)) + 3).padStart(2, '0');
    const randomYear = String(Math.floor(Math.random() * (34 - 23 + 1)) + 23);
    dateElement.textContent = `${randomMonth}/${randomYear}`;

    // Generar un valor aleatorio
    const randomValue = getRandomValue(227, 436);
    valueElement.textContent = `$${randomValue}`;

    // Generar un emoji aleatorio
    const randomEmoji = getRandomEmoji();
    functionElement.textContent = randomEmoji;

    // Generar un nombre y apellido aleatorio
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    nameElement.textContent = `${randomName} ${randomLastName}`;

    // Ocultar el contenedor de Visa si está visible
    document.getElementById('message-container-visa').style.display = 'none';
});

document.getElementById('visa-button').addEventListener('click', function() {
    const messageContainer = document.getElementById('message-container-visa');
    const cardNumberElement = document.getElementById('card-number-visa');
    const cvvElement = document.getElementById('cvv-visa');
    const dateElement = document.getElementById('date-visa');
    const valueElement = document.getElementById('value-visa');
    const functionElement = document.getElementById('function-visa');
    const nameElement = document.getElementById('name-visa');

    // Mostrar el contenedor del mensaje de Visa
    messageContainer.style.display = 'block';

    // Generar un nuevo número de tarjeta (barajar los segmentos)
    const cardNumber = '4612-8612-6001-4599'.split('-').sort(() => Math.random() - 0.5).join('-');
    cardNumberElement.textContent = cardNumber;

    // Generar un nuevo CVV
    const randomCVV = Math.floor(Math.random() * (985 - 145 + 1)) + 145;
    cvvElement.textContent = randomCVV;

    // Generar una nueva fecha
    const randomMonth = String(Math.floor(Math.random() * (29 - 3 + 1)) + 3).padStart(2, '0');
    const randomYear = String(Math.floor(Math.random() * (34 - 23 + 1)) + 23);
    dateElement.textContent = `${randomMonth}/${randomYear}`;

    // Generar un valor aleatorio
    const randomValue = getRandomValue(227, 436);
    valueElement.textContent = `$${randomValue}`;

    // Generar un emoji aleatorio
    const randomEmoji = getRandomEmoji();
    functionElement.textContent = randomEmoji;

    // Generar un nombre y apellido aleatorio
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    nameElement.textContent = `${randomName} ${randomLastName}`;

    // Ocultar el contenedor de MasterCard si está visible
    document.getElementById('message-container-mastercard').style.display = 'none';
});
    