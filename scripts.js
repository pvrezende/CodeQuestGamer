// Dados do jogo
const gameData = {
    classes: {
        frontend: {
            name: "Front-end Warrior",
            description: "Mestre das interfaces e experiências do usuário",
            color: "#f39c12"
        },
        backend: {
            name: "Back-end Mage",
            description: "Feiticeiro dos servidores e lógica oculta",
            color: "#3498db"
        },
        fullstack: {
            name: "Full-stack Ranger",
            description: "Versátil caçador de soluções completas",
            color: "#2ecc71"
        },
        mobile: {
            name: "Mobile Ninja",
            description: "Ágil e silencioso nas plataformas móveis",
            color: "#e74c3c"
        },
        devops: {
            name: "DevOps Engineer",
            description: "Arquiteto das infraestruturas escaláveis",
            color: "#9b59b6"
        },
        datascience: {
            name: "Data Wizard",
            description: "Manipulador dos segredos ocultos nos dados",
            color: "#1abc9c"
        },
        cloud: {
            name: "Cloud Paladin",
            description: "Defensor das nuvens e guardião da escalabilidade",
            color: "#4cc9f0"
        }
    },
    quests: {
        frontend: [
            { name: "HTML Básico", description: "Aprenda a estrutura básica de páginas web", xp: 20, hours: 10 },
            { name: "CSS Fundamentos", description: "Domine estilização e layout", xp: 30, hours: 15 },
            { name: "JavaScript Essencial", description: "Lógica de programação e DOM", xp: 50, hours: 25 },
            { name: "React Iniciante", description: "Componentes e estado", xp: 70, hours: 35 },
            { name: "Projeto Final", description: "Crie um portfólio completo", xp: 100, hours: 50 }
        ],
        backend: [
            { name: "Node.js Básico", description: "Introdução ao JavaScript no servidor", xp: 30, hours: 15 },
            { name: "Banco de Dados SQL", description: "Modelagem e consultas", xp: 40, hours: 20 },
            { name: "APIs REST", description: "Crie endpoints eficientes", xp: 60, hours: 30 },
            { name: "Autenticação", description: "JWT e OAuth", xp: 50, hours: 25 },
            { name: "Projeto Final", description: "Construa uma API completa", xp: 100, hours: 50 }
        ],
        fullstack: [
            { name: "HTML/CSS Básico", description: "Fundamentos de front-end", xp: 30, hours: 15 },
            { name: "JavaScript Essencial", description: "Lógica de programação", xp: 40, hours: 20 },
            { name: "Node.js Básico", description: "Introdução ao back-end", xp: 50, hours: 25 },
            { name: "Banco de Dados", description: "Modelagem e consultas", xp: 60, hours: 30 },
            { name: "Projeto Final", description: "Aplicação completa", xp: 120, hours: 60 }
        ],
        mobile: [
            { name: "React Native Básico", description: "Introdução ao desenvolvimento mobile", xp: 40, hours: 20 },
            { name: "Componentes UI", description: "Criação de interfaces mobile", xp: 50, hours: 25 },
            { name: "Navegação", description: "Rotas e fluxo de telas", xp: 60, hours: 30 },
            { name: "Integração com API", description: "Consumo de dados", xp: 70, hours: 35 },
            { name: "Projeto Final", description: "Aplicativo completo", xp: 100, hours: 50 }
        ],
        devops: [
            { name: "Docker Básico", description: "Introdução a containers", xp: 40, hours: 20 },
            { name: "Kubernetes", description: "Orquestração de containers", xp: 60, hours: 30 },
            { name: "CI/CD", description: "Integração contínua", xp: 50, hours: 25 },
            { name: "Cloud Basics", description: "Fundamentos de nuvem", xp: 70, hours: 35 },
            { name: "Projeto Final", description: "Pipeline completo", xp: 100, hours: 50 }
        ],
        datascience: [
            { name: "Python Básico", description: "Fundamentos da linguagem", xp: 30, hours: 15 },
            { name: "Pandas/Numpy", description: "Manipulação de dados", xp: 50, hours: 25 },
            { name: "Visualização", description: "Gráficos e dashboards", xp: 40, hours: 20 },
            { name: "ML Básico", description: "Introdução a modelos", xp: 70, hours: 35 },
            { name: "Projeto Final", description: "Análise completa", xp: 100, hours: 50 }
        ],
        cloud: [
            { name: "AWS Básico", description: "Fundamentos AWS", xp: 40, hours: 20 },
            { name: "Azure Básico", description: "Fundamentos Azure", xp: 40, hours: 20 },
            { name: "GCP Básico", description: "Fundamentos Google Cloud", xp: 40, hours: 20 },
            { name: "Terraform", description: "Infra como código", xp: 60, hours: 30 },
            { name: "Projeto Final", description: "Infraestrutura completa", xp: 100, hours: 50 }
        ]
    },
    resources: {
        frontend: {
            courses: [
                { name: "Curso de HTML5 e CSS3 (Curso em Vídeo)", link: "https://www.cursoemvideo.com/curso/html5-css3-modulo1/" },
                { name: "JavaScript Moderno (Udemy)", link: "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/" },
                { name: "React + Redux (Origamid)", link: "https://www.origamid.com/curso/react-completo/" }
            ],
            docs: [
                { name: "MDN Web Docs (PT-BR)", link: "https://developer.mozilla.org/pt-BR/" },
                { name: "W3Schools (PT-BR)", link: "https://www.w3schools.com/" }
            ]
        },
        backend: {
            courses: [
                { name: "Node.js (Rocketseat)", link: "https://app.rocketseat.com.br/node" },
                { name: "Banco de Dados SQL (Curso em Vídeo)", link: "https://www.cursoemvideo.com/curso/mysql/" }
            ],
            docs: [
                { name: "Node.js Docs (PT-BR)", link: "https://nodejs.org/pt-br/docs/" },
                { name: "PostgreSQL Docs (PT-BR)", link: "https://www.postgresql.org/docs/" }
            ]
        },
        fullstack: {
            courses: [
                { name: "Full Stack (OneBitCode)", link: "https://onebitcode.com/lp/" },
                { name: "Desenvolvimento Web Completo (Udemy)", link: "https://www.udemy.com/course/web-completo/" }
            ],
            docs: [
                { name: "Full Stack Open (PT-BR)", link: "https://fullstackopen.com/pt/" }
            ]
        },
        mobile: {
            courses: [
                { name: "React Native (Rocketseat)", link: "https://app.rocketseat.com.br/react-native" },
                { name: "Flutter (Udemy)", link: "https://www.udemy.com/course/curso-flutter/" }
            ],
            docs: [
                { name: "React Native Docs (PT-BR)", link: "https://reactnative.dev/docs/getting-started" }
            ]
        },
        devops: {
            courses: [
                { name: "Docker (Udemy)", link: "https://www.udemy.com/course/curso-de-docker/" },
                { name: "Kubernetes (Alura)", link: "https://www.alura.com.br/curso-online-kubernetes" }
            ],
            docs: [
                { name: "Kubernetes Docs (PT-BR)", link: "https://kubernetes.io/pt-br/docs/home/" },
                { name: "Docker Docs (PT-BR)", link: "https://docs.docker.com/get-started/" }
            ]
        },
        datascience: {
            courses: [
                { name: "Python para Data Science (Udemy)", link: "https://www.udemy.com/course/python-para-data-science-e-machine-learning/" },
                { name: "Data Science (Alura)", link: "https://www.alura.com.br/formacao-data-science" }
            ],
            docs: [
                { name: "Pandas Docs (PT-BR)", link: "https://pandas.pydata.org/docs/" },
                { name: "Python Docs (PT-BR)", link: "https://docs.python.org/pt-br/3/" }
            ]
        },
        cloud: {
            courses: [
                { name: "AWS (Udemy)", link: "https://www.udemy.com/course/aws-certified-cloud-practitioner-portugues/" },
                { name: "Azure (Alura)", link: "https://www.alura.com.br/formacao-microsoft-azure" }
            ],
            docs: [
                { name: "AWS Docs (PT-BR)", link: "https://docs.aws.amazon.com/pt_br/" },
                { name: "Azure Docs (PT-BR)", link: "https://docs.microsoft.com/pt-br/azure/" }
            ]
        }
    }
};

