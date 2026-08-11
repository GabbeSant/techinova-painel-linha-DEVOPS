# Respostas do LAB 01

Nome:
Matricula:
Dupla (M2 em diante):

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro:**
01ef93b
**Autor:**
Tarcisio Melo
**Data:**
15 de junho de 2026 ás 22:38
**Linha alterada (antes e depois):**

```
antes:
function converterTemperatura(leitura) {
  return leitura * 9 / 5 + 32;
}
depois:
function converterTemperatura(leitura) {
  return (leitura * 9 / 5) + 32;
}
```

---

## M3 - O segredo vazado

**O que voce esperava ver no `git status` e o que apareceu:**

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:**

Depois do push, a plataforma do GitHub não exibe a pasta com as credenciais ao público, ficando única e exclusivamente na minha máquina. É como se ele tivesse ignorado a pasta com as informações que não deveriam ir a público.
---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

- `<<<<<<<` : Indica o início do seu código atual
- `=======` : É a linha divisória. Tudo o que está acima dela é o seu código local, e tudo o que está abaixo é o código vindo da outra branch/commit.
- `>>>>>>>` : Indica o fim do código recebido

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**
Mantemos o original "Painel da Linha 3" mantendo do jeito original
---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**
025e2e0

**Hash do commit de revert:** e7dea17

**Por que `git revert` e nao `git reset` neste caso:**
O git revert, pois ele reverteu as mudanças feitas e cria um novo commit para isto