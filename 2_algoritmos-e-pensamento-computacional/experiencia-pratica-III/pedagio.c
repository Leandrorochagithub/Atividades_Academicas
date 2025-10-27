#include <stdio.h> // Biblioteca padrão de entrada e saída
#define NUMERO_DIAS 7 // Constante para o número de dias, facilitando a manutenção do código

int main() {
    // === 1. DECLARAÇÃO DE VETORES E VARIÁVEIS ===
    int carros_por_dia[NUMERO_DIAS]; // Vetor para armazenar o número de carros de cada dia da semana.

    // Vetor de strings para associar o índice ao nome do dia.
    const char* dias_da_semana[NUMERO_DIAS] = {
        "Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"
    };

    // Variáveis para a lógica de encontrar o dia de maior movimento.
    int max_carros = 0;          // Guarda o maior número de carros encontrado.
    int indice_dia_pico = 0;   // Guarda o índice do dia de pico no vetor.

    // === 2. ENTRADA DE DADOS ===
    printf("==================================================\n");
    printf("  Entrada de Dados - Fluxo de Carros no Pedagio\n");
    printf("==================================================\n\n");
    printf("Por favor, insira o total de carros para cada dia da semana.\n\n");

    // Laço de repetição para ler os dados do usuário.
    for (int i = 0; i < NUMERO_DIAS; i++) {
    int input_status;

    // Loop que só termina quando um número válido for inserido
    while (1) {
        printf("Digite o total para %s: ", dias_da_semana[i]);
        input_status = scanf("%d", &carros_por_dia[i]);
        if (input_status == 1 && carros_por_dia[i] >= 0) {
            break; // O valor é válido, sai do loop while(1)
        }
        printf("\n  [ERRO] Entrada invalida! Por favor, digite um numero inteiro valido (ex: 350).\n\n");
        
        int c;
        while ((c = getchar()) != '\n' && c != EOF); // Descarta toda a entrada inválida até o 'Enter'
    }
}

    // === 3. PROCESSAMENTO DOS DADOS ===
    max_carros = carros_por_dia[0];
    indice_dia_pico = 0;

    // Laço de repetição para percorrer o vetor a partir do SEGUNDO dia (índice 1).
    for (int i = 1; i < NUMERO_DIAS; i++) {
        // Encontrar o maior valor.
        if (carros_por_dia[i] > max_carros) {
            // Atualiza as variáveis.
            max_carros = carros_por_dia[i];
            indice_dia_pico = i;
        }
    }

    const char* BOLD = "\x1b[1m"; // Negrito
    const char* RESET = "\x1b[0m"; // Resetar para modo normal

    // === 4. SAÍDA DE DADOS (Relatório Formatado) ===
    printf("\n\n============================================\n");
    printf("     Relatorio Semanal do Pedagio\n");
    printf("============================================\n\n");

    // Laço para exibir os resultados de forma organizada.
    for (int i = 0; i < NUMERO_DIAS; i++) {
        // Imprime o nome do dia e a quantidade de carros.
        printf("%s: %d carros", dias_da_semana[i], carros_por_dia[i]);
        if (i == indice_dia_pico) {
            printf("\n============================================\n");
            printf("%s", BOLD);
            printf("O dia de maior movimento foi %s, com %d carros.\n", dias_da_semana[indice_dia_pico], max_carros);
            printf("%s", RESET);  // Reseta para o normal
            printf("============================================\n");
        } else {
            printf("\n");
        }
    }
    
    return 0;
}