// Estado do jogo
let gameState = {
    playerName: "",
    playerClass: "",
    studyPower: 4,
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    motivation: 100,
    currentQuest: 0,
    questProgress: 0,
    studying: false,
    timerInterval: null,      // Para controlar o intervalo do temporizador
    timerSeconds: 0,          // Segundos decorridos
    timerTotalSeconds: 0      // Total de segundos para a sessão
};

// Elementos do DOM
const elements = {
    characterForm: document.getElementById("character-form"),
    gameInterface: document.getElementById("game-interface"),
    heroName: document.getElementById("hero-name"),
    heroClass: document.getElementById("hero-class"),
    heroLevel: document.getElementById("hero-level"),
    heroXp: document.getElementById("hero-xp"),
    heroPower: document.getElementById("hero-power"),
    healthFill: document.getElementById("health-fill"),
    healthText: document.getElementById("health-text"),
    questTitle: document.getElementById("quest-title"),
    questDescription: document.getElementById("quest-description"),
    questProgress: document.getElementById("quest-progress"),
    questTime: document.getElementById("quest-time"),
    skillsList: document.getElementById("skills-list"),
    studyBtn: document.getElementById("study-btn"),
    restBtn: document.getElementById("rest-btn"),
    resourcesBtn: document.getElementById("resources-btn"),
    backBtn: document.getElementById("back-btn"), // Botão Voltar
    gameMessage: document.getElementById("game-message"),
    resourcesModal: document.getElementById("resources-modal"),
    resourcesContent: document.getElementById("resources-content"),
    closeModalBtn: document.querySelector(".close-btn"),
    studyPowerInput: document.getElementById("study-power"),
    powerValue: document.getElementById("power-value"),
    characterName: document.getElementById("character-name"),
    characterClass: document.getElementById("character-class"),
    creationPanel: document.getElementById("character-creation"),
    studyTimerModal: document.getElementById("study-timer-modal"),
    skillsPanel: document.getElementById("skills-panel"),
    skillsContent: document.getElementById("skills-content"),
    toggleSkillsPanel: document.getElementById("toggle-skills-panel"),
    pauseTimerBtn: document.getElementById("pause-timer-btn") // Botão de Pausa
};

