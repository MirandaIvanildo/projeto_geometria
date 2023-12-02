const challenges = [
    { question: "Quantos lados tem um quadrado?", answer: 4 },
    { question: "Qual é a fórmula da área de um círculo?", answer: "πr²" },
    // Adicione mais desafios aqui
];

let currentChallengeIndex = 0;

function displayChallenge() {
    const challengeElement = document.getElementById("challenge");
    challengeElement.textContent = challenges[currentChallengeIndex].question;
}

function checkAnswer() {
    const userInput = document.getElementById("userInput").value;
    const answer = challenges[currentChallengeIndex].answer;

    if (userInput == answer) {
        alert("Resposta correta! Próximo desafio.");
        currentChallengeIndex++;
        if (currentChallengeIndex < challenges.length) {
            displayChallenge();
        } else {
            alert("Parabéns! Você completou a aventura geométrica.");
            resetGame();
        }
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}

function resetGame() {
    currentChallengeIndex = 0;
    displayChallenge();
}

// Inicialização do jogo
displayChallenge();
