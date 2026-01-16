// Função pura para formatar nomes (Programação Funcional)
export const formatarNomeCaps = (nome) => nome.toUpperCase();

// Exemplo de uso de find para buscar cliente por e-mail
export const buscarPorEmail = (lista, email) => {
    return lista.find(cliente => cliente.email === email); //
};