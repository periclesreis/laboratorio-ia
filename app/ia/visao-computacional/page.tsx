import Link from "next/link";

export default function VisaoComputacionalPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/ia" 
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium mb-4 inline-flex items-center"
            >
              ← Voltar para IA
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Visão Computacional
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore técnicas de processamento de imagens e reconhecimento visual com IA
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~18 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert max-w-none">
              {/* Introdução */}
              <h2 className="text-2xl font-bold mt-8 mb-4">Como as Máquinas Aprendem a "Ver" e Interpretar o Mundo Visual</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Imagine apontar a câmera do seu celular para uma planta e descobrir instantaneamente qual é a espécie.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Ou desbloquear seu smartphone apenas olhando para a tela.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Ou ainda um veículo identificar um pedestre e reagir em frações de segundo para evitar um acidente.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Todas essas situações têm algo em comum: elas utilizam uma tecnologia chamada <strong>visão computacional</strong>.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Desde que nascemos, usamos os olhos para reconhecer rostos, identificar objetos, ler textos e compreender o ambiente ao nosso redor. Fazemos isso de forma tão natural que raramente pensamos na complexidade envolvida nesse processo.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Agora imagine ensinar uma máquina a fazer algo semelhante.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Como um computador consegue reconhecer uma pessoa em uma fotografia? Como ele identifica objetos, lê placas de trânsito, detecta doenças em exames médicos ou entende o conteúdo de uma imagem?
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                Neste artigo, você vai descobrir como funciona a visão computacional, conhecer suas principais técnicas, explorar aplicações práticas e entender por que ela se tornou uma das áreas mais importantes da Inteligência Artificial.
              </p>

              {/* O Que é */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">O Que é Visão Computacional?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Visão computacional é um campo da Inteligência Artificial que permite que computadores interpretem e compreendam informações visuais presentes em imagens e vídeos.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O objetivo é fazer com que máquinas consigam identificar padrões, reconhecer objetos, localizar elementos específicos e tomar decisões com base no que está sendo observado.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Podemos imaginar uma câmera como os olhos de uma máquina. Mas enxergar não é suficiente.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Assim como nossos olhos enviam informações para o cérebro interpretar, uma máquina precisa de algoritmos capazes de transformar imagens em significado.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                A câmera captura a cena. A Inteligência Artificial tenta compreender o que aquela cena representa.
              </p>

              {/* Como a Máquina Vê */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Como a Máquina "Vê" uma Imagem?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Quando olhamos para uma fotografia, enxergamos pessoas, carros, árvores, animais e edifícios.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Um computador não vê nada disso inicialmente. Para ele, uma imagem é apenas uma enorme coleção de números.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Cada ponto da imagem, chamado <strong>pixel</strong>, possui valores que representam cores e intensidade luminosa. Uma fotografia simples pode conter milhões desses pixels.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O grande desafio da visão computacional é transformar milhões de números em algo compreensível.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Em outras palavras: A máquina precisa aprender que determinados padrões de pixels podem representar um rosto, um carro, uma árvore ou qualquer outro objeto.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                É justamente aí que entram os algoritmos e modelos de Inteligência Artificial.
              </p>

              {/* Como Funciona */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Como a Visão Computacional Funciona?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Embora existam diversas técnicas diferentes, a maioria dos sistemas segue algumas etapas fundamentais.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">1️⃣ Captura da Imagem</h4>
                  <p className="text-slate-300 text-sm">Tudo começa com uma câmera, smartphone, drone, sensor ou outro dispositivo capaz de registrar imagens ou vídeos. Essas imagens são convertidas em dados digitais que podem ser processados pelo computador.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">2️⃣ Pré-processamento</h4>
                  <p className="text-slate-300 text-sm mb-2">Antes da análise, a imagem pode precisar de ajustes. Técnicas incluem: ajuste de brilho e contraste, remoção de ruídos, redimensionamento e normalização de cores.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">3️⃣ Extração de Características</h4>
                  <p className="text-slate-300 text-sm">O sistema procura informações relevantes: bordas, contornos, texturas, formatos, cores e padrões repetitivos. Essas características funcionam como pistas que ajudam a máquina a entender o conteúdo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">4️⃣ Classificação ou Detecção</h4>
                  <p className="text-slate-300 text-sm">Com base nas informações encontradas, o sistema toma decisões. Ele pode classificar uma imagem, detectar objetos, reconhecer pessoas, identificar anomalias ou ler textos.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">5️⃣ Resultado ou Ação</h4>
                  <p className="text-slate-300 text-sm">O sistema apresenta uma resposta ou executa uma ação. Por exemplo: "Há um cachorro nesta imagem" ou "Rosto reconhecido."</p>
                </div>
              </div>

              {/* Principais Técnicas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Principais Técnicas de Visão Computacional</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🎯 Detecção de Objetos</h4>
                  <p className="text-slate-300 text-sm mb-2">A máquina identifica e localiza objetos específicos dentro de uma imagem.</p>
                  <p className="text-slate-400 text-xs">Câmeras de segurança • Contagem de veículos • Robôs industriais • Identificação de plantas</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">👤 Reconhecimento Facial</h4>
                  <p className="text-slate-300 text-sm mb-2">Identifica ou verifica a identidade de uma pessoa com base em características do rosto.</p>
                  <p className="text-slate-400 text-xs">Desbloqueio de smartphones • Controle de acesso • Segurança em aeroportos • Organização de fotos</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🔀 Segmentação de Imagens</h4>
                  <p className="text-slate-300 text-sm mb-2">Divide uma imagem em regiões significativas. A máquina entende exatamente quais pixels pertencem a cada elemento.</p>
                  <p className="text-slate-400 text-xs">Remoção de fundo • Diagnóstico médico • Imagens de satélite • Edição de fotos</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📄 Reconhecimento de Texto (OCR)</h4>
                  <p className="text-slate-300 text-sm mb-2">Extrai textos presentes em imagens. Hoje, muitos sistemas conseguem ler documentos em diferentes ângulos e condições.</p>
                  <p className="text-slate-400 text-xs">Digitalização de documentos • Leitura de placas • Extração de dados • Tradução automática</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🎬 Rastreamento de Objetos</h4>
                  <p className="text-slate-300 text-sm mb-2">Acompanha elementos em movimento dentro de vídeos.</p>
                  <p className="text-slate-400 text-xs">Monitoramento por câmeras • Análise esportiva • Controle de tráfego • Comportamento animal</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🎮 Reconstrução 3D e Percepção de Profundidade</h4>
                  <p className="text-slate-300 text-sm mb-2">Ajuda máquinas a compreender distância, volume e profundidade.</p>
                  <p className="text-slate-400 text-xs">Realidade aumentada • Robótica • Veículos autônomos • Cirurgias assistidas</p>
                </div>
              </div>

              {/* Aplicações Práticas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Aplicações Práticas da Visão Computacional</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🏥 Saúde e Medicina</h4>
                  <p className="text-slate-300 text-sm mb-2">Ajudando profissionais a analisar imagens médicas com maior rapidez e precisão.</p>
                  <p className="text-slate-400 text-xs">Detecção de câncer • Identificação de fraturas • Análise de retinas • Monitoramento de pacientes</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🔒 Segurança e Vigilância</h4>
                  <p className="text-slate-300 text-sm mb-2">Sistemas de segurança cada vez mais inteligentes.</p>
                  <p className="text-slate-400 text-xs">Reconhecimento facial • Controle de acesso • Detecção de comportamentos suspeitos • Alertas automáticos</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📱 Smartphones e Aplicativos</h4>
                  <p className="text-slate-300 text-sm mb-2">Muitas pessoas utilizam visão computacional diariamente sem perceber.</p>
                  <p className="text-slate-400 text-xs">Desbloqueio facial • Organização de fotos • Modo retrato • Filtros inteligentes • Identificação de objetos</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🤖 Inteligência Artificial Generativa</h4>
                  <p className="text-slate-300 text-sm mb-2">Ferramentas como ChatGPT, Gemini e Claude já utilizam recursos multimodais que combinam visão e linguagem natural.</p>
                  <p className="text-slate-400 text-xs">Análise de imagens • Perguntas sobre fotos • Descrições automáticas • Extração de informações</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🛍️ Varejo e Comércio</h4>
                  <p className="text-slate-300 text-sm">Lojas automatizadas • Controle de estoque • Análise de comportamento • Recomendações por imagem</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🏭 Indústria e Manufatura</h4>
                  <p className="text-slate-300 text-sm">Inspeção automática • Detecção de defeitos • Controle de qualidade • Automação industrial</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🌾 Agricultura</h4>
                  <p className="text-slate-300 text-sm">Detecção de doenças • Identificação de pragas • Monitoramento por drones • Previsão de colheitas</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🚗 Transporte e Veículos Autônomos</h4>
                  <p className="text-slate-300 text-sm mb-2">Funcionam como os "olhos digitais" dos veículos modernos.</p>
                  <p className="text-slate-400 text-xs">Identificação de pedestres • Reconhecimento de sinais • Leitura de placas • Navegação assistida</p>
                </div>
              </div>

              {/* Desafios */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Desafios da Visão Computacional</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Apesar dos avanços impressionantes, ainda existem desafios importantes.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Variabilidade Visual</h4>
                  <p className="text-slate-300 text-sm">O mesmo objeto pode parecer completamente diferente dependendo da iluminação, distância ou ângulo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Qualidade dos Dados</h4>
                  <p className="text-slate-300 text-sm">Modelos dependem de grandes quantidades de imagens de qualidade para aprender corretamente.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Interpretabilidade</h4>
                  <p className="text-slate-300 text-sm">Nem sempre é fácil entender por que um sistema tomou determinada decisão. Isso é especialmente importante em áreas como medicina e segurança.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Privacidade e Ética</h4>
                  <p className="text-slate-300 text-sm">O uso de reconhecimento facial levanta questões sobre privacidade, consentimento, segurança dos dados e uso responsável da tecnologia.</p>
                </div>
              </div>

              {/* Ferramentas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Ferramentas Utilizadas em Visão Computacional</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Diversas plataformas ajudam pesquisadores e empresas a desenvolver soluções nessa área.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8">
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong>OpenCV</strong> - Biblioteca clássica para processamento de imagens</li>
                  <li><strong>TensorFlow</strong> - Framework open-source para ML</li>
                  <li><strong>PyTorch</strong> - Framework popular para deep learning</li>
                  <li><strong>Roboflow</strong> - Plataforma sem código para detecção de objetos</li>
                  <li><strong>Google Cloud Vision</strong> - Serviço em nuvem do Google</li>
                  <li><strong>AWS Rekognition</strong> - Serviço da Amazon para análise de imagens</li>
                  <li><strong>Microsoft Azure Computer Vision</strong> - Plataforma da Microsoft</li>
                </ul>
              </div>

              {/* Futuro */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">O Futuro da Visão Computacional</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                A tendência é que os sistemas se tornem cada vez mais inteligentes e capazes de compreender o mundo visual de forma mais próxima da percepção humana.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🔄 IA Multimodal</h4>
                  <p className="text-slate-300 text-sm">Combinação de imagens, vídeo, áudio e linguagem natural.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🎮 Visão 3D Avançada</h4>
                  <p className="text-slate-300 text-sm">Compreensão mais precisa de profundidade e ambientes tridimensionais.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">📱 Dispositivos Inteligentes</h4>
                  <p className="text-slate-300 text-sm">Modelos mais leves funcionando diretamente em celulares, câmeras e dispositivos conectados.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🔍 IA Mais Transparente</h4>
                  <p className="text-slate-300 text-sm">Sistemas mais explicáveis, confiáveis e responsáveis.</p>
                </div>
              </div>

              {/* Conclusão */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Conclusão</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Sempre que seu celular reconhece um rosto, um aplicativo identifica uma planta ou um sistema médico analisa uma radiografia, a visão computacional está trabalhando nos bastidores.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O objetivo dessa tecnologia não é apenas permitir que máquinas enxerguem. É ajudá-las a compreender o mundo visual de uma forma que gere valor para as pessoas.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Hoje ela já está presente na saúde, na indústria, na agricultura, na segurança, nos transportes e em inúmeros aplicativos que usamos diariamente.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                E isso é apenas o começo. À medida que a Inteligência Artificial continua avançando, a capacidade das máquinas de interpretar imagens e vídeos tende a se tornar cada vez mais impressionante.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                A visão computacional não está apenas mudando a forma como as máquinas interagem com o mundo. Ela está transformando a maneira como nós também interagimos com a tecnologia.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-ia text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre IA e comece a implementar essas técnicas em seus projetos!
                </p>
                <Link
                  href="/ia"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  ← Voltar para IA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
