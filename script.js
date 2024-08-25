

function CriarTarefa(Titulo, Descrição) {
    
    //pegar o etxto e o limite
    //ver quantos caracteres tem dentro do texto
    //pegar o texto e colocar em uma variavel
    //limitar o numero de caracteres e adiconar os ...
    //retornar o valor
    // Criar Tarefa
    

    function CaracterLimit(text, limit) {
        if (text.length > limit) { //verifica se o texto e maior que o limite
            return text.slice(0, limit) + '...'; //corta o etxto e adiciona os ... e retorna o texto
        } else {
            return text; // se não for maior que o limite evia
        }
    }
    const tasksContainer = document.getElementById('Tasks-Container');
    const container = document.createElement('div');
    container.classList.add('Task-Container');

    const TextContainer = document.createElement('div');
    TextContainer.classList.add('Text-Container');

    const titleElement = document.createElement('h1');
    titleElement.innerText = CaracterLimit(Titulo, 14); // Limita o título
    titleElement.classList.add('Task-Title');

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = CaracterLimit(Descrição, 17); // Limita a descrição
    descriptionElement.classList.add('Task-Description');

    const delet = document.createElement('button');
    delet.innerText = 'Deletar';
    delet.classList.add('Delete');

    TextContainer.appendChild(titleElement);
    TextContainer.appendChild(descriptionElement);
    container.appendChild(TextContainer);
    container.appendChild(delet);

    // Função para deletar a tarefa
    delet.addEventListener('click', function() {
        tasksContainer.removeChild(container);
    });

    // Adiciona a nova tarefa no início
    tasksContainer.prepend(container);
}



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
    if (title && description !== '') {
        CriarTarefa(title, description);
        CleanForm();
    }
});

var darkMode = false;

const darkModeButton = document.getElementById('DarkModeButton');
const themeStylesheet = document.getElementById('themeStylesheet');
const body = document.getElementById('body');

darkModeButton.addEventListener('click', function() {
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
});
