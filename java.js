document.addEventListener('DOMContentLoaded', function() {
    // Lado izquierdo (sin cambios)
    const generateCodeButtonLeft = document.getElementById("generate-code");
    const generatedTextDivLeft = document.getElementById("generated-text");

    function generateRandomText() {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        const length = 32;

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    generateCodeButtonLeft.addEventListener("click", function() {
        const randomText = generateRandomText();
        generatedTextDivLeft.textContent = randomText;
    });

    // Lado derecho
    const generateCodeButtonRight = document.getElementById("generate-code-right");
    const generatedTextDivRight = document.getElementById("generated-text-right");
    const generatedTextNoDomainDivRight = document.getElementById("generated-text-no-domain-right");

    // Lista de nombres comunes
    const names = [
        "Carlos", "David", "Juan", "Sofía", "Ana", "Pedro", "Laura", "Raúl", "Miguel", "Paula",
        "Felipe", "Martín", "Carmen", "María", "José", "Isabella", "Marta", "Daniela", "Rafael"
    ];

    // Función para generar un nombre aleatorio seguido de una secuencia de números aleatorios
    function generateRandomName() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomNumberLength = Math.floor(Math.random() * 4) + 3; // Longitud del número entre 3 y 6
        let randomNumber = "";

        // Generar una secuencia aleatoria de números de longitud aleatoria
        for (let i = 0; i < randomNumberLength; i++) {
            randomNumber += Math.floor(Math.random() * 10);  // Genera un número entre 0 y 9
        }

        return randomName + randomNumber;
    }

    // Función para generar una cuenta de correo aleatoria con el formato adecuado
    function generateRandomEmail() {
        const randomName = generateRandomName();
        const domains = ["@hotmail.com", "@gmail.com"];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        return randomName + randomDomain;
    }

    // Función para generar el texto sin dominio, con letras y números aleatorios
    function generateTextWithoutDomain() {
        const firstNames = ["Pedro", "David", "Carlos", "Maria", "Sofia", "Juan"];
        const lastNames = ["Gomez", "Lopez", "Martinez", "Perez", "Fernandez"];
    
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomNumber = Math.floor(Math.random() * 10000); // Generar número aleatorio
    
        // Convertimos el nombre y número a un array de caracteres
        let nameArray = (firstName + lastName + randomNumber).split('');
    
        // Reemplazamos algunas letras por números
        const letterToNumberMap = {
            "a": "4", "A": "4", "e": "3", "E": "3", "i": "1", "I": "1", "o": "0", "O": "0", "s": "5", "S": "5"
        };

        nameArray = nameArray.map(char => {
            return letterToNumberMap[char] || char;  // Si es una letra, la reemplaza por un número si está en el mapa
        });
    
        // Reordenamos las letras y números de forma aleatoria
        for (let i = nameArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nameArray[i], nameArray[j]] = [nameArray[j], nameArray[i]]; // Intercambiar
        }
    
        // Devolvemos el nombre aleatorio reordenado
        return nameArray.join('');
    }

    // Evento para generar una cuenta de correo aleatoria
    generateCodeButtonRight.addEventListener("click", function() {
        const randomEmail = generateRandomEmail();
        generatedTextDivRight.textContent = randomEmail; // Mostramos el correo con dominio

        // Generamos el texto sin dominio y lo mostramos en el cuadro inferior
        const randomNameWithoutDomain = generateTextWithoutDomain();
        generatedTextNoDomainDivRight.textContent = randomNameWithoutDomain; // Mostramos el nombre sin dominio
    });

    // Función para generar correos aleatorios infinitos
    function generateInfiniteEmails() {
        setInterval(function() {
            const randomEmail = generateRandomEmail();
            generatedTextDivRight.textContent = randomEmail; // Actualizamos el correo con dominio

            // Generamos el texto sin dominio y lo mostramos en el cuadro inferior
            const randomNameWithoutDomain = generateTextWithoutDomain();
            generatedTextNoDomainDivRight.textContent = randomNameWithoutDomain; // Actualizamos el nombre sin dominio
        }, 200); // Generar un nuevo correo cada 200ms
    }

    // Evento para generar cuentas de correo infinitas
    const generateInfiniteButtonRight = document.getElementById("generate-infinite-right");
    generateInfiniteButtonRight.addEventListener("click", function() {
        generateInfiniteEmails();
    });
});
