// === Código de um ChatBot de atendimento de um E-commerce ===
// 1. Laço de repetição: Do While
// 2. Estruturas condicionais: switch case, if else

#include <stdio.h>
#include <string.h>

// === variáveis globais ===
// 1. Dados do pedido
char descricaoPedido[] = "Notebook Gamer Lenovo LOQ E Core i5-12450HX, 8GB, 512GB SSD, RTX 3050 6GB, 15.6 144Hz Linux 83MES00100";
float valorPedido = 4299.00;
char formaPagamentoPedido[] = "10x de R$ 429,90";
char codRastreioPedido[] = "758#JDFRT765";

// 2. Dados do cliente
char clienteNome[] = "Leandro da Rocha";
char clienteEndereco[] = "Rua Carmélia Santos Dias, Lote 33 - Casa Branca";
char clienteEnderecoCEP[] = "78998568";
char clienteNasc[] = "2000-01-25";
char clienteCPF[] = "07745533368";

// === Função do menu ===
void exibirMenu() {
    printf("\n==== CHATBOT DE ATENDIMENTO ====\n");
    printf("Chatbot: Olá! Sou o assistente virtual. Como posso ajudar você hoje?\n");
    printf("1. Seu pedido\n");
    printf("2. Financeiro\n");
    printf("3. Dados cadastrais\n");
    printf("4. Sair\n");
    printf("Escolha uma opção: ");
}

// === Funções de retorno ===
void exibirPedido() {
    printf("\n=== INFORMAÇÕES DO PEDIDO ===\n");
    printf("Produto: %s\n", descricaoPedido);
    printf("Valor: R$ %.2f\n", valorPedido);
    printf("Pagamento: %s\n", formaPagamentoPedido);
    printf("Código de Rastreio: %s\n", codRastreioPedido);
}

void exibirDadosCadastrais() {
    printf("\n=== DADOS CADASTRAIS ===\n");
    printf("Nome: %s\n", clienteNome);
    printf("Endereço: %s\n", clienteEndereco);
    printf("CEP: %s\n", clienteEnderecoCEP);
    printf("Data de Nascimento: %s\n", clienteNasc);
    printf("CPF: %s\n", clienteCPF);
}

void exibirInfoFinanceiras() {
    printf("\n=== INFORMAÇÕES FINANCEIRAS ===\n");
    printf("Valor total: R$ %.2f\n", valorPedido);
    printf("Forma de pagamento: %s\n", formaPagamentoPedido);
    printf("Parcelas restantes: 10x\n");
}

// === Função de execução ===
int main() {
    int opcao;

    do { // Iniciando laço de repetição
        exibirMenu();
        // Iniciando tratamento de erro
        if (scanf("%d", &opcao) != 1) { // Diferente de número
            printf("ERRO !!: Digite apenas números!\n");
            while (getchar() != '\n'); // limpa buffer
            opcao = 0; // força voltar ao menu
        }
        else if (opcao < 1 || opcao > 4) { // Diferente de opções válidas do menu
            printf("\nOpção %d inválida! Use 1-4.\n", opcao);
        } // Finalizando tratamento de erro
        else {
            switch(opcao) { // Estrutura condicional
                case 1: exibirPedido(); break;
                case 2: exibirInfoFinanceiras(); break;
                case 3: exibirDadosCadastrais(); break;
                case 4: printf("\nObrigado por utilizar nosso chatbot. Até logo!\n"); break;
                default: break;
            }
        }

        if (opcao != 4) { // Diferente de 4 e atendidos os tratamentos de erro
            printf("\nPressione Enter para voltar ao menu...");
            while (getchar() != '\n'); // limpa enter pendente
            getchar(); // espera enter
        }

    } while(opcao != 4); // Finalizando laço Do while

    return 0; // Sucesso
}
