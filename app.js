// app.js
import { CriarTarefa } from './components/criarTarefa.js'; // Ajuste o caminho para o arquivo correto

// Limpar o formulário
function CleanForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

const button = document.getElementById('creat');

// Criar Tarefa e Limpar inputs
button.addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Verifica se os campos foram preenchidos
    if (title !== '' && description !== '') {
        CriarTarefa(title, description);
        CleanForm();
    }
});

let darkMode = false;
const darkModeButton = document.getElementById('DarkModeButton');
const themeStylesheet = document.getElementById('themeStylesheet');

// Função para alternar entre os modos
function toggleDarkMode() {
    if (!darkMode) {
        themeStylesheet.href = 'style-dark.css'; // Alterna para o modo escuro
        darkModeButton.style.backgroundColor = "darkgray";
        darkModeButton.style.marginLeft = "25px";
        darkModeButton.style.transition = "0.2s";
        darkMode = true;
    } else {
        themeStylesheet.href = 'style-light.css'; // Alterna para o modo claro
        darkModeButton.style.backgroundColor = "white";
        darkModeButton.style.marginLeft = "5px";
        darkMode = false;
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);
