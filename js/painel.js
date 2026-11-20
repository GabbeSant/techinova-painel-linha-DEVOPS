const TABELA = document.querySelector('#sensores tbody');

async function carregarSensores() {
  try {
    const resposta = await fetch('dados/sensores.json');
    if (!resposta.ok) throw new Error('Falha ao carregar dados dos sensores');
    
    const sensores = await resposta.json();
    sensores.forEach(desenharLinha);
  } catch (erro) {
    console.error('Erro:', erro);
  }
}

function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function desenharLinha(sensor) {
  const fahrenheit = converterCelsiusParaFahrenheit(sensor.valor).toFixed(1);
  const tr = document.createElement('tr');
  
  tr.innerHTML = `
    <td>${sensor.codigo}</td>
    <td>${sensor.descricao}</td>
    <td>${fahrenheit} °F</td>
    <td>ok</td>
  `;
  
  TABELA.appendChild(tr);
}

function marcarAtualizacao() {
  const elementoAtualizacao = document.querySelector('#atualizado');
  if (elementoAtualizacao) {
    elementoAtualizacao.textContent = new Date().toLocaleString('pt-BR');
  }
}

carregarSensores();
marcarAtualizacao();