// Verificação de elementos
for (const [key, element] of Object.entries(elements)) {
    if (!element) {
        console.error(`Elemento não encontrado: ${key}`);
    }
}

// Event Listeners
elements.characterForm.addEventListener("submit", startGame);
elements.studyBtn.addEventListener("click", startStudying);
elements.restBtn.addEventListener("click", rest);
elements.resourcesBtn.addEventListener("click", showResources);
elements.backBtn.addEventListener("click", goBack);
elements.closeModalBtn.addEventListener("click", hideResources);
elements.studyPowerInput.addEventListener("input", updatePowerValue);
elements.pauseTimerBtn.addEventListener("click", togglePauseTimer); // Adicionado evento para o botão de pausa
document.getElementById("close-timer-btn").addEventListener("click", stopStudying);
document.getElementById("cancel-timer-btn").addEventListener("click", stopStudying);
elements.toggleSkillsPanel.addEventListener("click", toggleSkillsPanel);

// Funções do jogo
function toggleSkillsPanel() {
    if (elements.skillsContent.style.display === "none" || elements.skillsContent.style.display === "") {
        elements.skillsContent.style.display = "block";
        elements.toggleSkillsPanel.textContent = "−"; // Muda para o símbolo de minimizar
    } else {
        elements.skillsContent.style.display = "none";
        elements.toggleSkillsPanel.textContent = "+"; // Muda para o símbolo de maximizar
    }
}

function updatePowerValue() {
    elements.powerValue.textContent = elements.studyPowerInput.value;
}

function startGame(e) {
    e.preventDefault();
    
    // Configura o estado inicial
    gameState.playerName = elements.characterName.value;
    gameState.playerClass = elements.characterClass.value;
    gameState.studyPower = parseInt(elements.studyPowerInput.value);

    // Atualiza a UI
    elements.heroName.textContent = gameState.playerName;
    elements.heroClass.textContent = gameData.classes[gameState.playerClass].name;
    elements.heroClass.style.color = gameData.classes[gameState.playerClass].color;
    elements.heroPower.textContent = gameState.studyPower + "h/dia";

    // Transição entre telas
    elements.creationPanel.style.display = "none";
    elements.gameInterface.style.display = "block";

    // Inicia a primeira missão
    startQuest(0);
    showMessage(`Bem-vindo, ${gameState.playerName}! Sua jornada como ${elements.heroClass.textContent} começa agora!`);
}

