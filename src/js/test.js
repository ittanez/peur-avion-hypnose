// Test functionality

// Test questions data
const testQuestions = [
    {
        id: 1,
        question: "Comment ressentez-vous l'idée de prendre l'avion ?",
        answers: [
            { text: "Je suis totalement à l'aise", score: 0 },
            { text: "J'ai quelques appréhensions mais ça va", score: 1 },
            { text: "Je suis anxieux mais je peux le gérer", score: 2 },
            { text: "J'ai très peur mais je le fais quand même", score: 3 },
            { text: "C'est une angoisse paralysante", score: 4 }
        ]
    },
    {
        id: 2,
        question: "Que ressentez-vous quand vous pensez aux turbulences ?",
        answers: [
            { text: "Ça ne me dérange pas", score: 0 },
            { text: "Un léger inconfort", score: 1 },
            { text: "De l'anxiété modérée", score: 2 },
            { text: "Beaucoup d'angoisse", score: 3 },
            { text: "Terreur absolue", score: 4 }
        ]
    },
    {
        id: 3,
        question: "Comment vous sentez-vous au décollage ?",
        answers: [
            { text: "Excité et détendu", score: 0 },
            { text: "Un peu nerveux", score: 1 },
            { text: "Tendu mais gérable", score: 2 },
            { text: "Très stressé", score: 3 },
            { text: "Panique totale", score: 4 }
        ]
    },
    {
        id: 4,
        question: "Combien de temps avant votre vol commencez-vous à être anxieux ?",
        answers: [
            { text: "Je ne suis jamais anxieux", score: 0 },
            { text: "Le jour même", score: 1 },
            { text: "Quelques jours avant", score: 2 },
            { text: "Une semaine avant", score: 3 },
            { text: "Dès que je réserve", score: 4 }
        ]
    },
    {
        id: 5,
        question: "Avez-vous déjà annulé un voyage à cause de votre peur de l'avion ?",
        answers: [
            { text: "Jamais", score: 0 },
            { text: "J'y ai pensé mais non", score: 1 },
            { text: "Une fois", score: 2 },
            { text: "Plusieurs fois", score: 3 },
            { text: "Régulièrement", score: 4 }
        ]
    },
    {
        id: 6,
        question: "Comment gérez-vous votre anxiété en vol ?",
        answers: [
            { text: "Je n'en ai pas besoin", score: 0 },
            { text: "Techniques de respiration", score: 1 },
            { text: "Distraction (musique, lecture)", score: 2 },
            { text: "Médicaments prescrits", score: 3 },
            { text: "Alcool ou automédication", score: 4 }
        ]
    },
    {
        id: 7,
        question: "Que pensez-vous quand vous entendez parler d'accidents d'avion ?",
        answers: [
            { text: "C'est statistiquement rare", score: 0 },
            { text: "Ça m'inquiète un peu", score: 1 },
            { text: "Ça augmente mon stress", score: 2 },
            { text: "J'évite ces informations", score: 3 },
            { text: "Ça confirme mes peurs", score: 4 }
        ]
    },
    {
        id: 8,
        question: "Comment vous sentez-vous pendant l'atterrissage ?",
        answers: [
            { text: "Soulagé d'arriver", score: 0 },
            { text: "Un peu nerveux", score: 1 },
            { text: "Stressé mais ça va", score: 2 },
            { text: "Très angoissé", score: 3 },
            { text: "Terrifié", score: 4 }
        ]
    },
    {
        id: 9,
        question: "Dormez-vous bien la nuit précédant un vol ?",
        answers: [
            { text: "Oui, normalement", score: 0 },
            { text: "Un peu moins bien", score: 1 },
            { text: "Sommeil agité", score: 2 },
            { text: "Très mal", score: 3 },
            { text: "Pas du tout", score: 4 }
        ]
    },
    {
        id: 10,
        question: "Quelle est votre réaction face aux bruits de l'avion ?",
        answers: [
            { text: "Ils ne me dérangent pas", score: 0 },
            { text: "Je les remarque à peine", score: 1 },
            { text: "Ils m'inquiètent parfois", score: 2 },
            { text: "Ils m'angoissent", score: 3 },
            { text: "Chaque bruit me terrifie", score: 4 }
        ]
    },
    {
        id: 11,
        question: "Comment votre entourage réagit-il à votre peur de l'avion ?",
        answers: [
            { text: "Ils ne le savent pas", score: 0 },
            { text: "Ils comprennent", score: 1 },
            { text: "Ils essaient d'aider", score: 2 },
            { text: "Ils minimisent ma peur", score: 3 },
            { text: "Ça impacte mes relations", score: 4 }
        ]
    },
    {
        id: 12,
        question: "Dans quelle mesure cette peur limite-t-elle votre vie ?",
        answers: [
            { text: "Pas du tout", score: 0 },
            { text: "Très peu", score: 1 },
            { text: "Modérément", score: 2 },
            { text: "Beaucoup", score: 3 },
            { text: "Complètement", score: 4 }
        ]
    }
];

