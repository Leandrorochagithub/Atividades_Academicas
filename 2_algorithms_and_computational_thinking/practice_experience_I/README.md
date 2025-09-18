## Objetivo da Atividade

Exercitar a lógica de programação utilizando pseudocódigo para resolver um problema real e atual do cotidiano brasileiro: o monitoramento dos preços da cesta básica. Você deverá aplicar estruturas de decisão, manipulação de variáveis e entradas simples para simular uma ferramenta de análise de variação de preços.

**Contextualização**

Você foi contratado(a) por um órgão municipal de defesa do consumidor para ajudar no desenvolvimento de uma ferramenta que auxilie na análise de variações de preços da cesta básica ao longo do tempo. O objetivo é verificar se os preços dos produtos estão aumentando de forma abusiva e gerar relatórios que ajudem na tomada de decisão.

• Nome do produto;
• Preço no mês anterior (R$);
• Preço no mês atual (R$).

**O que Seu Algoritmo Deve Fazer**

Para cada produto:

• Ler: nome, preço anterior e preço atual;
• Calcular: variação percentual;
• Exibir: se o preço aumentou, diminuiu ou permaneceu estável; se o aumento foi superior a 10%, sinalizar como abuso.

**1:** Leia os dados de três produtos da cesta básica (nome, preço anterior, preço atual)

Antes de iniciar a leitura dos dados, é necessário declarar as variáveis que serão utilizadas e, para isso, devemos especificar os tipos de dados corretos, garantindo que cada variável seja capaz de armazenar o valor esperado de forma apropriada.

Para cada um dos três produtos, deverão ser declaradas as seguintes variáveis:

• nome: tipo caractere (texto/string): usado para armazenar o nome do produto;
• preco_anterior: tipo real (número decimal): armazena o preço do produto antes da atualização;
• preco_atual: tipo real (número decimal): armazena o novo preço do produto após a atualização.

Além disso, também serão necessárias variáveis para os cálculos e as classificações que virão depois:

• variacao: tipo real: armazena a variação percentual do preço;
• situacao: tipo caractere: armazena a classificação da variação, podendo ser “AUMENTO”, “QUEDA” ou “ESTÁVEL”.

**■ | IMPORTANTE**

A escolha correta dos tipos de dados evita erros durante a execução do algoritmo e garante que os cálculos sejam realizados com precisão (especialmente ao lidar com valores decimais).

**2:**  Para cada produto, realize as seguintes operações de forma independente

• Calcule a variação percentual do preço: a variação percentual representa quanto o preço do produto aumentou ou diminuiu em relação ao preço anterior.

**Fórmula a ser utilizada:**

Variação % = (preço_atual - preço_anterior / preço_anterior) * 100

**Classifique a situação do produto com base na variação calculada, de acordo com os critérios seguintes:**

• Se a variação for maior que 0: situação = "AUMENTO";
• Se a variação for menor que 0: situação = "QUEDA";
• Se a variação for igual a 0: situação = "ESTÁVEL".

**3:** Exiba um resumo final com os totais exigidos. Para cada produto, mostre:

• nome do produto;
• preço anterior;
• preço atual;
• variação percentual (%);
• situação (AUMENTO, QUEDA ou ESTÁVEL).

## Entrega

**- 1 arquivo em C: Atividade1_CestaBasica.c**

**- 1 arquivo em pseudocódigo: pseudocode_Atividade1_CestaBasica**

<img width="671" height="830" alt="Captura de tela 2025-09-17 174046" src="https://github.com/user-attachments/assets/cd98d904-f6e9-41b2-96e4-638e7ae4f638" />