function startQuest(questIndex) {
    const classQuests = gameData.quests[gameState.playerClass];
    if (!classQuests || questIndex >= classQuests.length) {
        showMessage("Parabéns! Você completou todas as missões desta jornada!");
        return;
    }
    
    gameState.currentQuest = questIndex;
    gameState.questProgress = 0;
    
    const quest = classQuests[questIndex];
    elements.questTitle.textContent = quest.name;
    elements.questDescription.textContent = quest.description;
    elements.questTime.textContent = `Tempo estimado: ${quest.hours} horas`;
    updateQuestProgress();
    updateSkillsList();
}

function updateQuestProgress() {
    const quest = gameData.quests[gameState.playerClass][gameState.currentQuest];
    const progressPercent = (gameState.questProgress / quest.hours) * 100;
    elements.questProgress.style.width = `${progressPercent}%`;
}

function updateSkillsList() {
    elements.skillsList.innerHTML = "";
    const classQuests = gameData.quests[gameState.playerClass];
    
    classQuests.forEach((quest, index) => {
        const li = document.createElement("li");
        const skillName = document.createElement("span");
        skillName.className = "skill-name";
        skillName.textContent = quest.name;
        
        const skillXp = document.createElement("span");
        skillXp.className = "skill-xp";
        
        if (index < gameState.currentQuest) {
            li.style.opacity = "0.6";
            li.style.borderLeftColor = "#2ecc71";
            skillXp.textContent = "✔ Concluído";
        } else if (index === gameState.currentQuest) {
            li.style.borderLeftColor = "#f1c40f";
            skillXp.textContent = `XP: ${quest.xp}`;
        } else {
            li.style.opacity = "0.8";
            skillXp.textContent = `XP: ${quest.xp}`;
        }
        
        li.appendChild(skillName);
        li.appendChild(skillXp);
        elements.skillsList.appendChild(li);
    });
}

function startStudying() {
    if (gameState.studying) {
        togglePauseTimer(); // Se já está estudando, apenas alterna a pausa
        return;
    }
    if (gameState.motivation <= 0) {
        showMessage("Sua motivação está muito baixa. Descanse antes de continuar!");
        return;
    }
    
    // Configura o temporizador baseado no poder de estudo (1 hora = 60 minutos)
    gameState.timerTotalSeconds = gameState.studyPower * 60 * 60; // Converte horas para segundos
    gameState.timerSeconds = 0;
    
    // Mostra o modal do temporizador
    elements.studyTimerModal.style.display = "block";
    
    // Inicia o temporizador
    gameState.timerInterval = setInterval(updateTimer, 1000);
    gameState.studying = true;
    elements.studyBtn.disabled = true;
    elements.pauseTimerBtn.textContent = "Pausar"; // Muda o texto do botão para "Pausar"
    showMessage(`Estudando ${elements.questTitle.textContent}...`);
}

function togglePauseTimer() {
    if (gameState.studying) {
        clearInterval(gameState.timerInterval);
        gameState.studying = false;
        elements.pauseTimerBtn.textContent = "Iniciar"; // Muda o texto do botão para "Iniciar"
        showMessage("Estudo pausado.");
    } else {
        gameState.timerInterval = setInterval(updateTimer, 1000);
        gameState.studying = true;
        elements.pauseTimerBtn.textContent = "Pausar"; // Muda o texto do botão para "Pausar"
        showMessage("Estudo retomado.");
    }
}

