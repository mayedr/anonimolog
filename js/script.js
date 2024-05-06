let currentUser = null;
const shareLinkInput = document.getElementById('shareLinkInput');
const questionInput = document.getElementById('questionInput');
const questionList = document.getElementById('questionList');

function login() {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim();

    if (username !== '') {
        currentUser = username;
        usernameInput.value = '';
        document.getElementById('login').classList.add('hidden');
        document.getElementById('shareLink').classList.remove('hidden');
        document.getElementById('questions').classList.remove('hidden');
        generateShareLink();
    }
}

function generateShareLink() {
    const url = window.location.href.split('?')[0] + `?user=${encodeURIComponent(currentUser)}`;
    shareLinkInput.value = url;
}

function copyLink() {
    shareLinkInput.select();
    document.execCommand('copy');
    alert('Enlace copiado al portapapeles');
}

function submitQuestion() {
    const questionContent = questionInput.value.trim();
    if (questionContent !== '') {
        const questionItem = document.createElement('li');
        questionItem.textContent = `${currentUser}: ${questionContent}`;
        questionList.appendChild(questionItem);
        questionInput.value = '';
    }
}

// Obtener el nombre de usuario de la URL si está presente
const urlParams = new URLSearchParams(window.location.search);
const userParam = urlParams.get('user');
if (userParam) {
    currentUser = decodeURIComponent(userParam);
    document.getElementById('login').classList.add('hidden');
    document.getElementById('shareLink').classList.remove('hidden');
    document.getElementById('questions').classList.remove('hidden');
    generateShareLink();
}
