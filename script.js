document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = {
        question1: 'sel4',
        question2: 'jaringan3',
        question3: 'organ4',
        question4: 'sistem2',
        question5: 'sistem3'
    };
    
    let score = 0;

    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score += 20;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `Nilai Anda: ${score}`;
    result.style.fontSize = '24px';
    result.style.fontWeight = 'bold';
    result.style.textAlign = 'center'; 
    if (score === 100) {
        result.style.color = 'green';
        result.textContent += ' (Sempurna)';
    } else if (score >= 60) {
        result.style.color = 'orange';
        result.textContent += ' (Bagus)';
    } else {
        result.style.color = 'red';
        result.textContent += ' (Butuh Perbaikan)';
    }
});
