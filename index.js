let levelHero;
let victoriesHero = 25; // Alterar para testes
let defeatsHero = 5;    // Alterar para testes

// Função para calcular o saldo de vitórias
function matchStatistics(victories, defeats) {
    if (victories < 0 || defeats < 0) {
        console.log("Número inválido de vitórias ou derrotas. Por favor, insira valores positivos.");
        return null;
    }
    
    let saldo = victories - defeats; // Cálculo do saldo
    return saldo;
}

// Executa a função para calcular o saldo de vitórias
let saldoVitorias = matchStatistics(victoriesHero, defeatsHero);

// Verifica o nível do jogador com base no número de vitórias
if (saldoVitorias !== null) {
    if (victoriesHero < 10) {
        levelHero = "Ferro";
    } else if (victoriesHero <= 20) {
        levelHero = "Bronze";
    } else if (victoriesHero <= 50) {
        levelHero = "Prata";
    } else if (victoriesHero <= 80) {
        levelHero = "Ouro";
    } else if (victoriesHero <= 90) {
        levelHero = "Diamante";
    } else if (victoriesHero <= 100) {
        levelHero = "Lendário";
    } else {
        levelHero = "Imortal";
    }

    // Exibe a mensagem final com o saldo e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${levelHero}`);
}
