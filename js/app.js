import { Cliente } from './classes.js';
import { formatarNomeCaps } from './utils.js';

// Lista para armazenar os clientes localmente
let listaClientes = [];

const form = document.getElementById('cliente-form');

// Manipulação do DOM com addEventListener (sem usar onclick no HTML)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nomeInput = document.getElementById('nome').value;
    const emailInput = document.getElementById('email').value;

    // Criando instância da classe
    const novoCliente = new Cliente(formatarNomeCaps(nomeInput), emailInput);
    
    listaClientes.push(novoCliente);
    console.log("Lista atualizada:", listaClientes);
    
    renderizarTabela();
});

function renderizarTabela() {
    const tabela = document.getElementById('lista-clientes');
    // Usando map para transformar a lista de objetos em linhas de HTML
    tabela.innerHTML = listaClientes.map(c => `
        <tr>
            <td>${c.nome}</td>
            <td>${c.email}</td>
        </tr>
    `).join('');
}