const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal fonte de proteína animal proveniente da pecuária?",
        alternativas: [
            {
                texto: "Leite",
                afirmacao: "O leite é uma importante fonte de proteína, mas a carne é a principal."
            },
            {
                texto: "Carne",
                afirmacao: "Correto! A carne é a principal fonte de proteína animal na pecuária."
            }
        ]
    },
    {
        enunciado: "Qual é a raça de gado leiteiro mais comum no Brasil?",
        alternativas: [
            {
                texto: "Nelore",
                afirmacao: "Nelore é uma raça de gado de corte, não leiteiro."
            },
            {
                texto: "Holandês",
                afirmacao: "Exato! O Holandês é a principal raça de gado leiteiro no Brasil."
            }
        ]
    },
    {
        enunciado: "Qual prática é essencial para o manejo sanitário dos bovinos?",
        alternativas: [
            {
                texto: "Vacinação regular",
                afirmacao: "Correto! A vacinação regular é crucial para a saúde do gado."
            },
            {
                texto: "Uso de ração caseira",
                afirmacao: "Embora importante, a ração caseira não substitui a vacinação."
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo da inseminação artificial na pecuária?",
        alternativas: [
            {
                texto: "Melhorar a genética do rebanho",
                afirmacao: "Correto! A inseminação artificial visa melhorar a genética do rebanho."
            },
            {
                texto: "Aumentar a quantidade de pastagens",
                afirmacao: "Não, o aumento de pastagens não é o objetivo da inseminação artificial."
            }
        ]
    },
    {
        enunciado: "Qual é o impacto ambiental mais comum da pecuária intensiva?",
        alternativas: [
            {
                texto: "Redução da biodiversidade",
                afirmacao: "Correto! A pecuária intensiva frequentemente leva à redução da biodiversidade."
            },
            {
                texto: "Melhora da qualidade do solo",
                afirmacao: "Na verdade, a pecuária intensiva pode prejudicar a qualidade do solo."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo das suas respostas:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();