// Test state
let currentQuestionIndex = 0;
let answers = [];
let userInfo = {};

document.addEventListener('DOMContentLoaded', function() {
    initTest();
});

function initTest() {
    const startButton = document.getElementById('start-test');
    const emailForm = document.getElementById('email-form');
    
    if (startButton) {
        startButton.addEventListener('click', startTest);
    }
    
    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailSubmission);
    }
}

function startTest() {
    // Track test start
    if (typeof trackEvent !== 'undefined') {
        trackEvent('test_started');
    }
    
    showStep('test-questions');
    displayQuestion(0);
}

function showStep(stepId) {
    // Hide all steps
    document.querySelectorAll('.test-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.add('active');
    }
}

function displayQuestion(index) {
    if (index >= testQuestions.length) {
        showEmailStep();
        return;
    }
    
    const question = testQuestions[index];
    const container = document.getElementById('question-container');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    
    // Update progress
    const progressPercent = ((index + 1) / testQuestions.length) * 100;
    progress.style.width = progressPercent + '%';
    progressText.textContent = `Question ${index + 1} sur ${testQuestions.length}`;
    
    // Create question HTML
    container.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="answers">
                ${question.answers.map((answer, answerIndex) => `
                    <div class="answer" onclick="selectAnswer(${answerIndex})">
                        ${answer.text}
                    </div>
                `).join('')}
            </div>
            <div class="question-nav">
                ${index > 0 ? `<button class="btn btn-secondary" onclick="previousQuestion()">Précédent</button>` : '<div></div>'}
                <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" disabled>Suivant</button>
            </div>
        </div>
    `;
}

function selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer').forEach(answer => {
        answer.classList.remove('selected');
    });
    
    // Add selection to clicked answer
    const selectedAnswer = document.querySelectorAll('.answer')[answerIndex];
    selectedAnswer.classList.add('selected');
    
    // Store answer
    const question = testQuestions[currentQuestionIndex];
    answers[currentQuestionIndex] = {
        questionId: question.id,
        answerIndex: answerIndex,
        score: question.answers[answerIndex].score
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < testQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        showEmailStep();
    }
}

function showEmailStep() {
    // Track test completion
    if (typeof trackEvent !== 'undefined') {
        trackEvent('test_completed');
    }
    
    showStep('test-email');
}

async function handleEmailSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    userInfo = {
        email: formData.get('email'),
        firstName: formData.get('firstName')
    };
    
    // Calculate total score
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const maxScore = testQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine fear level
    let fearLevel, recommendations;
    if (percentage <= 20) {
        fearLevel = "Légère appréhension";
        recommendations = "Vous gérez bien votre relation avec l'avion. Quelques techniques de relaxation pourraient vous aider à être encore plus serein.";
    } else if (percentage <= 40) {
        fearLevel = "Anxiété modérée";
        recommendations = "Votre anxiété est gérable mais pourrait bénéficier d'un accompagnement pour plus de sérénité.";
    } else if (percentage <= 60) {
        fearLevel = "Peur importante";
        recommendations = "Votre peur de l'avion impacte significativement vos voyages. L'hypnothérapie peut vous aider efficacement.";
    } else if (percentage <= 80) {
        fearLevel = "Peur sévère";
        recommendations = "Votre peur est importante et limite vos possibilités. Un accompagnement professionnel est fortement recommandé.";
    } else {
        fearLevel = "Phobie de l'avion";
        recommendations = "Votre peur constitue une véritable phobie qui nécessite un accompagnement spécialisé pour retrouver votre liberté.";
    }
    
    try {
        // Show loading state
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Send results via Netlify function
        const response = await fetch('/.netlify/functions/send-test-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userInfo,
                totalScore,
                percentage,
                fearLevel,
                recommendations,
                answers
            })
        });
        
        if (response.ok) {
            // Track email submission
            if (typeof trackConversion !== 'undefined') {
                trackConversion('email_collected');
            }
            
            showStep('test-results');
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
        
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
        
        // Reset button
        const submitButton = e.target.querySelector('button[type="submit"]');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}