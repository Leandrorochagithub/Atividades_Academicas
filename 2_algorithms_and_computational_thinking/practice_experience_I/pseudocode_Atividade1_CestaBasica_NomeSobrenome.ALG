algoritmo "VariacaoPrecosProdutos"
var
   // Variáveis para o primeiro produto
   nome1: caractere
   preco_ant1, preco_atual1, variacao1: real

   // Variáveis para o segundo produto
   nome2: caractere
   preco_ant2, preco_atual2, variacao2: real

   // Variáveis para o terceiro produto
   nome3: caractere
   preco_ant3, preco_atual3, variacao3: real

inicio
   // Dados do primeiro produto
   escreva("Digite o nome do 1º produto: ")
   leia(nome1)
   escreva("Digite o valor anterior: ")
   leia(preco_ant1)
   escreva("Digite o valor atual: ")
   leia(preco_atual1)
   variacao1 := ((preco_atual1 - preco_ant1) / preco_ant1) * 100
   escreval()

   // Dados do segundo produto
   escreva("Digite o nome do 2º produto: ")
   leia(nome2)
   escreva("Digite o valor anterior: ")
   leia(preco_ant2)
   escreva("Digite o valor atual: ")
   leia(preco_atual2)
   variacao2 := ((preco_atual2 - preco_ant2) / preco_ant2) * 100
   escreval()

   // Dados do terceiro produto
   escreva("Digite o nome do 3º produto: ")
   leia(nome3)
   escreva("Digite o valor anterior: ")
   leia(preco_ant3)
   escreva("Digite o valor atual: ")
   leia(preco_atual3)
   variacao3 := ((preco_atual3 - preco_ant3) / preco_ant3) * 100
   escreval()

   // Exibição dos resultados
   escreval("=== RELATÓRIO DE VARIAÇÃO DE PREÇOS ===")
   escreval()

   // Resultado do primeiro produto
   escreval("Produto 1: ", nome1)
   escreval("Preço anterior: R$ ", preco_ant1)
   escreval("Preço atual: R$ ", preco_atual1)
   escreval("Variação: ", variacao1,4:2,"%")
   se variacao1 > 0 entao
      escreval("Situação: AUMENTO")
   senao
      se variacao1 < 0 entao
         escreval("Situação: REDUÇÃO")
      senao
         escreval("Situação: ESTÁVEL")
      fimse
   fimse
   escreval()

   // Resultado do segundo produto
   escreval("Produto 2: ", nome2)
   escreval("Preço anterior: R$ ", preco_ant2)
   escreval("Preço atual: R$ ", preco_atual2)
   escreval("Variação: ", variacao2,4:2, "%")
   se variacao2 > 0 entao
      escreval("Situação: AUMENTO")
   senao
      se variacao2 < 0 entao
         escreval("Situação: REDUÇÃO")
      senao
         escreval("Situação: ESTÁVEL")
      fimse
   fimse
   escreval()

   // Resultado do terceiro produto
   escreval("Produto 3: ", nome3)
   escreval("Preço anterior: R$ ", preco_ant3)
   escreval("Preço atual: R$ ", preco_atual3)
   escreval("Variação: ", variacao3,4:2, "%")
   se variacao3 > 0 entao
      escreval("Situação: AUMENTO")
   senao
      se variacao3 < 0 entao
         escreval("Situação: REDUÇÃO")
      senao
         escreval("Situação: ESTÁVEL")
      fimse
   fimse

fimalgoritmo