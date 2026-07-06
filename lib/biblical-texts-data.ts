/**
 * Banco de dados com textos bíblicos completos da Tradução do Novo Mundo
 * Estruturado para permitir hiperlinks nos textos bíblicos
 */

export interface BiblicalText {
  reference: string; // Ex: "Mateus 24:3, 7, 8"
  fullText: string; // Texto completo do versículo
}

export const BIBLICAL_TEXTS: Record<string, BiblicalText> = {
  // FUTURO
  'mateus-24-3-7-8': {
    reference: 'Mateus 24:3, 7, 8',
    fullText: '3 Enquanto ele estava sentado no monte das Oliveiras, os discípulos se aproximaram dele em particular e disseram: "Diga-nos: Quando acontecerão essas coisas e qual será o sinal da sua presença e do final do sistema de coisas?" 7 Porque nação se levantará contra nação e reino contra reino; haverá falta de alimentos e terremotos num lugar após outro. 8 Todas essas coisas são um começo das dores de aflição.',
  },
  'mateus-24-3-7-8-14': {
    reference: 'Mateus 24:3, 7, 8, 14',
    fullText: '3 Enquanto ele estava sentado no monte das Oliveiras, os discípulos se aproximaram dele em particular e disseram: "Diga-nos: Quando acontecerão essas coisas e qual será o sinal da sua presença e do final do sistema de coisas?" 7 Porque nação se levantará contra nação e reino contra reino; haverá falta de alimentos e terremotos num lugar após outro. 8 Todas essas coisas são um começo das dores de aflição. 14 "E estas boas novas do Reino serão pregadas em toda a terra habitada, em testemunho a todas as nações, e então virá o fim."',
  },
  'lucas-21-10-11': {
    reference: 'Lucas 21:10, 11',
    fullText: '10 Então lhes disse: "Nação se levantará contra nação e reino contra reino. 11 Haverá grandes terremotos e, num lugar após outro, falta de alimentos e pestilências; e as pessoas verão coisas atemorizantes e grandes sinais do céu."',
  },
  '2-timoteo-3-1-5': {
    reference: '2 Timóteo 3:1-5',
    fullText: '1 Mas saiba o seguinte: nos últimos dias haverá tempos críticos, difíceis de suportar. 2 Pois os homens só amarão a si mesmos, amarão o dinheiro, serão presunçosos, arrogantes, blasfemadores, desobedientes aos pais, ingratos, desleais, 3 desnaturados, não estarão dispostos a acordos, serão caluniadores, sem autodomínio, ferozes, sem amor ao que é bom, 4 traidores, teimosos, cheios de orgulho, amarão os prazeres em vez de a Deus 5 e manterão uma aparência de devoção a Deus, mas rejeitarão o poder dessa devoção; afaste-se deles.',
  },
  'salmos-104-5': {
    reference: 'Salmos 104:5',
    fullText: '5 Tu estabeleceste a terra sobre os seus alicerces; ela nunca, jamais, será tirada do seu lugar.',
  },
  'eclesiastes-1-4': {
    reference: 'Eclesiastes 1:4',
    fullText: '4 Uma geração vai e uma geração vem, mas a terra permanece para sempre.',
  },
  'isaias-35-1-2': {
    reference: 'Isaías 35:1, 2',
    fullText: '1 O deserto e a região árida exultarão; a planície desértica ficará alegre e florescerá como o açafrão. 2 Sem falta ela florescerá; ela exultará e gritará de alegria.',
  },
  'apocalipse-11-18': {
    reference: 'Apocalipse 11:18',
    fullText: '18 Mas as nações ficaram iradas, e veio a tua própria ira, e o tempo determinado para que os mortos sejam julgados, e para dar a recompensa aos teus escravos, os profetas, e aos santos e aos que temem o teu nome, tanto os pequenos como os grandes, e para arruinar os que estão arruinando a terra.',
  },
  'isaias-33-24': {
    reference: 'Isaías 33:24',
    fullText: '24 E nenhum habitante dirá: "Estou doente." O povo que mora na terra será perdoado do seu erro.',
  },
  'isaias-35-5-6': {
    reference: 'Isaías 35:5, 6',
    fullText: '5 Naquela época os olhos dos cegos serão abertos, e os ouvidos dos surdos serão destapados. 6 Naquela época o coxo saltará como um cervo, e a língua do mudo gritará de alegria.',
  },
  'mateus-24-14': {
    reference: 'Mateus 24:14',
    fullText: '14 "E estas boas novas do Reino serão pregadas em toda a terra habitada, em testemunho a todas as nações, e então virá o fim."',
  },

  // JESUS
  'mateus-7-12': {
    reference: 'Mateus 7:12',
    fullText: '12 "Portanto, tudo o que vocês desejam que os outros façam a vocês, façam também a eles, pois esta é a Lei e os Profetas."',
  },
  'lucas-6-31': {
    reference: 'Lucas 6:31',
    fullText: '31 "Assim como vocês desejam que os outros façam a vocês, façam também a eles da mesma forma."',
  },
  'joao-13-34-35': {
    reference: 'João 13:34, 35',
    fullText: '34 "Eu lhes dou um novo mandamento: que se amem uns aos outros; assim como eu amei vocês, que vocês também se amem uns aos outros. 35 Por meio disto todos saberão que vocês são meus discípulos: se tiverem amor entre si."',
  },

  // E SE ALGUÉM ME PERGUNTAR - Sábado
  'romanos-7-6': {
    reference: 'Romanos 7:6',
    fullText: '6 Mas agora fomos libertados da Lei, pois morremos para aquilo que nos mantinha presos, de modo que podemos servir em um novo caminho, pelo espírito, e não no velho caminho, pela letra escrita.',
  },
  'romanos-10-4': {
    reference: 'Romanos 10:4',
    fullText: '4 Pois Cristo é o fim da Lei, para que todos os que exercem fé recebam justiça.',
  },
  'galatas-3-23-25': {
    reference: 'Gálatas 3:23-25',
    fullText: '23 Mas antes que a fé chegasse, estávamos sob custódia da Lei, trancados até à fé que havia de ser revelada. 24 Portanto, a Lei tornou-se nosso tutor que nos levou a Cristo, para que fôssemos declarados justos por meio da fé. 25 Mas agora que a fé chegou, não estamos mais sob um tutor.',
  },
  'efesios-2-15': {
    reference: 'Efésios 2:15',
    fullText: '15 Ele aboliu a Lei com seus mandamentos e suas ordenanças, para criar em si mesmo um novo homem, estabelecendo assim a paz.',
  },
  'romanos-13-9-10': {
    reference: 'Romanos 13:9, 10',
    fullText: '9 Pois os mandamentos: "Não cometa adultério, não mate, não roube, não cobiçe", e qualquer outro mandamento, resumem-se nesta palavra: "Ame o seu próximo como a si mesmo." 10 O amor não causa mal ao próximo. Portanto, o amor é o cumprimento da Lei.',
  },
  'hebreus-8-13': {
    reference: 'Hebreus 8:13',
    fullText: '13 Ao dizer "nova", ele tornou obsoleta a primeira. Ora, o que se torna obsoleto e envelhecido está prestes a desaparecer.',
  },

  // E SE ALGUÉM ME PERGUNTAR - Transfusão de Sangue
  'genesis-9-4': {
    reference: 'Gênesis 9:4',
    fullText: '4 Porém, a carne com sua vida, isto é, seu sangue, vocês não devem comer.',
  },
  'levitico-17-10': {
    reference: 'Levítico 17:10',
    fullText: '10 "Se alguém da casa de Israel ou um residente estrangeiro em seu meio comer qualquer sangue, eu me voltarei contra aquela pessoa que comeu o sangue e a eliminarei de seu povo.',
  },
  'levitico-17-14': {
    reference: 'Levítico 17:14',
    fullText: '14 Pois a vida de toda carne é o seu sangue. Por isso disse aos filhos de Israel: Não comam o sangue de nenhuma carne, porque a vida de toda carne é o seu sangue. Quem o comer será eliminado.',
  },
  'deuteronomio-12-23': {
    reference: 'Deuteronômio 12:23',
    fullText: '23 Apenas seja firme em não comer o sangue, pois o sangue é a vida, e você não deve comer a vida com a carne.',
  },
  'atos-15-28-29': {
    reference: 'Atos 15:28, 29',
    fullText: '28 Pois pareceu bem ao espírito santo e a nós não impor sobre vocês nenhum fardo além destas coisas necessárias: 29 que se abstenham de coisas sacrificadas a ídolos, de sangue, de coisas estranguladas e de imoralidade sexual. Se guardarem essas coisas, irão bem. Que vocês se saiam bem!',
  },

  // E SE ALGUÉM ME PERGUNTAR - Trindade
  '1-corintios-8-6': {
    reference: '1 Coríntios 8:6',
    fullText: '6 Ainda assim, para nós há um só Deus, o Pai, de quem procedem todas as coisas e para quem nós existimos, e um só Senhor, Jesus Cristo, por meio de quem todas as coisas existem e por meio de quem nós existimos.',
  },
  'lucas-22-41-44': {
    reference: 'Lucas 22:41-44',
    fullText: '41 Então se afastou deles a uma distância de cerca de um tiro de pedra, ajoelhou-se e começou a orar, 42 dizendo: "Pai, se for de tua vontade, afasta de mim este cálice. Contudo, não seja feita a minha vontade, mas a tua." 43 Então um anjo do céu lhe apareceu e o fortalecia. 44 Estando em agonia, ele orava mais intensamente; e seu suor se tornou como gotas de sangue caindo na terra.',
  },
  'mateus-28-10': {
    reference: 'Mateus 28:10',
    fullText: '10 Então Jesus lhes disse: "Não tenham medo. Vão dizer aos meus irmãos que se dirijam para a Galileia, e lá me verão."',
  },
  'joao-14-28': {
    reference: 'João 14:28',
    fullText: '28 Vocês ouviram que eu lhes disse: "Vou embora, mas voltarei para vocês." Se realmente me amassem, ficariam alegres porque estou indo para o Pai, pois o Pai é maior do que eu.',
  },
  'joao-20-17': {
    reference: 'João 20:17',
    fullText: '17 Jesus lhe disse: "Pare de me agarrar, pois ainda não subi para meu Pai. Mas vá para meus irmãos e diga-lhes: \'Estou subindo para meu Pai e vosso Pai, para meu Deus e vosso Deus.\'"',
  },
  '1-pedro-1-3': {
    reference: '1 Pedro 1:3',
    fullText: '3 Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, que, segundo sua grande misericórdia, nos gerou novamente para uma esperança viva por meio da ressurreição de Jesus Cristo dentre os mortos,',
  },
  'apocalipse-3-14': {
    reference: 'Apocalipse 3:14',
    fullText: '14 "Ao anjo da congregação em Laodiceia, escreva: Estas são as coisas que diz o Amém, a testemunha fiel e verdadeira, o princípio da criação de Deus:',
  },

  // MORTE
  'eclesiastes-9-5': {
    reference: 'Eclesiastes 9:5',
    fullText: '5 Pois os vivos sabem que morrerão, mas os mortos não sabem absolutamente nada, nem têm mais recompensa, porque toda lembrança deles foi esquecida.',
  },
  'joao-11-11-14': {
    reference: 'João 11:11-14',
    fullText: '11 Ele disse essas coisas e depois acrescentou: "Lázaro, nosso amigo, adormeceu, mas eu vou lá para acordá-lo." 12 Os discípulos lhe disseram então: "Senhor, se ele está dormindo, ele vai ficar bom." 13 Jesus, no entanto, havia falado da morte dele; mas eles imaginavam que estivesse falando do sono natural. 14 Então, Jesus lhes disse claramente: "Lázaro morreu."',
  },
  'salmos-146-4': {
    reference: 'Salmos 146:4',
    fullText: '4 Seu espírito sai, e eles voltam ao solo; nesse mesmo dia os seus pensamentos se acabam.',
  },
  'eclesiastes-9-6-10': {
    reference: 'Eclesiastes 9:6, 10',
    fullText: '6 Também seu amor, seu ódio e seu ciúme já pereceram, e eles não têm mais parte em nada do que se faz debaixo do sol. 10 Tudo o que a sua mão achar para fazer, faça-o com toda a sua força, pois não há trabalho, nem planejamento, nem conhecimento, nem sabedoria na Sepultura, o lugar para onde você vai.',
  },
  'jo-14-13-15': {
    reference: 'Jó 14:13-15',
    fullText: '13 Quem dera que me escondesses na Sepultura, que me ocultasses até que a tua ira passasse, que estabelecesses um limite de tempo para mim e te lembrasses de mim! 14 Se um homem morre, pode ele viver novamente? Esperarei todos os dias do meu serviço obrigatório, até que venha o meu livramento. 15 Tu chamarás, e eu te responderei. Terás saudades da obra das tuas mãos.',
  },
  'joao-5-28-29': {
    reference: 'João 5:28, 29',
    fullText: '28 "Não fiquem admirados com isso, pois vem a hora em que todos os que estão nos túmulos memoriais ouvirão a voz dele 29 e sairão: os que fizeram coisas boas, para uma ressurreição de vida; e os que praticaram coisas ruins, para uma ressurreição de julgamento."',
  },
  'atos-24-15': {
    reference: 'Atos 24:15',
    fullText: '15 E eu tenho esperança em Deus, esperança que esses próprios homens também alimentam, de que haverá uma ressurreição tanto de justos como de injustos.',
  },
  'isaias-25-8': {
    reference: 'Isaías 25:8',
    fullText: '8 Ele acabará com a morte para sempre, e o Soberano Senhor Jeová enxugará as lágrimas de todo rosto. Ele tirará de toda a terra a desonra de seu povo, pois o próprio Jeová falou isso.',
  },

  // RELIGIÃO
  'mateus-7-21': {
    reference: 'Mateus 7:21',
    fullText: '21 "Nem todo aquele que me diz: \'Senhor, Senhor\', entrará no Reino dos céus, mas apenas aquele que faz a vontade de meu Pai que está nos céus."',
  },
  '1-joao-4-1': {
    reference: '1 João 4:1',
    fullText: '1 Amados, não creiam em todo espírito, mas testem os espíritos para ver se procedem de Deus, porque muitos falsos profetas saíram pelo mundo.',
  },
  '2-corintios-6-14-18': {
    reference: '2 Coríntios 6:14-18',
    fullText: '14 Não se coloquem sob jugo desigual com descrentes. Pois que associação há entre justiça e iniquidade? Ou que comunhão há entre luz e escuridão? 15 Além disso, que harmonia há entre Cristo e Belial? Ou qual é a parte de um crente com um descrente? 16 E que acordo há entre o templo de Deus e ídolos? Pois nós somos templo do Deus vivo, assim como Deus disse: "Vou residir entre eles e vou andar entre eles, e vou ser o seu Deus, e eles serão meu povo." 17 "Portanto, saiam do meio deles e se separem", diz Jeová, "e parem de tocar em coisas impuras." 18 "E eu os acolherei."',
  },
  'joao-17-17': {
    reference: 'João 17:17',
    fullText: '17 Santifique-os por meio da verdade; a sua palavra é verdade.',
  },

  // ORAÇÃO
  'salmos-65-2': {
    reference: 'Salmos 65:2',
    fullText: '2 Ó Ouvidor de orações, a ti virão todos os mortais.',
  },
  'mateus-6-6': {
    reference: 'Mateus 6:6',
    fullText: '6 Mas quando você orar, entre em seu quarto, feche a porta e ore a seu Pai, que está em secreto; e seu Pai, que vê em secreto, o recompensará.',
  },
  'salmos-55-17': {
    reference: 'Salmos 55:17',
    fullText: '17 Quanto a mim, vou clamar a Deus, e Jeová me salvará.',
  },
  'filipenses-4-6-7': {
    reference: 'Filipenses 4:6, 7',
    fullText: '6 Não se preocupem com nada, mas em tudo, por meio da oração e da súplica, com ação de graças, façam seus pedidos conhecidos a Deus; 7 e a paz de Deus, que excede todo o entendimento, guardará o seu coração e a sua mente por meio de Cristo Jesus.',
  },

  // REINO DE DEUS
  'daniel-2-44': {
    reference: 'Daniel 2:44',
    fullText: '44 "Nos dias desses reis, o Deus do céu estabelecerá um reino que nunca será destruído. Este reino não será deixado para outro povo. Ele esmagará e porá fim a todos esses reinos, e ele próprio subsistirá para sempre."',
  },
  'lucas-4-43': {
    reference: 'Lucas 4:43',
    fullText: '43 Mas ele lhes disse: "Também preciso pregar as boas novas do Reino de Deus às outras cidades, pois para isso fui enviado."',
  },
  'mateus-6-9-10': {
    reference: 'Mateus 6:9, 10',
    fullText: '9 "Portanto, orem assim: \'Nosso Pai nos céus, que o teu nome seja santificado; 10 venha o teu reino; seja feita a tua vontade, como nos céus, também na terra.\'',
  },
  'salmos-145-11-13': {
    reference: 'Salmos 145:11-13',
    fullText: '11 Eles falarão da glória do teu reino e comentarão sobre o teu poder, 12 para fazer conhecer aos filhos dos homens o teu poder poderoso e a glória magnífica do teu reino. 13 Teu reino é um reino eterno, e teu domínio dura por todas as gerações.',
  },

  // SOFRIMENTO
  'joao-9-1-3': {
    reference: 'João 9:1-3',
    fullText: '1 Enquanto passava, viu um homem que era cego de nascença. 2 Seus discípulos lhe perguntaram: "Rabi, quem pecou, este homem ou seus pais, para que nascesse cego?" 3 Jesus respondeu: "Nem este homem pecou, nem seus pais; mas foi para que as obras de Deus se manifestassem nele."',
  },
  'romanos-5-3-4': {
    reference: 'Romanos 5:3, 4',
    fullText: '3 E não apenas isso, mas também nos gloriamos em nossas tribulações, porque sabemos que a tribulação produz perseverança; 4 a perseverança, por sua vez, produz aprovação; e a aprovação produz esperança.',
  },
  '1-pedro-5-10': {
    reference: '1 Pedro 5:10',
    fullText: '10 Mas depois que vocês tiverem sofrido um pouco, o Deus de toda a bondade, que os chamou para sua glória eterna por meio de Cristo, os tornará perfeitos, os firmará, os fortalecerá e os estabelecerá em bases sólidas.',
  },
  'salmos-34-17-19': {
    reference: 'Salmos 34:17-19',
    fullText: '17 Clamaram, e Jeová ouviu; ele os livrou de todas as suas aflições. 18 Jeová está perto dos que têm o coração quebrantado; ele salva os que têm o espírito esmagado. 19 Muitas são as dificuldades do justo, mas Jeová o livra de todas elas.',
  },
  'isaias-41-10-13': {
    reference: 'Isaías 41:10, 13',
    fullText: '10 Não tenha medo, pois estou com você. Não fique ansioso, pois eu sou o seu Deus. Vou fortalecê-lo, sim, vou ajudá-lo. Vou segurá-lo firmemente com a minha mão direita de justiça. 13 Pois eu, Jeová, seu Deus, seguro a sua mão direita e lhe digo: \'Não tenha medo. Eu o ajudarei.\'',
  },
  'isaias-65-17': {
    reference: 'Isaías 65:17',
    fullText: '17 "Pois vejam! Crio novos céus e uma nova terra; e as coisas anteriores não serão lembradas, nem voltarão ao coração."',
  },
  'apocalipse-21-3-4': {
    reference: 'Apocalipse 21:3, 4',
    fullText: '3 Então ouvi uma voz alta vinda do trono dizer: "Veja! A tenda de Deus está com a humanidade, e ele residirá com eles, e eles serão o seu povo. O próprio Deus estará com eles. 4 Ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem choro, nem dor. As coisas anteriores já passaram."',
  },  '1-corintios-11-3': {
    reference: '1 Coríntios 11:3',
    fullText: '3 Mas quero que vocês entendam que a cabeça de todo homem é Cristo, e a cabeça da mulher é o homem, e a cabeça de Cristo é Deus.',
  },
  '1-joao-4-15': {
    reference: '1 João 4:15',
    fullText: '15 Se alguém confessa que Jesus é o Filho de Deus, Deus permanece nele e ele em Deus.',
  },
  '1-joao-5-19': {
    reference: '1 João 5:19',
    fullText: '19 Sabemos que somos originários de Deus, mas o mundo inteiro está sob o controle do iníquo.',
  },
  '1-pedro-5-7': {
    reference: '1 Pedro 5:7',
    fullText: '7 Lancem toda a sua ansiedade sobre ele, porque ele cuida de vocês.',
  },
  '1-tessalonicenses-5-17': {
    reference: '1 Tessalonicenses 5:17',
    fullText: '17 Orem sem cessar.',
  },
  '2-pedro-1-20-21': {
    reference: '2 Pedro 1:20, 21',
    fullText: '20 Mas, antes de tudo, saibam isto: nenhuma profecia da Escritura é de interpretação pessoal, 21 pois a profecia nunca foi trazida pela vontade do homem, mas homens falaram da parte de Deus, sendo movidos pelo espírito santo.',
  },
  '2-timoteo-3-16-17': {
    reference: '2 Timóteo 3:16, 17',
    fullText: '16 Toda a Escritura é inspirada por Deus e proveitosa para ensinar, para repreender, para corrigir e para disciplinar em justiça, 17 para que o homem de Deus seja totalmente equipado e preparado para toda boa obra.',
  },
  'apocalipse-11-15': {
    reference: 'Apocalipse 11:15',
    fullText: '15 Então o sétimo anjo tocou a sua trombeta, e houve grandes vozes no céu, dizendo: O reino do mundo se tornou o reino de nosso Senhor e do seu Cristo, e ele reinará para todo o sempre.',
  },
  'atos-10-34-35': {
    reference: 'Atos 10:34, 35',
    fullText: '34 Então Pedro abriu a boca e disse: Agora compreendo verdadeiramente que Deus não faz distinção de pessoas, 35 mas em toda nação, quem o teme e pratica a justiça lhe é aceitável.',
  },
  'colossenses-3-18': {
    reference: 'Colossenses 3:18',
    fullText: '18 Esposas, estejam em sujeição aos seus maridos, como é apropriado no Senhor.',
  },
  'colossenses-3-19': {
    reference: 'Colossenses 3:19',
    fullText: '19 Maridos, continuem amando suas esposas e não se tornem amargos com elas.',
  },
  'daniel-7-13-14': {
    reference: 'Daniel 7:13, 14',
    fullText: '13 Eu continuava observando na visão da noite, e eis que vinha com as nuvens do céu alguém semelhante a um filho do homem; e ele se dirigiu ao Ancião de Dias e foi levado para perto dele. 14 E lhe foi dado domínio, honra e reino, para que todos os povos, nações e línguas o servissem. Seu domínio é um domínio eterno que não passará, e seu reino nunca será destruído.',
  },
  'deuteronomio-10-17': {
    reference: 'Deuteronômio 10:17',
    fullText: '17 Porque Jeová, vosso Deus, é o Deus dos deuses e o Senhor dos senhores, o Deus grande, poderoso e temível, que não faz distinção de pessoas nem aceita suborno.',
  },
  'deuteronomio-32-4': {
    reference: 'Deuteronômio 32:4',
    fullText: '4 A Rocha, sua obra é perfeita, pois todos os seus caminhos são justos. Um Deus fiel, sem injustiça; justo e reto é ele.',
  },
  'efesios-5-33': {
    reference: 'Efésios 5:33',
    fullText: '33 De qualquer forma, cada um de vocês também ame sua esposa como a si mesmo; e a esposa respeite seu marido.',
  },
  'efesios-6-1-3': {
    reference: 'Efésios 6:1-3',
    fullText: '1 Filhos, obedecei a vossos pais no Senhor, pois isto é justo. 2 Honra a teu pai e a tua mãe é o primeiro mandamento com uma promessa, 3 para que te vá bem e tenhas uma vida longa na terra.',
  },
  'hebreus-13-4': {
    reference: 'Hebreus 13:4',
    fullText: '4 O casamento seja honrado entre todos, e o leito conjugal não seja contaminado, pois Deus julgará os imorais e os adúlteros.',
  },
  'isaias-29-13': {
    reference: 'Isaías 29:13',
    fullText: '13 Portanto, o Senhor disse: Porque este povo se aproxima de mim com a boca e me honra com os lábios, mas o seu coração está longe de mim, e o seu temor a mim é apenas um mandamento de homens que aprenderam de cor.',
  },
  'isaias-65-21-23': {
    reference: 'Isaías 65:21-23',
    fullText: '21 Eles construirão casas e as habitarão; plantarão vinhas e comerão do seu fruto. 22 Não construirão para que outro habite, nem plantarão para que outro coma; pois os dias do meu povo serão como os dias de uma árvore, e os meus escolhidos desfrutarão plenamente da obra de suas mãos. 23 Não trabalharão em vão, nem darão à luz filhos para calamidade, pois serão a descendência dos abençoados de Jeová, e seus filhos com eles.',
  },
  'jeremias-10-10': {
    reference: 'Jeremias 10:10',
    fullText: '10 Mas Jeová é o Deus verdadeiro; ele é o Deus vivo e o Rei eterno. Quando ele se irrita, a terra treme, e as nações não conseguem suportar a sua indignação.',
  },
  'jeremias-7-11': {
    reference: 'Jeremias 7:11',
    fullText: '11 Tornou-se esta casa, sobre a qual é invocado o meu nome, um covil de salteadores aos vossos olhos? Eis que também eu o vi, diz Jeová.',
  },
  'joao-3-16': {
    reference: 'João 3:16',
    fullText: '16 Pois Deus amou o mundo de tal forma que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha vida eterna.',
  },
  'lucas-11-1-4': {
    reference: 'Lucas 11:1-4',
    fullText: '1 Enquanto Jesus estava orando num certo lugar, quando terminou, um de seus discípulos lhe disse: Senhor, ensina-nos a orar, como também João ensinou aos seus discípulos. 2 Ele lhes disse: Quando orarem, digam: Pai, que teu nome seja santificado; que venha o teu reino. 3 Dá-nos cada dia o nosso pão de cada dia. 4 E perdoa-nos os nossos pecados, pois também nós perdoamos a todo aquele que nos deve; e não nos deixes cair em tentação.',
  },
  'lucas-4-5-6': {
    reference: 'Lucas 4:5, 6',
    fullText: '5 Então o Diabo o levou a um lugar elevado e lhe mostrou num instante todos os reinos do mundo. 6 E lhe disse: Dar-te-ei todo este poder e a glória deles, pois me foi entregue, e o dou a quem quero.',
  },
  'malaquias-2-16': {
    reference: 'Malaquias 2:16',
    fullText: '16 Pois eu odeio o divórcio, diz Jeová, o Deus de Israel, e aquele que cobre sua roupa com violência, diz Jeová dos exércitos. Portanto, cuidem de seu espírito e não sejam infiéis.',
  },
  'marcos-7-6-8': {
    reference: 'Marcos 7:6-8',
    fullText: '6 Ele lhes respondeu: Bem profetizou Isaías a vosso respeito, hipócritas, como está escrito: Este povo me honra com os lábios, mas o seu coração está longe de mim. 7 Mas em vão me adoram, ensinando doutrinas que são mandamentos de homens. 8 Vocês deixaram de lado o mandamento de Deus e se apegam à tradição dos homens.',
  },
  'mateus-16-16': {
    reference: 'Mateus 16:16',
    fullText: '16 Simão Pedro respondeu: Tu és o Cristo, o Filho do Deus vivo.',
  },
  'mateus-19-4-6-9': {
    reference: 'Mateus 19:4-6, 9',
    fullText: '4 Ele respondeu: Vocês não leram que aquele que os criou desde o princípio os fez macho e fêmea 5 e disse: Por isso o homem deixará seu pai e sua mãe e se apegará à sua esposa, e os dois se tornarão uma só carne? 6 Portanto, o que Deus uniu, que nenhum homem separe. 9 Eu vos digo que qualquer um que se divorcie de sua esposa, exceto por motivo de imoralidade sexual, e se casar com outra está cometendo adultério.',
  },
  'mateus-5-5': {
    reference: 'Mateus 5:5',
    fullText: '5 Felizes os mansos, porque eles herdarão a terra.',
  },
  'mateus-6-14-15-34': {
    reference: 'Mateus 6:14, 15, 34',
    fullText: '14 Pois, se perdoarem aos homens as suas transgressões, o vosso Pai celestial também vos perdoará; 15 mas se não perdoarem aos homens as suas transgressões, tampouco o vosso Pai vos perdoará as vossas transgressões. 34 Portanto, não se preocupem com o dia de amanhã, pois o dia de amanhã se preocupará consigo mesmo. Cada dia tem o seu próprio mal.',
  },
  'mateus-6-7-13': {
    reference: 'Mateus 6:7-13',
    fullText: '7 Além disso, quando oram, não fiquem repetindo palavras sem sentido como fazem os que não conhecem a Deus, pois eles pensam que serão ouvidos por falar muito. 8 Portanto, não se tornem como eles, pois vosso Pai sabe do que vocês precisam antes mesmo de pedirem. 9 Portanto, orem desta forma: Pai nosso nos céus, que teu nome seja santificado; 10 que venha o teu reino; que se faça a tua vontade, como no céu, também na terra. 11 Dá-nos hoje o nosso pão de cada dia. 12 E perdoa-nos as nossas dívidas, como também perdoamos aos nossos devedores. 13 E não nos deixes cair em tentação, mas livra-nos do mal.',
  },
  'mateus-7-13-14-21-23': {
    reference: 'Mateus 7:13, 14, 21-23',
    fullText: '13 Entrai pela porta estreita, pois larga é a porta e espaçoso o caminho que conduz à perdição, e muitos são os que entram por ela. 14 Porque estreita é a porta e apertado o caminho que conduz à vida, e poucos são os que o encontram. 21 Nem todo aquele que me diz: Senhor, Senhor, entrará no reino dos céus, mas aquele que faz a vontade de meu Pai nos céus. 22 Muitos me dirão naquele dia: Senhor, Senhor, não profetizamos nós em teu nome? E em teu nome não expulsamos demônios? E em teu nome não fizemos muitas obras poderosas? 23 E então lhes direi claramente: Nunca vos conheci; afastai-vos de mim, vós que praticais a iniquidade.',
  },
  'mateus-7-7-8': {
    reference: 'Mateus 7:7, 8',
    fullText: '7 Continuem pedindo, e lhes será dado; continuem procurando, e encontrarão; continuem batendo, e lhes será aberto. 8 Pois todo aquele que pede recebe, e aquele que procura encontra, e àquele que bate lhe será aberto.',
  },
  'miqueias-3-11': {
    reference: 'Miqueias 3:11',
    fullText: '11 Seus chefes julgam por suborno, seus sacerdotes ensinam por salário, e seus profetas adivinham por dinheiro; todavia se apoiam em Jeová, dizendo: Não está Jeová no meio de nós? Nenhum mal virá sobre nós.',
  },
  'miqueias-4-3': {
    reference: 'Miqueias 4:3',
    fullText: '3 Ele julgará entre muitos povos e decidirá a respeito de nações poderosas e distantes. Eles transformarão suas espadas em arados e suas lanças em foices. Nação não levantará espada contra nação, nem mais aprenderão a fazer guerra.',
  },
  'proverbios-1-8-9': {
    reference: 'Provérbios 1:8, 9',
    fullText: '8 Meu filho, ouve a disciplina de teu pai, e não abandones a instrução de tua mãe, 9 pois elas serão uma coroa graciosa sobre tua cabeça e um adorno ao redor de teu pescoço.',
  },
  'romanos-7-6-7': {
    reference: 'Romanos 7:6, 7',
    fullText: '6 Mas agora fomos libertos da Lei, tendo morrido para aquilo em que estávamos retidos, para que sirvamos em novidade de espírito e não na velhice da letra. 7 O que diremos, pois? Que a Lei é pecado? De modo nenhum! Contudo, eu não teria conhecido o pecado senão pela Lei; pois não teria conhecido a concupiscência se a Lei não tivesse dito: Não cobiçarás.',
  },
  'salmos-145-18-19': {
    reference: 'Salmos 145:18, 19',
    fullText: '18 Jeová está perto de todos os que o invocam, de todos os que o invocam em verdade. 19 Ele satisfaz o desejo dos que o temem; ouve o seu clamor e os salva.',
  },
  'salmos-2-7-9': {
    reference: 'Salmos 2:7-9',
    fullText: '7 Vou proclamar o decreto de Jeová. Ele me disse: Tu és meu Filho; eu hoje te gerei. 8 Pede-me, e te darei as nações como herança, e os confins da terra como possessão. 9 Tu as quebrantarás com uma vara de ferro; tu as despedaçarás como um vaso de barro.',
  },
  'salmos-37-10-11': {
    reference: 'Salmos 37:10, 11',
    fullText: '10 Ainda um pouco, e o iníquo não existirá; procurarás o seu lugar, e não o encontrarás. 11 Mas os mansos herdarão a terra e se deleitarão na abundância de paz.',
  },
  'salmos-37-29': {
    reference: 'Salmos 37:29',
    fullText: '29 Os justos herdarão a terra e viverão nela para sempre.',
  },
  'salmos-46-1': {
    reference: 'Salmos 46:1',
    fullText: '1 Deus é nosso refúgio e força, um auxílio muito procurado em tempos de angústia.',
  },
  'salmos-46-9': {
    reference: 'Salmos 46:9',
    fullText: '9 Ele faz cessar as guerras até aos confins da terra; quebra o arco e despedaça a lança; queima os carros no fogo.',
  },
  'salmos-62-8': {
    reference: 'Salmos 62:8',
    fullText: '8 Confiem nele em todo tempo, ó povo; derramem o vosso coração diante dele. Deus é nosso refúgio.',
  },
  'salmos-83-18': {
    reference: 'Salmos 83:18',
    fullText: '18 Para que saibam que tu, cujo nome é Jeová, tu sozinho és o Altíssimo sobre toda a terra.',
  },
  'tiago-1-13': {
    reference: 'Tiago 1:13',
    fullText: '13 Ninguém, quando tentado, diga: Sou tentado por Deus; pois Deus não pode ser tentado pelo mal, nem ele mesmo tenta ninguém.',
  },

};

/**
 * Função para obter um texto bíblico pela referência
 */
export function getBiblicalText(referenceKey: string): BiblicalText | undefined {
  return BIBLICAL_TEXTS[referenceKey];
}

/**
 * Funcao para normalizar uma referencia em uma chave
 * Ex: "Mateus 24:3, 7, 8" -> "mateus-24-3-7-8"
 * Remove acentuacao para garantir compatibilidade
 */
export function normalizeReferenceKey(reference: string): string {
  // Remover acentuacao usando NFD (decomposicao)
  const normalized = reference.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return normalized
    .toLowerCase()
    .replace(/[,:]/g, '-')  // Substituir dois-pontos e virgulas por hifens
    .replace(/\s+/g, '-')   // Substituir espacos por hifens
    .replace(/--+/g, '-')   // Remover hifens consecutivos
    .replace(/^-+|-+$/g, ''); // Remover hifens no inicio e fim
}
