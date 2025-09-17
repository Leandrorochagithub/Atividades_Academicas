#include <stdio.h> // Entrada e saída de dados
#include <string.h> // Manipular textos

// Estruturar os dados om struct
struct produto{
    char nome[50];
    float preco_anterior;
    float preco_atual;
    float variacao;
};

// Funcao principal
int main(){
    // Declara limite de inlusao no array da estrutura produtos
    struct produto produtos[3];

    // Loop para coletar dados dos produtos até 3
    for (int i=0; i<3;i++){
        // Solicita o nome do produto: %d significa coletar o valor inteiro de i+1.
        printf("Digite o nome do %dº produto: ", i+1);
        // Lê o nome do produto (até 49 caracteres, incluindo espaços, eceto quebra de linha (^\n))
        // Ex.: scanf(" %c", produtos[i].nome -> Arroz integral retornaria só Arroz, pararia após 1° espaço
        // produtos[i].nome: Armazena em i o nome do 1° produto e incrementa para a próxima resposta ser o 2°
        // Para o tipo char em um array, não é preciso usar & como ponteiro
        scanf(" %49[^\n]", produtos[i].nome);
        
        // Solicita o valor anterior do produto
        printf("Digite o valor anterior (1.99): ");
        // Lê o valor anterior como float (usar ponto decimal, não vírgula)
        scanf("%f", &produtos[i].preco_anterior);
        
        // Solicita o valor atual do produto
        printf("Digite o valor atual (1.99): ");
        // Lê o valor atual como float (usar ponto decimal, não vírgula)
        scanf("%f", &produtos[i].preco_atual);

        // Limpa o buffer de entrada para remover qualquer caractere residual
        while (getchar() != '\n');
        printf("\n");
        
        // Calcula a variação percentual do preço
        produtos[i].variacao = ((produtos[i].preco_atual - produtos[i].preco_anterior) / 
                               produtos[i].preco_anterior) * 100;
}

    // Exibe o cabeçalho do relatório
    printf("\n=== RELATORIO DE VARIACAO DE PRECOS ===\n");
    
    // Loop para exibir os resultados dos 3 produtos
    for (int i = 0; i < 3; i++) {
        // Exibe informações do produto
        printf("\nProduto %d: %s\n", i+1, produtos[i].nome);
        printf("Preco anterior: R$ %.2f\n", produtos[i].preco_anterior);
        printf("Preco atual: R$ %.2f\n", produtos[i].preco_atual);
        printf("Variacao: %.2f%%\n", produtos[i].variacao);
        
        // Verifica e exibe a situação do preço
        if (produtos[i].variacao > 0) {
            printf("Situação: AUMENTO\n");
        } else if (produtos[i].variacao < 0) {
            printf("Situação: QUEDA\n");
        } else {
            printf("Situação: ESTAVEL\n");
        }
    }

    return 0;
}


