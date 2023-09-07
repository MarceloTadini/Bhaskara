// Espera até que o DOM esteja completamente carregado para garantir que os elementos estejam disponíveis
document.addEventListener('DOMContentLoaded', function () {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    // Selecionando cada elemento do form e jogando dentro de uma variável
    const calculateButton = document.getElementById('calcular'); // Botão de cálculo
    const cleanButton = document.getElementById('limpar');     // Botão de limpar
    const resultElement = document.getElementById('resultado'); // Elemento onde o resultado será exibido
    const bhaskaraForm = document.getElementById('bhaskaraForm');  // Formulário que contém os campos

    // Adiciona um ouvinte de evento para o clique no botão "Calcular"
    calculateButton.addEventListener('click', function () {
        // Obtém os valores dos inputs e converte em números de ponto flutuante
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        // Calcula o delta 
        const delta = b ** 2 - 4 * a * c;

        // Verifica se o delta é um número válido
        if (isNaN(delta)) {
            resultElement.textContent = 'Preencha os campos corretamente.';
        } else if (delta < 0) {
            resultElement.textContent = 'Delta é negativo, não há soluções reais.';
        } else {
            // Calcula as raízes (x1 e x2) e exibe o resultado
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);

            resultElement.textContent = `X': ${x1.toFixed(2)}, X'': ${x2.toFixed(2)}`;
        }
    });

    // Adiciona um ouvinte de evento para o clique no botão "Limpar"
    cleanButton.addEventListener('click', function () {
        // Reseta o formulário e limpa o elemento de resultado
        bhaskaraForm.reset();
        resultElement.textContent = '';
    });
});
