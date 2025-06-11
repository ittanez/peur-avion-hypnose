// Test functionality

// Test questions grouped by themes (4 groups of 3 questions each)
const testQuestionGroups = [
    {
        title: "Votre relation avec l'avion",
        questions: [
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
            }
        ]
    },
    {
        title: "Impact sur votre vie",
        questions: [
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
            }
        ]
    },
    {
        title: "Vos pensées et réactions",
        questions: [
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
            }
        ]
    },
    {
        title: "Impact social et personnel",
        questions: [
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
        ]
    }
];

// Flatten questions for compatibility
const testQuestions = testQuestionGroups.flatMap(group => group.questions);

// Test state
let currentGroupIndex = 0;
let currentQuestionInGroup = 0;
let groupAnswers = [];
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
    
    // Reset test state
    currentGroupIndex = 0;
    currentQuestionInGroup = 0;
    groupAnswers = [];
    answers = [];
    
    showStep('test-questions');
    displayQuestionGroup(0);
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

function displayQuestionGroup(groupIndex) {
    if (groupIndex >= testQuestionGroups.length) {
        showEmailStep();
        return;
    }
    
    const group = testQuestionGroups[groupIndex];
    const container = document.getElementById('question-container');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    
    // Update progress
    const progressPercent = ((groupIndex + 1) / testQuestionGroups.length) * 100;
    progress.style.width = progressPercent + '%';
    progressText.textContent = `Étape ${groupIndex + 1} sur ${testQuestionGroups.length}`;
    
    // Reset group answers
    groupAnswers = [];
    
    // Create question group HTML
    container.innerHTML = `
        <div class="question-group">
            <div class="group-header">
                <h2 class="group-title">${group.title}</h2>
                <p class="group-subtitle">Répondez aux 3 questions suivantes :</p>
            </div>
            
            ${group.questions.map((question, questionIndex) => `
                <div class="question" data-question-index="${questionIndex}">
                    <h3>${question.question}</h3>
                    <div class="answers">
                        ${question.answers.map((answer, answerIndex) => `
                            <div class="answer" onclick="selectGroupAnswer(${questionIndex}, ${answerIndex})">
                                ${answer.text}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            
            <div class="question-nav">
                ${groupIndex > 0 ? `<button class="btn btn-secondary" onclick="previousGroup()">Précédent</button>` : '<div></div>'}
                <button class="btn btn-primary" id="next-group-btn" onclick="nextGroup()" disabled>Suivant</button>
            </div>
        </div>
    `;
}

function selectGroupAnswer(questionIndex, answerIndex) {
    const questionElement = document.querySelector(`[data-question-index="${questionIndex}"]`);
    
    // Remove previous selection for this question
    questionElement.querySelectorAll('.answer').forEach(answer => {
        answer.classList.remove('selected');
    });
    
    // Add selection to clicked answer
    const selectedAnswer = questionElement.querySelectorAll('.answer')[answerIndex];
    selectedAnswer.classList.add('selected');
    
    // Store answer for this group
    const group = testQuestionGroups[currentGroupIndex];
    const question = group.questions[questionIndex];
    
    groupAnswers[questionIndex] = {
        questionId: question.id,
        answerIndex: answerIndex,
        score: question.answers[answerIndex].score
    };
    
    // Check if all questions in group are answered
    const allAnswered = groupAnswers.length === group.questions.length && 
                       groupAnswers.every(answer => answer !== undefined);
    
    // Enable/disable next button
    const nextBtn = document.getElementById('next-group-btn');
    if (nextBtn) {
        nextBtn.disabled = !allAnswered;
    }
    
    // Auto-scroll to next question if not last
    if (questionIndex < group.questions.length - 1) {
        setTimeout(() => {
            const nextQuestion = document.querySelector(`[data-question-index="${questionIndex + 1}"]`);
            if (nextQuestion) {
                nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    }
}

function previousGroup() {
    if (currentGroupIndex > 0) {
        currentGroupIndex--;
        displayQuestionGroup(currentGroupIndex);
    }
}

function nextGroup() {
    // Save group answers to main answers array
    const group = testQuestionGroups[currentGroupIndex];
    group.questions.forEach((question, index) => {
        if (groupAnswers[index]) {
            answers.push(groupAnswers[index]);
        }
    });
    
    // Move to next group
    if (currentGroupIndex < testQuestionGroups.length - 1) {
        currentGroupIndex++;
        displayQuestionGroup(currentGroupIndex);
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
        submitButton.setAttribute('data-original-text', originalText);
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
        const originalText = submitButton.getAttribute('data-original-text') || 'Recevoir mes résultats';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}