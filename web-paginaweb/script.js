document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateButton');
    const numberText = document.getElementById('generatedNumber');
    const dateText = document.getElementById('generatedDate');
    const randomNumberText = document.getElementById('randomNumber');
    const nameText = document.getElementById('generatedName');
    const valueRangeText = document.getElementById('valueRange');
    const valueText = document.getElementById('valueText'); // Elemento para el texto "Value"

    let clickCount = 0; // Contador de clics

    if (!button || !numberText || !dateText || !randomNumberText || !nameText || !valueRangeText || !valueText) {
        console.error('No se pudieron encontrar todos los elementos del DOM.');
        return;
    }

    const baseNumber = "4612-8612-3491-0369";
    const secondVariations = ["23", "29", "28", "27", "26", "30", "31", "24"];
    const firstNamesMale = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas"];
    const firstNamesFemale = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];

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
        switch (gender) {
            case 'male':
                firstName = getRandomElement(firstNamesMale);
                break;
            case 'female':
                firstName = getRandomElement(firstNamesFemale);
                break;
            default:
                throw new Error('Gender must be "male" or "female"');
        }
        const lastName = getRandomElement(lastNames);
        return `${firstName} ${lastName}`;
    }

    function formatNumber(number) {
        return number.toLocaleString();
    }

    button.addEventListener('click', () => {
        numberText.textContent = shuffleNumber(baseNumber);
        dateText.textContent = `${getRandomNumber(5, 30)}/${getRandomVariation(secondVariations)}`;
        randomNumberText.textContent = `${getRandomNumber(143, 983)}`;

        const gender = Math.random() < 0.5 ? 'male' : 'female';
        nameText.textContent = generateRandomName(gender);

        const valueRange = getRandomNumber(30000, 450000);
        valueRangeText.textContent = `${formatNumber(valueRange)} mil`;

        // Incrementar el contador de clics
        clickCount++;

        // Probabilidad de cambiar el color del fondo
        if (Math.random() < 0.2) { // 20% de probabilidad
            valueText.classList.add('red-background');
            valueText.classList.remove('green-background');
        } else {
            valueText.classList.add('green-background');
            valueText.classList.remove('red-background');
        }

        document.getElementById('generatedContent').classList.remove('hidden');
    });
});