function updateTimer() {
    gameState.timerSeconds++;
    
    // Atualiza a exibição do temporizador
    const minutes = Math.floor(gameState.timerSeconds / 60);
    const seconds = gameState.timerSeconds % 60;
    
    document.getElementById("timer-minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("timer-seconds").textContent = seconds.toString().padStart(2, '0');
    
    // Atualiza a barra de progresso
    const progressPercent = (gameState.timerSeconds / gameState.timerTotalSeconds) * 100;
    document.getElementById("timer-progress").style.width = `${progressPercent}%`;
    
    // A cada minuto (60 segundos), avança no progresso da missão
    if (gameState.timerSeconds % 60 === 0) {
        advanceStudyProgress();
    }
    
    // Verifica se o tempo acabou
    if (gameState.timerSeconds >= gameState.timerTotalSeconds) {
        stopStudying();
    }
}

function advanceStudyProgress() {
    const quest = gameData.quests[gameState.playerClass][gameState.currentQuest];
    gameState.questProgress += 1; // Avança 1 hora
    gameState.motivation -= 5;
    
    updateQuestProgress();
    updateMotivation();
    
    // Verifica se completou a missão
    if (gameState.questProgress >= quest.hours) {
        stopStudying();
        completeQuest();
    }
    
    // Verifica se a motivação acabou
    if (gameState.motivation <= 0) {
        stopStudying();
        gameState.motivation = 0;
        updateMotivation();
        showMessage("Você está exausto! Descanse para recuperar sua motivação.");
    }
}

function stopStudying() {
    clearInterval(gameState.timerInterval);
    gameState.studying = false;
    elements.studyBtn.disabled = false;
    elements.studyTimerModal.style.display = "none";
}

function completeQuest() {
    const quest = gameData.quests[gameState.playerClass][gameState.currentQuest];
    gameState.xp += quest.xp;
    gameState.studying = false;
    elements.studyBtn.disabled = false;
    
    showMessage(`Missão "${quest.name}" completa! +${quest.xp} XP`);
    checkLevelUp();
    startQuest(gameState.currentQuest + 1);
}

function checkLevelUp() {
    if (gameState.xp >= gameState.xpToNextLevel) {
        gameState.level++;
        gameState.xp -= gameState.xpToNextLevel;
        gameState.xpToNextLevel = Math.floor(gameState.xpToNextLevel * 1.5);
        
        elements.heroLevel.textContent = gameState.level;
        showMessage(`Parabéns! Você alcançou o nível ${gameState.level}!`);
    }
    
    updateXp();
}

function updateXp() {
    elements.heroXp.textContent = `${gameState.xp}/${gameState.xpToNextLevel}`;
}

function rest() {
    if (gameState.studying) {
        stopStudying();
    }
    
    const recoveryInterval = setInterval(() => {
        gameState.motivation += 10;
        if (gameState.motivation >= 100) {
            gameState.motivation = 100;
            clearInterval(recoveryInterval);
        }
        updateMotivation();
    }, 500);
    
    showMessage("Descansando e recuperando motivação...");
}

function updateMotivation() {
    elements.healthFill.style.width = `${gameState.motivation}%`;
    elements.healthText.textContent = `Motivação: ${Math.floor(gameState.motivation)}%`;
    
    if (gameState.motivation > 70) {
        elements.healthFill.style.backgroundColor = "#2ecc71";
    } else if (gameState.motivation > 30) {
        elements.healthFill.style.backgroundColor = "#f1c40f";
    } else {
        elements.healthFill.style.backgroundColor = "#e74c3c";
    }
}

function showMessage(message) {
    elements.gameMessage.textContent = message;
    elements.gameMessage.style.animation = "none";
    void elements.gameMessage.offsetWidth;
    elements.gameMessage.style.animation = "fadeIn 0.5s";
}

function showResources() {
    elements.resourcesContent.innerHTML = "";
    const classResources = gameData.resources[gameState.playerClass];
    
    // Adiciona recursos da classe
    for (const [category, items] of Object.entries(classResources)) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "resource-category";
        
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category === "docs" ? "Documentação" : "Cursos";
        categoryDiv.appendChild(categoryTitle);
        
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "resource-item";
            
            const itemTitle = document.createElement("h4");
            itemTitle.textContent = item.name;
            itemDiv.appendChild(itemTitle);
            
            const link = document.createElement("a");
            link.href = item.link;
            link.className = "resource-link";
            link.textContent = "Acessar";
            link.target = "_blank";
            itemDiv.appendChild(link);
            
            categoryDiv.appendChild(itemDiv);
        });
        
        elements.resourcesContent.appendChild(categoryDiv);
    }

    // Adiciona o painel de recursos adicionais
    const additionalResourcesDiv = document.createElement("div");
    additionalResourcesDiv.innerHTML = `
        
        
    `;
    elements.resourcesContent.appendChild(additionalResourcesDiv);

    elements.resourcesModal.style.display = "block";
}

function hideResources() {
    elements.resourcesModal.style.display = "none";
}

function goBack() {
    elements.gameInterface.style.display = "none";
    elements.creationPanel.style.display = "block";
    showMessage("Você voltou à criação do personagem.");
}

// Inicialização
updatePowerValue();
console.log("CodeQuest RPG inicializado!");