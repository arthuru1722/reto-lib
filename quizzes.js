// Dados dos questionários
const quizzes = {
    peter_pan_quiz: {
        livroId: 1,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual é o nome completo de Peter Pan?",
                opcoes: [
                    "Peter James Pan",
                    "Peter Michael Pan",
                    "Peter Banning",
                    "Peter nunca revela seu sobrenome"
                ],
                respostaCorreta: 3
            },
            {
                id: 2,
                pergunta: "O que Peter Pan perdeu que foi encontrado pela família Darling?",
                opcoes: [
                    "Seu punhal",
                    "Sua sombra",
                    "Seu chapéu",
                    "Sapatinhos de fada"
                ],
                respostaCorreta: 1
            },
            {
                id: 3,
                pergunta: "Qual é o alimento imaginário dos Meninos Perdidos?",
                opcoes: [
                    "Bolo de nuvem",
                    "Sopa de sonhos",
                    "Pó de estrelas",
                    "Leite de dragão"
                ],
                respostaCorreta: 0
            },
            {
                id: 4,
                pergunta: "Como Wendy costura a sombra de Peter Pan?",
                opcoes: [
                    "Com linha de aranha",
                    "Com seu cabelo",
                    "Com agulha de osso",
                    "Com beijos"
                ],
                respostaCorreta: 0
            },
            {
                id: 5,
                pergunta: "Qual é a única coisa que pode ferir o Capitão Gancho?",
                opcoes: [
                    "Luz do sol",
                    "O próprio gancho",
                    "O canto do galo",
                    "Dentes de crocodilo"
                ],
                respostaCorreta: 2
            },
            {
                id: 6,
                pergunta: "Por que o crocodilo persegue Gancho?",
                opcoes: [
                    "Ele comeu sua perna",
                    "Peter Pan o treinou",
                    "Quer devorar sua mão",
                    "Gancho matou seus filhotes"
                ],
                respostaCorreta: 2
            },
            {
                id: 7,
                pergunta: "Como Peter Pan entra no quarto dos Darling?",
                opcoes: [
                    "Pela porta dos fundos",
                    "Voando pela janela",
                    "Pela chaminé",
                    "Através do espelho"
                ],
                respostaCorreta: 1
            },
            {
                id: 8,
                pergunta: "Qual é o nome da fada de Peter Pan?",
                opcoes: [
                    "Prata",
                    "Lua",
                    "Sino",
                    "Pó"
                ],
                respostaCorreta: 2
            },
            {
                id: 9,
                pergunta: "O que acontece se alguém disser \"Não acredito em fadas\"?",
                opcoes: [
                    "Ganham asas",
                    "Uma fada morre",
                    "Perdem a memória",
                    "Voltam para casa"
                ],
                respostaCorreta: 1
            },
            {
                id: 10,
                pergunta: "Qual personagem NÃO é um Menino Perdido?",
                opcoes: [
                    "Curly",
                    "Nibs",
                    "Slightly",
                    "Smee"
                ],
                respostaCorreta: 3
            },
            {
                id: 11,
                pergunta: "O que o pó de fada permite que as crianças façam?",
                opcoes: [
                    "Ler mentes",
                    "Ficar invisíveis",
                    "Viajar no tempo",
                    "Voar"
                ],
                respostaCorreta: 3
            },
            {
                id: 12,
                pergunta: "Qual é o nome da ilha onde Peter Pan vive?",
                opcoes: [
                    "Ilha do Nunca",
                    "Terra do Nunca",
                    "Ilha da Fantasia",
                    "Nunca Mais"
                ],
                respostaCorreta: 1
            },
            {
                id: 13,
                pergunta: "Qual é a maior fraqueza de Peter Pan?",
                opcoes: [
                    "Medo de escuro",
                    "Falta de memória",
                    "Inveja de adultos",
                    "Incapacidade de amar"
                ],
                respostaCorreta: 1
            },
            {
                id: 14,
                pergunta: "O que Wendy se torna na Terra do Nunca?",
                opcoes: [
                    "Rainha",
                    "Mãe dos Meninos Perdidos",
                    "Professora",
                    "Guardiã do tesouro"
                ],
                respostaCorreta: 1
            },
            {
                id: 15,
                pergunta: "Qual destes NÃO é um grupo da Terra do Nunca?",
                opcoes: [
                    "Piratas",
                    "Índios",
                    "Sereias",
                    "Gigantes"
                ],
                respostaCorreta: 3
            },
            {
                id: 16,
                pergunta: "Como Capitão Gancho perdeu sua mão?",
                opcoes: [
                    "Cortada por Peter Pan",
                    "Comida pelo crocodilo",
                    "Perdida em batalha",
                    "Autoamputada"
                ],
                respostaCorreta: 1
            },
            {
                id: 17,
                pergunta: "Qual é o verdadeiro nome de Capitão Gancho?",
                opcoes: [
                    "James Hook",
                    "Edward Teach",
                    "Barba Negra",
                    "Jack Rackham"
                ],
                respostaCorreta: 0
            },
            {
                id: 18,
                pergunta: "Por que Peter Pan rejeita crescer?",
                opcoes: [
                    "Medo de responsabilidades",
                    "Trauma familiar",
                    "Desejo de liberdade",
                    "Maldição da fada"
                ],
                respostaCorreta: 2
            },
            {
                id: 19,
                pergunta: "Qual personagem é descrito como \"um pouco prestativo\"?",
                opcoes: [
                    "Smee",
                    "Nana",
                    "Sinosinho",
                    "John Darling"
                ],
                respostaCorreta: 0
            },
            {
                id: 20,
                pergunta: "Quem é o líder dos índios na Terra do Nunca?",
                opcoes: [
                    "Chefe Hokaido",
                    "Princesa Tigrinha",
                    "Grande Pajé",
                    "Gigante Tonelada"
                ],
                respostaCorreta: 1
            },
            {
                id: 21,
                pergunta: "Qual destes é um hábito perigoso de Peter Pan?",
                opcoes: [
                    "Colecionar relógios",
                    "Morder unhas",
                    "Esquecer aniversários",
                    "Fazer apostas"
                ],
                respostaCorreta: 2
            },
            {
                id: 22,
                pergunta: "O que salva Peter Pan da morte no livro original?",
                opcoes: [
                    "O aplauso das crianças",
                    "Lágrimas de Wendy",
                    "Pó de fada extra",
                    "Intervenção dos índios"
                ],
                respostaCorreta: 0
            },
            {
                id: 23,
                pergunta: "Qual é a relação entre Sininho e Wendy?",
                opcoes: [
                    "Amigas inseparáveis",
                    "Irmãs perdidas",
                    "Rivais pelo afeto de Peter",
                    "Aliadas contra piratas"
                ],
                respostaCorreta: 2
            },
            {
                id: 24,
                pergunta: "Como os Darling retornam da Terra do Nunca?",
                opcoes: [
                    "No barco dos piratas",
                    "Voando com pó mágico",
                    "Através de um portal",
                    "No dorso do crocodilo"
                ],
                respostaCorreta: 1
            },
            {
                id: 25,
                pergunta: "Qual é o animal de estimação da família Darling?",
                opcoes: [
                    "Gato siamês",
                    "Cachorro São Bernardo",
                    "Papagaio falante",
                    "Lagarto exótico"
                ],
                respostaCorreta: 1
            },
            {
                id: 26,
                pergunta: "O que Peter Pan chama de \"morte terrivelmente grande aventura\"?",
                opcoes: [
                    "Crescer",
                    "Envelhecer",
                    "Morrer",
                    "Amar"
                ],
                respostaCorreta: 2
            },
            {
                id: 27,
                pergunta: "Qual personagem diz \"Segunda estrela à direita e direto até o amanhecer\"?",
                opcoes: [
                    "Peter Pan",
                    "Wendy",
                    "Sinosinho",
                    "Capitão Gancho"
                ],
                respostaCorreta: 0
            },
            {
                id: 28,
                pergunta: "Qual é o único modo de vencer Peter Pan em combate?",
                opcoes: [
                    "Usando veneno",
                    "Atacando pelas costas",
                    "Explorando sua distração",
                    "Roubando sua sombra"
                ],
                respostaCorreta: 2
            },
            {
                id: 29,
                pergunta: "O que Sininho bebe quando está ferida?",
                opcoes: [
                    "Orvalho da lua",
                    "Mel de abelha-fada",
                    "Água do lago das sereias",
                    "Poção da floresta"
                ],
                respostaCorreta: 0
            },
            {
                id: 30,
                pergunta: "Qual é o destino final de Peter Pan?",
                opcoes: [
                    "Torna-se humano",
                    "Rei da Terra do Nunca",
                    "Guia de novas crianças",
                    "Navega com os piratas"
                ],
                respostaCorreta: 2
            },
            {
                id: 31,
                pergunta: "Qual é o nome do navio pirata na Terra do Nunca?",
                opcoes: [
                    "Pérola Negra",
                    "Jolly Roger",
                    "Holandês Voador",
                    "Hispaniola"
                ],
                respostaCorreta: 1
            },
            {
                id: 32,
                pergunta: "Por que Peter Pan consegue voar originalmente?",
                opcoes: [
                    "Nasceu com o dom",
                    "Pó de fada + pensamentos felizes",
                    "Magia das sereias",
                    "Treinamento com fadas"
                ],
                respostaCorreta: 1
            },
            {
                id: 33,
                pergunta: "O que os Meninos Perdidos mais desejam?",
                opcoes: [
                    "Um pai",
                    "Uma mãe",
                    "Tesouro",
                    "Voltar para casa"
                ],
                respostaCorreta: 1
            },
            {
                id: 34,
                pergunta: "Qual é o único adulto que consegue ver Peter Pan?",
                opcoes: [
                    "Sr. Darling",
                    "Sra. Darling",
                    "Capitão Gancho",
                    "Chefe dos índios"
                ],
                respostaCorreta: 1
            },
            {
                id: 35,
                pergunta: "Como Peter Pan salva Tiger Lily?",
                opcoes: [
                    "Lutando contra os piratas",
                    "Imitando a voz de Gancho",
                    "Destruindo a jangada",
                    "Pedindo ajuda às sereias"
                ],
                respostaCorreta: 1
            },
            {
                id: 36,
                pergunta: "Qual presente Sininho dá para Wendy?",
                opcoes: [
                    "Um beijo",
                    "Noz oca",
                    "Pó de fada",
                    "Colar de pérolas"
                ],
                respostaCorreta: 0
            },
            {
                id: 37,
                pergunta: "O que acontece com as crianças que caem da nau voadora?",
                opcoes: [
                    "São salvas por Peter",
                    "Viram estrelas",
                    "São capturadas por piratas",
                    "Afogam-se"
                ],
                respostaCorreta: 1
            }
        ]
    },
    alice_pais_maravilhas_quiz: {
        livroId: 3,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual animal Alice segue para entrar no País das Maravilhas?",
                opcoes: [
                    "Gato de Cheshire",
                    "Coelho Branco",
                    "Lagarta Azul",
                    "Lebre de Março"
                ],
                respostaCorreta: 1
            },
            {
                id: 2,
                pergunta: "O que está escrito no frasco que Alice bebe?",
                opcoes: [
                    "Coma-me",
                    "Beba-me",
                    "Experimente-me",
                    "Prove-me"
                ],
                respostaCorreta: 1
            },
            {
                id: 3,
                pergunta: "O que faz Alice crescer após comer?",
                opcoes: [
                    "Cogumelo",
                    "Bolo",
                    "Geleia",
                    "Pão"
                ],
                respostaCorreta: 1
            },
            {
                id: 4,
                pergunta: "Qual personagem desaparece deixando apenas seu sorriso?",
                opcoes: [
                    "Coelho Branco",
                    "Chapeleiro Maluco",
                    "Gato de Cheshire",
                    "Rainha de Copas"
                ],
                respostaCorreta: 2
            },
            {
                id: 5,
                pergunta: "Onde é realizado o Chá Maluco?",
                opcoes: [
                    "Castelo da Rainha",
                    "Casa da Lebre",
                    "Sob a árvore",
                    "Jardim das Flores"
                ],
                respostaCorreta: 1
            },
            {
                id: 6,
                pergunta: "Quem são os participantes do Chá Maluco?",
                opcoes: [
                    "Alice, Coelho e Lagarta",
                    "Chapeleiro, Lebre e Arganaz",
                    "Duquesa, Gato e Rei",
                    "Tweedledee, Tweedledum e Rainha"
                ],
                respostaCorreta: 1
            },
            {
                id: 7,
                pergunta: "Qual a frase mais famosa da Rainha de Copas?",
                opcoes: [
                    "Mais chá!",
                    "Cortem-lhe a cabeça!",
                    "Através do espelho",
                    "Curioser e curioser"
                ],
                respostaCorreta: 1
            },
            {
                id: 8,
                pergunta: "Qual jogo a Rainha de Copas adora jogar?",
                opcoes: [
                    "Xadrez vivo",
                    "Póquer de flores",
                    "Croqué com flamingos",
                    "Boliche com ouriços"
                ],
                respostaCorreta: 2
            },
            {
                id: 9,
                pergunta: "O que Alice encontra sentado num cogumelo?",
                opcoes: [
                    "Coelho Branco",
                    "Gato de Cheshire",
                    "Lagarta Azul",
                    "Chapeleiro Maluco"
                ],
                respostaCorreta: 2
            },
            {
                id: 10,
                pergunta: "Qual personagem pergunta 'Quem é você?' para Alice?",
                opcoes: [
                    "Rainha de Copas",
                    "Lagarta Azul",
                    "Duquesa",
                    "Lebre de Março"
                ],
                respostaCorreta: 1
            },
            {
                id: 11,
                pergunta: "O que o Gato de Cheshire diz sobre todos no País das Maravilhas?",
                opcoes: [
                    "São amigáveis",
                    "São perigosos",
                    "São loucos",
                    "São invisíveis"
                ],
                respostaCorreta: 2
            },
            {
                id: 12,
                pergunta: "Qual é o crime do Valete de Copas?",
                opcoes: [
                    "Roubar os bolos da Rainha",
                    "Roubar as tortas da Rainha",
                    "Beijar a Rainha",
                    "Faltar ao chá"
                ],
                respostaCorreta: 1
            },
            {
                id: 13,
                pergunta: "Quem canta 'Twinkle, Twinkle, Little Bat'?",
                opcoes: [
                    "Chapeleiro Maluco",
                    "Lebre de Março",
                    "Gato de Cheshire",
                    "Lagarta Azul"
                ],
                respostaCorreta: 0
            },
            {
                id: 14,
                pergunta: "O que o Coelho Branco confunde Alice com?",
                opcoes: [
                    "Sua empregada",
                    "Sua irmã",
                    "A Rainha",
                    "A Duquesa"
                ],
                respostaCorreta: 0
            },
            {
                id: 15,
                pergunta: "Qual personagem fala em enigmas e charadas?",
                opcoes: [
                    "Lagarta Azul",
                    "Chapeleiro Maluco",
                    "Gato de Cheshire",
                    "Rainha de Copas"
                ],
                respostaCorreta: 1
            },
            {
                id: 16,
                pergunta: "O que acontece quando Alice come de um lado do cogumelo?",
                opcoes: [
                    "Cresce",
                    "Diminui",
                    "Flutua",
                    "Adormece"
                ],
                respostaCorreta: 0
            },
            {
                id: 17,
                pergunta: "Quem guarda a pequena porta no início da história?",
                opcoes: [
                    "Gato de Cheshire",
                    "Lagarta Azul",
                    "Coelho Branco",
                    "Duquesa"
                ],
                respostaCorreta: 2
            },
            {
                id: 18,
                pergunta: "Qual destes NÃO é um personagem do livro?",
                opcoes: [
                    "Arganaz",
                    "Griffin",
                    "Dodo",
                    "Pássaro Dodô"
                ],
                respostaCorreta: 1
            },
            {
                id: 19,
                pergunta: "Onde Alice encontra o Gato de Cheshire pela primeira vez?",
                opcoes: [
                    "Casa da Duquesa",
                    "Jardim da Rainha",
                    "Floresta",
                    "Praia das Lágrimas"
                ],
                respostaCorreta: 0
            },
            {
                id: 20,
                pergunta: "Por que Alice começa a chorar no capítulo 2?",
                opcoes: [
                    "Sente saudades de casa",
                    "Não consegue abrir uma porta",
                    "Cresce demais e fica presa",
                    "Perde seu gatinho"
                ],
                respostaCorreta: 2
            },
            {
                id: 21,
                pergunta: "Quem conta a história da Morsa e do Carpinteiro?",
                opcoes: [
                    "Tweedledee",
                    "Chapeleiro Maluco",
                    "Gêmeos Tweedle",
                    "Carneiro"
                ],
                respostaCorreta: 2
            },
            {
                id: 22,
                pergunta: "Qual personagem usa luvas e um leque?",
                opcoes: [
                    "Coelho Branco",
                    "Rainha de Copas",
                    "Duquesa",
                    "Lebre de Março"
                ],
                respostaCorreta: 0
            },
            {
                id: 23,
                pergunta: "O que a Lagarta Azul está fazendo quando Alice a encontra?",
                opcoes: [
                    "Fumando narguilé",
                    "Tecendo seda",
                    "Comendo cogumelo",
                    "Dormindo"
                ],
                respostaCorreta: 0
            },
            {
                id: 24,
                pergunta: "Qual é o verdadeiro nome da Alice do autor?",
                opcoes: [
                    "Alice Lindell",
                    "Alice Hargreaves",
                    "Alice Liddell",
                    "Alice Carroll"
                ],
                respostaCorreta: 2
            },
            {
                id: 25,
                pergunta: "O que significa 'Caucus Race' no livro?",
                opcoes: [
                    "Corrida sem regras",
                    "Corrida política",
                    "Corrida circular",
                    "Corrida aquática"
                ],
                respostaCorreta: 2
            },
            {
                id: 26,
                pergunta: "Qual personagem fala 'Eu estou atrasado!'?",
                opcoes: [
                    "Gato de Cheshire",
                    "Chapeleiro Maluco",
                    "Coelho Branco",
                    "Rei de Copas"
                ],
                respostaCorreta: 2
            },
            {
                id: 27,
                pergunta: "O que Alice descobre no final da história?",
                opcoes: [
                    "Estava sonhando",
                    "Viajou no tempo",
                    "Entrou num livro",
                    "Foi enfeitiçada"
                ],
                respostaCorreta: 0
            },
            {
                id: 28,
                pergunta: "Qual destes é um conselho do Gato de Cheshire?",
                opcoes: [
                    "Sempre siga o coelho",
                    "Se não sabe para onde ir, qualquer caminho serve",
                    "Não acredite em espelhos",
                    "Mantenha seu tamanho"
                ],
                respostaCorreta: 1
            },
            {
                id: 29,
                pergunta: "Quem canta 'Will you, won't you, will you, won't you, will you join the dance?'?",
                opcoes: [
                    "Lagarta",
                    "Falsa Tartaruga",
                    "Lebre de Março",
                    "Flores"
                ],
                respostaCorreta: 1
            },
            {
                id: 30,
                pergunta: "Qual é a profissão do autor Lewis Carroll?",
                opcoes: [
                    "Médico",
                    "Professor de matemática",
                    "Pintor",
                    "Músico"
                ],
                respostaCorreta: 1
            },
            {
                id: 31,
                pergunta: "O que o Chapeleiro pergunta constantemente à Alice?",
                opcoes: [
                    "Por que um corvo é como uma escrivaninha?",
                    "Qual é o sentido da vida?",
                    "Quem roubou as tortas?",
                    "Onde está o Coelho?"
                ],
                respostaCorreta: 0
            },
            {
                id: 32,
                pergunta: "Qual personagem julga o Valete de Copas?",
                opcoes: [
                    "Rei de Copas",
                    "Rainha de Copas",
                    "Chapeleiro Maluco",
                    "Alice"
                ],
                respostaCorreta: 0
            },
            {
                id: 33,
                pergunta: "O que acontece quando Alice entra na casa do Coelho?",
                opcoes: [
                    "Fica presa",
                    "Cresce demais",
                    "Encolhe demais",
                    "Encontra o gato"
                ],
                respostaCorreta: 1
            },
            {
                id: 34,
                pergunta: "Qual destes alimentos NÃO altera o tamanho de Alice?",
                opcoes: [
                    "Bolo",
                    "Cogumelo",
                    "Bebida do frasco",
                    "Chá"
                ],
                respostaCorreta: 3
            },
            {
                id: 35,
                pergunta: "Quem é o primeiro personagem que Alice encontra chorando?",
                opcoes: [
                    "Falsa Tartaruga",
                    "Duquesa",
                    "Lebre de Março",
                    "Ela mesma"
                ],
                respostaCorreta: 3
            },
            {
                id: 36,
                pergunta: "O que a Rainha ordena pintar de vermelho?",
                opcoes: [
                    "Rosas brancas",
                    "Portas verdes",
                    "Cogumelos azuis",
                    "Tartes amarelas"
                ],
                respostaCorreta: 0
            },
            {
                id: 37,
                pergunta: "Qual personagem tem um bebê que se transforma em porco?",
                opcoes: [
                    "Rainha de Copas",
                    "Duquesa",
                    "Irmã de Alice",
                    "Lebre de Março"
                ],
                respostaCorreta: 1
            },
            {
                id: 38,
                pergunta: "Como Alice sai do País das Maravilhas?",
                opcoes: [
                    "Através do espelho",
                    "Seguindo o Gato",
                    "Acordando do sonho",
                    "Comendo cogumelo"
                ],
                respostaCorreta: 2
            },
            {
                id: 39,
                pergunta: "Qual é o título original do livro?",
                opcoes: [
                    "Alice's Wonderland",
                    "Alice in Curious Land",
                    "Alice's Adventures in Wonderland",
                    "Through the Looking-Glass"
                ],
                respostaCorreta: 2
            },
            {
                id: 40,
                pergunta: "Qual destes é um tema central do livro?",
                opcoes: [
                    "A lógica da loucura",
                    "O perigo da magia",
                    "A importância da educação",
                    "O valor da riqueza"
                ],
                respostaCorreta: 0
            }
        ]
    }
};
