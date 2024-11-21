// criarTarefa.js
export function CriarTarefa(Titulo, Descrição) {
    function CaracterLimit(text, limit) {
        if (typeof text === 'string' && text.length > limit) {
            return text.slice(0, limit) + '...'; // Limita o texto
        }
        return text; // Se não for maior que o limite, retorna o texto original
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
