document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateButton');
    const numberText = document.getElementById('generatedNumber');
    const dateText = document.getElementById('generatedDate');
    const randomNumberText = document.getElementById('randomNumber');
    const nameText = document.getElementById('generatedName');

    // Verifica si los elementos se cargaron correctamente
    if (!button || !numberText || !dateText || !randomNumberText || !nameText) {
        console.error('No se pudieron encontrar todos los elementos del DOM.');
        return;
    }

    // Número base a mezclar
    const baseNumber = "4612-8612-3491-0369";

    // Variaciones para el segundo número
    const secondVariations = ["23", "29", "28", "27", "26", "30", "31", "24"];

    // Listas de nombres y apellidos
    const firstNamesMale = [
        "James", "John", "Robert", "Michael", "William", 
        "David", "Richard", "Joseph", "Charles", "Thomas"
    ];

    const firstNamesFemale = [
        "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", 
        "Barbara", "Susan", "Jessica", "Sarah", "Karen"
    ];

    const lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", 
        "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"
    ];

    function shuffleNumber(num) {
        let digits = num.replace(/-/g, '');
        digits = digits.split('');
        for (let i = digits.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [digits[i], digits[j]] = [digits[j], digits[i]];
        }
        return digits.join('').replace(/(.{4})(.{4})(.{4})(.{4})/, '$1-$2-$3-$4');
    }

    function getRandomVariation(variations) {
        const randomIndex = Math.floor(Math.random() * variations.length);
        return variations[randomIndex];
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function generateRandomName(gender) {
        let firstName;
        if (gender === 'male') {
            firstName = getRandomElement(firstNamesMale);
        } else if (gender === 'female') {
            firstName = getRandomElement(firstNamesFemale);
        } else {
            throw new Error('Gender must be "male" or "female"');
        }
        const lastName = getRandomElement(lastNames);
        return `${firstName} ${lastName}`;
    }

    button.addEventListener('click', () => {
        numberText.textContent = shuffleNumber(baseNumber);
        dateText.textContent = `${getRandomNumber(5, 30)}/${getRandomVariation(secondVariations)}`;
        randomNumberText.textContent = ` ${getRandomNumber(143, 983)}`;

        // Generar nombre y apellido aleatorios
        const gender = Math.random() < 0.5 ? 'male' : 'female';
        nameText.textContent = ` ${generateRandomName(gender)}`;

        // Muestra los elementos si estaban ocultos
        document.getElementById('generatedContent').classList.remove('hidden');
    });
});