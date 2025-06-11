// Dados dos questionários
const quizzes = {
    peter_pan_quiz: {
        livroId: 2,
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
        livroId: 2,
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
    },
    menino_entregava_leite_quiz: {
        livroId: 3,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual é o nome do protagonista do livro?",
                opcoes: [
                    "Miguel",
                    "Pedro",
                    "Davi",
                    "Lucas"
                ],
                respostaCorreta: 2
            },
            {
                id: 2,
                pergunta: "Por que Davi precisa entregar leite?",
                opcoes: [
                    "Para comprar um presente",
                    "Para ajudar a família financeiramente",
                    "Como castigo escolar",
                    "Para treinar para uma maratona"
                ],
                respostaCorreta: 1
            },
            {
                id: 3,
                pergunta: "Qual é o principal meio de transporte que Davi usa nas entregas?",
                opcoes: [
                    "Bicicleta",
                    "Carrinho de mão",
                    "Caminhão",
                    "Cavalo"
                ],
                respostaCorreta: 0
            },
            {
                id: 4,
                pergunta: "Quem é a pessoa mais idosa que recebe as entregas de leite?",
                opcoes: [
                    "Dona Matilde",
                    "Seu Joaquim",
                    "Vó Carmem",
                    "Tio Chico"
                ],
                respostaCorreta: 0
            },
            {
                id: 5,
                pergunta: "Qual evento climático dificulta as entregas no capítulo 4?",
                opcoes: [
                    "Nevasca",
                    "Tempestade de areia",
                    "Chuva torrencial",
                    "Onda de calor"
                ],
                respostaCorreta: 2
            },
            {
                id: 6,
                pergunta: "O que Davi encontra misteriosamente em uma das garrafas de leite?",
                opcoes: [
                    "Um mapa antigo",
                    "Uma mensagem em código",
                    "Um anel de prata",
                    "Uma moeda rara"
                ],
                respostaCorreta: 1
            },
            {
                id: 7,
                pergunta: "Qual é o nome do cachorro que acompanha Davi em parte das entregas?",
                opcoes: [
                    "Bolinha",
                    "Trovão",
                    "Nero",
                    "Sombra"
                ],
                respostaCorreta: 3
            },
            {
                id: 8,
                pergunta: "Qual personagem se torna um mentor para Davi?",
                opcoes: [
                    "O padeiro",
                    "A professora",
                    "O farmacêutico",
                    "O carteiro"
                ],
                respostaCorreta: 2
            },
            {
                id: 9,
                pergunta: "O que acontece com o leite quando Davi se distrai conversando?",
                opcoes: [
                    "Azeda",
                    "Congela",
                    "Derrama",
                    "É roubado"
                ],
                respostaCorreta: 0
            },
            {
                id: 10,
                pergunta: "Qual é o maior sonho de Davi?",
                opcoes: [
                    "Ser veterinário",
                    "Comprar uma bicicleta nova",
                    "Viajar para o litoral",
                    "Estudar astronomia"
                ],
                respostaCorreta: 3
            },
            {
                id: 11,
                pergunta: "Como Davi ajuda Dona Matilde além de entregar leite?",
                opcoes: [
                    "Conserta seu telhado",
                    "Lê cartas para ela",
                    "Cuida de seu jardim",
                    "Ensina-a a costurar"
                ],
                respostaCorreta: 1
            },
            {
                id: 12,
                pergunta: "Qual lição principal Davi aprende com seu trabalho?",
                opcoes: [
                    "O valor da honestidade",
                    "A importância da perseverança",
                    "O poder da amizade",
                    "A necessidade de estudar"
                ],
                respostaCorreta: 1
            },
            {
                id: 13,
                pergunta: "O que o farmacêutico oferece a Davi como recompensa por sua ajuda?",
                opcoes: [
                    "Um livro de astronomia",
                    "Uma bicicleta nova",
                    "Dinheiro extra",
                    "Telescópio emprestado"
                ],
                respostaCorreta: 0
            },
            {
                id: 14,
                pergunta: "Qual desafio Davi enfrenta no capítulo 10?",
                opcoes: [
                    "Seu cachorro desaparece",
                    "Sua bicicleta quebra",
                    "Um cliente o acusa de roubo",
                    "Fica doente antes das entregas"
                ],
                respostaCorreta: 1
            },
            {
                id: 15,
                pergunta: "Como a comunidade reage quando Davi precisa de ajuda?",
                opcoes: [
                    "Ficam indiferentes",
                    "O criticam por falhas anteriores",
                    "Se unem para apoiá-lo",
                    "Contratam outro entregador"
                ],
                respostaCorreta: 2
            },
            {
                id: 16,
                pergunta: "Qual presente Davi recebe no final do livro?",
                opcoes: [
                    "Telescópio usado",
                    "Coleira nova para seu cachorro",
                    "Livro de astronomia autografado",
                    "Uniforme escolar"
                ],
                respostaCorreta: 0
            },
            {
                id: 17,
                pergunta: "Qual personagem representa a conexão de Davi com os estudos?",
                opcoes: [
                    "Dona Matilde",
                    "O farmacêutico",
                    "Professora Sofia",
                    "Seu Joaquim"
                ],
                respostaCorreta: 2
            },
            {
                id: 18,
                pergunta: "O que Davi observa todas as noites antes de dormir?",
                opcoes: [
                    "Trens passando",
                    "Estrelas e constelações",
                    "Lampiões da cidade",
                    "Gatos no telhado"
                ],
                respostaCorreta: 1
            },
            {
                id: 19,
                pergunta: "Como Davi descreve o cheiro da madrugada?",
                opcoes: [
                    "Café fresco e pão quente",
                    "Orvalho e terra molhada",
                    "Leite fresco e mato cortado",
                    "Flores silvestres e carvão"
                ],
                respostaCorreta: 2
            },
            {
                id: 20,
                pergunta: "Qual evento astronômico importante acontece no clímax da história?",
                opcoes: [
                    "Eclipse lunar",
                    "Chuva de meteoros",
                    "Alinhamento planetário",
                    "Superlua"
                ],
                respostaCorreta: 1
            },
            {
                id: 21,
                pergunta: "O que o pai de Davi faz profissionalmente?",
                opcoes: [
                    "Fazendeiro",
                    "Ferroviário",
                    "Mecânico",
                    "Padeiro"
                ],
                respostaCorreta: 0
            },
            {
                id: 22,
                pergunta: "Qual é o segredo que Dona Matilde compartilha com Davi?",
                opcoes: [
                    "Histórias da guerra",
                    "Mapa de tesouro familiar",
                    "Segredos das estrelas",
                    "Receita de queijo especial"
                ],
                respostaCorreta: 2
            },
            {
                id: 23,
                pergunta: "Como Davi supera seu medo do escuro?",
                opcoes: [
                    "Usando uma lanterna",
                    "Cantando durante o caminho",
                    "Conhecendo as constelações",
                    "Levando seu cachorro"
                ],
                respostaCorreta: 2
            },
            {
                id: 24,
                pergunta: "Qual destes NÃO é um cliente de Davi?",
                opcoes: [
                    "Padaria do Sr. Alfredo",
                    "Pensão da Sra. Beatriz",
                    "Escola Municipal",
                    "Hotel Central"
                ],
                respostaCorreta: 2
            },
            {
                id: 25,
                pergunta: "Qual lição final o livro transmite?",
                opcoes: [
                    "Sonhos exigem trabalho e persistência",
                    "Dinheiro traz felicidade",
                    "Estudar é inútil para trabalhadores",
                    "Grandes cidades oferecem melhores oportunidades"
                ],
                respostaCorreta: 0
            },
            {
                id: 26,
                pergunta: "O que simboliza a bicicleta de Davi?",
                opcoes: [
                    "Liberdade e responsabilidade",
                    "Pobreza e limitações",
                    "Tecnologia moderna",
                    "Infância perdida"
                ],
                respostaCorreta: 0
            }
        ]
    },
    laranja_colorida_quiz: {
        livroId: 4,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual é o nome da protagonista do livro?",
                opcoes: [
                    "Clara",
                    "Lara",
                    "Ana",
                    "Bia"
                ],
                respostaCorreta: 1
            },
            {
                id: 2,
                pergunta: "O que torna a laranja especial?",
                opcoes: [
                    "Tem gosto de chocolate",
                    "Muda de cor com o humor",
                    "Brilha no escuro",
                    "Nunca apodrece"
                ],
                respostaCorreta: 1
            },
            {
                id: 3,
                pergunta: "Onde Lara encontra a laranja colorida?",
                opcoes: [
                    "No sótão da avó",
                    "Em um pomar abandonado",
                    "Em uma feira misteriosa",
                    "Debaixo de sua cama"
                ],
                respostaCorreta: 2
            },
            {
                id: 4,
                pergunta: "Qual é o primeiro poder que Lara descobre na laranja?",
                opcoes: [
                    "Fazer objetos flutuarem",
                    "Ler pensamentos",
                    "Ver memórias passadas",
                    "Entender animais"
                ],
                respostaCorreta: 2
            },
            {
                id: 5,
                pergunta: "Quem é o antagonista principal?",
                opcoes: [
                    "Sr. Valente - o colecionador",
                    "Dona Margarida - a professora",
                    "Tio Heitor - o cientista",
                    "Vó Carmem - a avó"
                ],
                respostaCorreta: 0
            },
            {
                id: 6,
                pergunta: "Qual lição a laranja ensina quando fica azul?",
                opcoes: [
                    "Paciência",
                    "Coragem",
                    "Honestidade",
                    "Empatia"
                ],
                respostaCorreta: 3
            },
            {
                id: 7,
                pergunta: "Como Lara esconde a laranja na escola?",
                opcoes: [
                    "Dentro da mochila térmica",
                    "Em uma caixa de lápis",
                    "No bolso do casaco",
                    "Com seu amigo Tomás"
                ],
                respostaCorreta: 0
            },
            {
                id: 8,
                pergunta: "Qual animal ajuda Lara a proteger a laranja?",
                opcoes: [
                    "Um corvo falante",
                    "Um gato siamês",
                    "Um cachorro vira-lata",
                    "Um esquilo vermelho"
                ],
                respostaCorreta: 3
            },
            {
                id: 9,
                pergunta: "O que acontece quando a laranja fica roxa?",
                opcoes: [
                    "Cura doenças",
                    "Previne acidentes",
                    "Revela verdades",
                    "Concede desejos"
                ],
                respostaCorreta: 2
            },
            {
                id: 10,
                pergunta: "Qual é o segredo da vó de Lara sobre a laranja?",
                opcoes: [
                    "Ela plantou a semente",
                    "Já teve uma igual na juventude",
                    "Conhece o criador",
                    "É feita de magia ancestral"
                ],
                respostaCorreta: 1
            },
            {
                id: 11,
                pergunta: "Como a laranja ajuda a resolver o conflito na escola?",
                opcoes: [
                    "Expondo um mentiroso",
                    "Curando uma doença",
                    "Encontrando objetos perdidos",
                    "Unindo amigos rivais"
                ],
                respostaCorreta: 0
            },
            {
                id: 12,
                pergunta: "Qual é a fraqueza da laranja mágica?",
                opcoes: [
                    "Água salgada",
                    "Luz solar direta",
                    "Sentimentos negativos",
                    "Metal frio"
                ],
                respostaCorreta: 2
            },
            {
                id: 13,
                pergunta: "O que Lara precisa fazer para recarregar os poderes da laranja?",
                opcoes: [
                    "Cantar para ela",
                    "Deixá-la ao luar",
                    "Compartilhar histórias felizes",
                    "Regá-la com lágrimas"
                ],
                respostaCorreta: 2
            },
            {
                id: 14,
                pergunta: "Qual personagem trai a confiança de Lara?",
                opcoes: [
                    "Seu melhor amigo",
                    "Sua irmã mais velha",
                    "A diretora da escola",
                    "A vizinha curiosa"
                ],
                respostaCorreta: 0
            },
            {
                id: 15,
                pergunta: "Onde fica o pomar secreto das laranjas mágicas?",
                opcoes: [
                    "No quintal abandonado",
                    "Em uma dimensão paralela",
                    "No topo da montanha",
                    "No coração da floresta"
                ],
                respostaCorreta: 3
            },
            {
                id: 16,
                pergunta: "Qual é a cor mais rara que a laranja mostra?",
                opcoes: [
                    "Dourado",
                    "Prata",
                    "Arco-íris",
                    "Branco brilhante"
                ],
                respostaCorreta: 0
            },
            {
                id: 17,
                pergunta: "Como Lara derrota o Sr. Valente?",
                opcoes: [
                    "Usando o poder dourado",
                    "Com ajuda da comunidade",
                    "Revelando seu segredo",
                    "Destruindo a laranja"
                ],
                respostaCorreta: 1
            },
            {
                id: 18,
                pergunta: "O que a laranja se torna no final?",
                opcoes: [
                    "Uma árvore frondosa",
                    "Sementes para compartilhar",
                    "Um amuleto permanente",
                    "Uma lenda urbana"
                ],
                respostaCorreta: 0
            },
            {
                id: 19,
                pergunta: "Qual profissão Lara deseja seguir por influência da laranja?",
                opcoes: [
                    "Bióloga",
                    "Psicóloga",
                    "Artista",
                    "Professora"
                ],
                respostaCorreta: 2
            },
            {
                id: 20,
                pergunta: "Qual música está associada à laranja na história?",
                opcoes: [
                    "Canção de ninar antiga",
                    "Sinfonia das cores",
                    "Rap da fruta mágica",
                    "Hino da natureza"
                ],
                respostaCorreta: 0
            },
            {
                id: 21,
                pergunta: "Qual ensinamento final a laranja deixa para Lara?",
                opcoes: [
                    "A magia está nas pessoas",
                    "Objetos mágicos são perigosos",
                    "Segredos devem ser guardados",
                    "Crianças não devem ter poderes"
                ],
                respostaCorreta: 0
            },
            {
                id: 22,
                pergunta: "Quantas mudanças de cor a laranja faz no livro?",
                opcoes: [
                    "5 cores diferentes",
                    "7 cores diferentes",
                    "9 cores diferentes",
                    "12 cores diferentes"
                ],
                respostaCorreta: 1
            },
            {
                id: 23,
                pergunta: "Qual elemento NÃO afeta a laranja mágica?",
                opcoes: [
                    "Lua cheia",
                    "Tempestades emocionais",
                    "Mentiras intencionais",
                    "Tecnologia eletrônica"
                ],
                respostaCorreta: 3
            }
        ]
    },
    dormir_fora_casa_quiz: {
        livroId: 5,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual é o nome do protagonista do livro?",
                opcoes: [
                    "Daniel",
                    "Miguel",
                    "Rafael",
                    "Gustavo"
                ],
                respostaCorreta: 1
            },
            {
                id: 2,
                pergunta: "Pela primeira vez, Miguel vai dormir na casa de:",
                opcoes: [
                    "Seu avô",
                    "Seu primo",
                    "Seu melhor amigo",
                    "Sua tia"
                ],
                respostaCorreta: 2
            },
            {
                id: 3,
                pergunta: "Qual item Miguel leva para ajudar com a saudade de casa?",
                opcoes: [
                    "Seu travesseiro favorito",
                    "Fotos da família",
                    "Bicho de pelúcia",
                    "Cobertor especial"
                ],
                respostaCorreta: 2
            },
            {
                id: 4,
                pergunta: "O que os meninos planejam fazer durante a noite?",
                opcoes: [
                    "Acampamento no quintal",
                    "Maratona de videogame",
                    "Noite de filmes de terror",
                    "Caça ao tesouro noturna"
                ],
                respostaCorreta: 0
            },
            {
                id: 5,
                pergunta: "Qual é o maior medo de Miguel durante a noite?",
                opcoes: [
                    "Barulhos estranhos na casa",
                    "Pesadelos",
                    "Saudade dos pais",
                    "Escuridão do quarto"
                ],
                respostaCorreta: 0
            },
            {
                id: 6,
                pergunta: "Quem ajuda Miguel quando ele sente saudades?",
                opcoes: [
                    "A mãe do amigo",
                    "Seu cachorro de estimação",
                    "O pai do amigo",
                    "O irmão mais novo do amigo"
                ],
                respostaCorreta: 0
            },
            {
                id: 7,
                pergunta: "O que os meninos comem como lanche da noite?",
                opcoes: [
                    "Pipoca com chocolate",
                    "Sanduíches gigantes",
                    "Sorvete de massa",
                    "Pizza fria"
                ],
                respostaCorreta: 0
            },
            {
                id: 8,
                pergunta: "Qual jogo eles jogam dentro da barraca?",
                opcoes: [
                    "Jogo de adivinhação",
                    "Batalha de travesseiros",
                    "Cartas com lanterna",
                    "Histórias de assombração"
                ],
                respostaCorreta: 2
            },
            {
                id: 9,
                pergunta: "Como Miguel supera seu medo noturno?",
                opcoes: [
                    "Ligando para os pais",
                    "Descobrindo a fonte dos barulhos",
                    "Tomando um chá calmante",
                    "Indo dormir dentro de casa"
                ],
                respostaCorreta: 1
            },
            {
                id: 10,
                pergunta: "Qual animal faz barulho durante a noite?",
                opcoes: [
                    "Coruja",
                    "Sapo",
                    "Gato",
                    "Gambá"
                ],
                respostaCorreta: 3
            },
            {
                id: 11,
                pergunta: "O que Miguel esquece de trazer?",
                opcoes: [
                    "Pijama",
                    "Escova de dentes",
                    "Carregador de celular",
                    "Medicamento para alergia"
                ],
                respostaCorreta: 1
            },
            {
                id: 12,
                pergunta: "Como a mãe do amigo ajuda Miguel?",
                opcoes: [
                    "Contando uma história",
                    "Fazendo chocolate quente",
                    "Ligando para sua mãe",
                    "Cantando uma canção de ninar"
                ],
                respostaCorreta: 1
            },
            {
                id: 13,
                pergunta: "Qual lição Miguel aprende com a experiência?",
                opcoes: [
                    "Casas diferentes têm regras diferentes",
                    "Amigos verdadeiros apoiam nos medos",
                    "Saudade de casa é natural",
                    "Todas as anteriores"
                ],
                respostaCorreta: 3
            },
            {
                id: 14,
                pergunta: "O que acontece com a barraca durante a noite?",
                opcoes: [
                    "Cai um vento forte",
                    "Entra água da chuva",
                    "Um animal rasga o tecido",
                    "Desmonta parcialmente"
                ],
                respostaCorreta: 0
            },
            {
                id: 15,
                pergunta: "Como Miguel se sente no final da experiência?",
                opcoes: [
                    "Aliviado por ir para casa",
                    "Orgulhoso de si mesmo",
                    "Arrependido por ter ido",
                    "Cansado mas feliz"
                ],
                respostaCorreta: 1
            },
            {
                id: 16,
                pergunta: "Qual tradição familiar do amigo Miguel descobre?",
                opcoes: [
                    "Café da manhã especial aos sábados",
                    "Histórias antes de dormir",
                    "Músicas típicas da família",
                    "Oração noturna coletiva"
                ],
                respostaCorreta: 0
            },
            {
                id: 17,
                pergunta: "O que os meninos observam antes de dormir?",
                opcoes: [
                    "Estrelas cadentes",
                    "Vaga-lumes no jardim",
                    "Aviões passando",
                    "Lua cheia"
                ],
                respostaCorreta: 1
            },
            {
                id: 18,
                pergunta: "Qual personagem tem medo de insetos?",
                opcoes: [
                    "Miguel",
                    "Pedro (o amigo)",
                    "O irmão de Pedro",
                    "A mãe de Pedro"
                ],
                respostaCorreta: 1
            },
            {
                id: 19,
                pergunta: "O que Miguel promete fazer quando voltar para casa?",
                opcoes: [
                    "Convidar Pedro para dormir lá",
                    "Escrever um diário da aventura",
                    "Plantar uma árvore de lembrança",
                    "Aprender a montar barracas"
                ],
                respostaCorreta: 0
            },
            {
                id: 20,
                pergunta: "Qual objeto simboliza a conquista de Miguel?",
                opcoes: [
                    "Um adesivo de \ncorajoso\n",
                    "A lanterna usada na noite",
                    "Uma pedra do jardim",
                    "O fecho da barraca"
                ],
                respostaCorreta: 2
            },
            {
                id: 21,
                pergunta: "O que os pais de Miguel fazem durante sua ausência?",
                opcoes: [
                    "Vão ao cinema",
                    "Jantam fora",
                    "Assistem seu filme favorito",
                    "Reorganizam seu quarto"
                ],
                respostaCorreta: 1
            }
        ]
    },
    cobras_lagartos_quiz: {
        livroId: 6,
        perguntas: [
            {
                id: 1,
                pergunta: "Qual é o nome do lagarto protagonista?",
                opcoes: [
                    "Lagarto",
                    "Zig",
                    "Léo",
                    "Escamoso"
                ],
                respostaCorreta: 2
            },
            {
                id: 2,
                pergunta: "Onde se passa a história principal?",
                opcoes: [
                    "Deserto do Saara",
                    "Floresta Amazônica",
                    "Jardim da casa do Sr. Oliveira",
                    "Zoológico municipal"
                ],
                respostaCorreta: 2
            },
            {
                id: 3,
                pergunta: "Qual o maior medo da cobra Coralina?",
                opcoes: [
                    "Água",
                    "Aves de rapina",
                    "Fogo",
                    "Humanos"
                ],
                respostaCorreta: 1
            },
            {
                id: 4,
                pergunta: "Como Léo e Coralina se conhecem?",
                opcoes: [
                    "Numa toca subterrânea",
                    "Durante uma tempestade",
                    "Num concurso de mudança de pele",
                    "Durante o ataque de um gato"
                ],
                respostaCorreta: 3
            },
            {
                id: 5,
                pergunta: "Qual é a habilidade especial do lagarto Léo?",
                opcoes: [
                    "Nadar rapidamente",
                    "Mudar de cor parcialmente",
                    "Envenenar presas",
                    "Voar curtas distâncias"
                ],
                respostaCorreta: 1
            },
            {
                id: 6,
                pergunta: "Por que Coralina precisa da ajuda de Léo?",
                opcoes: [
                    "Perdeu sua pele",
                    "Está perdida no jardim",
                    "Feriu-se em uma armadilha",
                    "Quer encontrar seu filhote"
                ],
                respostaCorreta: 2
            },
            {
                id: 7,
                pergunta: "O que ameaça o habitat dos personagens?",
                opcoes: [
                    "Incêndio florestal",
                    "Construção de um prédio",
                    "Invasão de formigas",
                    "Enchente"
                ],
                respostaCorreta: 1
            },
            {
                id: 8,
                pergunta: "Quem é o vilão da história?",
                opcoes: [
                    "Gato Siamese",
                    "Falcão faminto",
                    "Sr. Oliveira (dono da casa)",
                    "Sapo venenoso"
                ],
                respostaCorreta: 0
            },
            {
                id: 9,
                pergunta: "Como os amigos escapam do gato?",
                opcoes: [
                    "Distraindo-o com insetos",
                    "Usando túneis subterrâneos",
                    "Pulando no lago",
                    "Camuflagem coletiva"
                ],
                respostaCorreta: 1
            },
            {
                id: 10,
                pergunta: "Qual presente Coralina dá a Léo?",
                opcoes: [
                    "Pedaço de sua pele antiga",
                    "Presa de cobra",
                    "Fruta rara",
                    "Pena de pássaro"
                ],
                respostaCorreta: 0
            },
            {
                id: 11,
                pergunta: "O que Léo ensina para Coralina?",
                opcoes: [
                    "Caçar formigas",
                    "Subir em árvores",
                    "Técnicas de camuflagem",
                    "Nadar"
                ],
                respostaCorreta: 2
            },
            {
                id: 12,
                pergunta: "Qual personagem tem medo de água?",
                opcoes: [
                    "Léo",
                    "Coralina",
                    "Gato",
                    "Sapo"
                ],
                respostaCorreta: 0
            },
            {
                id: 13,
                pergunta: "Como salvam o jardim da construção?",
                opcoes: [
                    "Reunindo outros animais",
                    "Assustando os operários",
                    "Procurando um tesouro escondido",
                    "Encontrando plantas raras"
                ],
                respostaCorreta: 3
            },
            {
                id: 14,
                pergunta: "O que representa a amizade entre eles?",
                opcoes: [
                    "Folha seca dourada",
                    "Pedaço de casca de árvore",
                    "Presa de cobra quebrada",
                    "Pena azul"
                ],
                respostaCorreta: 3
            },
            {
                id: 15,
                pergunta: "Qual é a refeição favorita de Coralina?",
                opcoes: [
                    "Grilos",
                    "Sapos pequenos",
                    "Frutas maduras",
                    "Ovos de pássaro"
                ],
                respostaCorreta: 1
            },
            {
                id: 16,
                pergunta: "Onde fazem seu esconderijo secreto?",
                opcoes: [
                    "Toco de árvore velha",
                    "Folhas de bananeira",
                    "Caixa de ferramentas",
                    "Galpão abandonado"
                ],
                respostaCorreta: 0
            },
            {
                id: 17,
                pergunta: "Qual lição aprendem com o sapo?",
                opcoes: [
                    "Importância da paciência",
                    "Valor da adaptação",
                    "Força da união",
                    "Beleza das diferenças"
                ],
                respostaCorreta: 3
            },
            {
                id: 18,
                pergunta: "Como Coralina salva Léo do falcão?",
                opcoes: [
                    "Dando um bote falso",
                    "Fazendo um ninho falso",
                    "Imitando um guizo",
                    "Liberando odor forte"
                ],
                respostaCorreta: 2
            },
            {
                id: 19,
                pergunta: "Qual evento climático testa sua amizade?",
                opcoes: [
                    "Seca prolongada",
                    "Tempestade de granizo",
                    "Nevoeiro denso",
                    "Vendaval intenso"
                ],
                respostaCorreta: 1
            },
            {
                id: 20,
                pergunta: "O que descobrem sobre o Sr. Oliveira?",
                opcoes: [
                    "É biólogo",
                    "Quer proteger o jardim",
                    "Tem medo de cobras",
                    "Coleciona répteis"
                ],
                respostaCorreta: 1
            },
            {
                id: 21,
                pergunta: "Como o livro termina?",
                opcoes: [
                    "Com a mudança para a floresta",
                    "Com o jardim virando reserva",
                    "Com o nascimento de filhotes",
                    "Com a separação dos amigos"
                ],
                respostaCorreta: 1
            },
            {
                id: 22,
                pergunta: "Qual destes NÃO é um amigo dos protagonistas?",
                opcoes: [
                    "Tatu-bola",
                    "Libélula",
                    "Coruja",
                    "Joaninha"
                ],
                respostaCorreta: 2
            },
            {
                id: 23,
                pergunta: "O que Coralina mais admira em Léo?",
                opcoes: [
                    "Sua coragem",
                    "Sua velocidade",
                    "Seu humor",
                    "Sua lealdade"
                ],
                respostaCorreta: 0
            },
            {
                id: 24,
                pergunta: "Qual é o ponto fraco do gato vilão?",
                opcoes: [
                    "Medo de água",
                    "Alergia a flores",
                    "Preguiça diurna",
                    "Odeia barulhos altos"
                ],
                respostaCorreta: 0
            },
            {
                id: 25,
                pergunta: "O que simboliza a pena azul?",
                opcoes: [
                    "Proteção",
                    "Amizade",
                    "Coragem",
                    "Liberdade"
                ],
                respostaCorreta: 1
            },
            {
                id: 26,
                pergunta: "Qual lição final o livro ensina?",
                opcoes: [
                    "Diferenças fortalecem amizades",
                    "Natureza deve ser dominada",
                    "Répteis são perigosos",
                    "Humanos são inimigos"
                ],
                respostaCorreta: 0
            },
            {
                id: 27,
                pergunta: "O que os personagens fazem nas noites de lua cheia?",
                opcoes: [
                    "Caçam juntos",
                    "Observam as estrelas",
                    "Festejam no lago",
                    "Migram para áreas secas"
                ],
                respostaCorreta: 1
            }
        ]
    }
};