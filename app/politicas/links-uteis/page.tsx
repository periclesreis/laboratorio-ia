import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Links & Notas",
  description:
    "Política de Privacidade do aplicativo Links & Notas, com informações sobre armazenamento local, proteção por senha, backups e direitos do usuário.",
};

type PolicyBlock =
  | {
      type: "p" | "h2" | "h3";
      text: string;
    }
  | {
      type: "ul";
      items: string[];
    };

const policyBlocks: PolicyBlock[] = [
  {
    "type": "p",
    "text": "Última atualização: 16 de julho de 2026"
  },
  {
    "type": "p",
    "text": "Aplicativo: Links & Notas"
  },
  {
    "type": "p",
    "text": "Desenvolvedor: Pericles Silva Reis"
  },
  {
    "type": "p",
    "text": "Contato: labdeapp@gmail.com"
  },
  {
    "type": "p",
    "text": "Plataforma: Android"
  },
  {
    "type": "p",
    "text": "Versão da Política: 3.0"
  },
  {
    "type": "p",
    "text": "Endereço oficial: https://www.laboratoriodeapp.com/politicas/links-uteis"
  },
  {
    "type": "p",
    "text": "Esta Política de Privacidade explica, de forma clara, como o aplicativo Links & Notas (“Aplicativo”, “app”, “nós” ou “nosso”) trata informações inseridas pelo usuário e utiliza recursos do dispositivo."
  },
  {
    "type": "p",
    "text": "O Links & Notas foi desenvolvido para funcionar principalmente de forma local, sem exigir cadastro, conta de usuário ou login online. O objetivo é permitir que o usuário salve links, crie notas, organize conteúdos em pastas, faça backups e proteja itens selecionados com uma senha local."
  },
  {
    "type": "p",
    "text": "Ao instalar ou utilizar o Aplicativo, o usuário declara estar ciente das práticas descritas nesta Política."
  },
  {
    "type": "h2",
    "text": "1. Informações tratadas pelo Aplicativo"
  },
  {
    "type": "h3",
    "text": "1.1 Conteúdo fornecido pelo usuário"
  },
  {
    "type": "p",
    "text": "O usuário pode inserir voluntariamente no Aplicativo informações como:"
  },
  {
    "type": "ul",
    "items": [
      "títulos e endereços de links;",
      "descrições ou informações associadas aos links;",
      "nomes e ícones de pastas;",
      "organização dos links em pastas;",
      "títulos e conteúdo de notas comuns;",
      "conteúdo de notas estruturadas;",
      "organização das notas em pastas;",
      "cores e preferências visuais das notas;",
      "marcações que indicam se um link, uma nota ou uma pasta está protegido;",
      "arquivos de backup importados pelo usuário."
    ]
  },
  {
    "type": "p",
    "text": "Essas informações são criadas, editadas, organizadas e excluídas pelo próprio usuário."
  },
  {
    "type": "p",
    "text": "O desenvolvedor não acessa automaticamente o conteúdo de links, notas, pastas ou backups armazenados no aparelho."
  },
  {
    "type": "h3",
    "text": "1.2 Preferências e configurações locais"
  },
  {
    "type": "p",
    "text": "O Aplicativo também pode armazenar localmente informações necessárias ao seu funcionamento, como:"
  },
  {
    "type": "ul",
    "items": [
      "preferências de visualização;",
      "configurações internas;",
      "histórico local de itens recentes;",
      "identificação de itens protegidos;",
      "organização de pastas;",
      "dados necessários para importação e restauração de backup."
    ]
  },
  {
    "type": "p",
    "text": "Essas informações permanecem no dispositivo, salvo quando o próprio usuário decide exportá-las ou compartilhá-las."
  },
  {
    "type": "h3",
    "text": "1.3 Senha local de proteção"
  },
  {
    "type": "p",
    "text": "O Links & Notas permite que o usuário crie uma senha local, também chamada de chave do cofre, para proteger itens selecionados."
  },
  {
    "type": "p",
    "text": "Essa senha:"
  },
  {
    "type": "ul",
    "items": [
      "não cria uma conta online;",
      "não é um login em servidor;",
      "não é enviada ao desenvolvedor;",
      "não é sincronizada automaticamente entre aparelhos;",
      "não é incluída nos arquivos de backup;",
      "não possui recuperação por e-mail ou pela internet."
    ]
  },
  {
    "type": "p",
    "text": "A senha é armazenada localmente utilizando um recurso de armazenamento protegido disponibilizado pelo sistema operacional do aparelho."
  },
  {
    "type": "h3",
    "text": "1.4 Dados de contato fornecidos voluntariamente"
  },
  {
    "type": "p",
    "text": "O Aplicativo não exige nome, e-mail ou telefone para funcionar."
  },
  {
    "type": "p",
    "text": "Entretanto, se o usuário entrar em contato voluntariamente pelo e-mail de suporte, poderemos receber o endereço de e-mail do remetente, o nome informado e o conteúdo da mensagem. Esses dados serão utilizados somente para responder à solicitação, prestar suporte, registrar providências necessárias ou cumprir obrigações legais."
  },
  {
    "type": "h3",
    "text": "1.5 Informações que não coletamos diretamente"
  },
  {
    "type": "p",
    "text": "Nesta versão, o Links & Notas não solicita nem coleta diretamente, para operação do desenvolvedor:"
  },
  {
    "type": "ul",
    "items": [
      "nome completo ou cadastro de usuário;",
      "número de telefone;",
      "CPF, RG ou outros documentos pessoais;",
      "informações bancárias ou de pagamento;",
      "dados biométricos;",
      "localização precisa;",
      "contatos do dispositivo;",
      "fotos, vídeos ou áudios pessoais;",
      "acesso à câmera ou ao microfone;",
      "histórico de navegação fora do Aplicativo;",
      "dados para publicidade comportamental;",
      "perfis de consumo ou marketing."
    ]
  },
  {
    "type": "p",
    "text": "O Aplicativo também não monitora os sites visitados pelo usuário fora do ambiente do app."
  },
  {
    "type": "h2",
    "text": "2. Onde os dados são armazenados"
  },
  {
    "type": "p",
    "text": "Por padrão, links, notas, pastas, preferências e demais dados criados no Aplicativo são armazenados localmente no dispositivo do usuário."
  },
  {
    "type": "p",
    "text": "Essas informações não são enviadas automaticamente para servidores próprios do desenvolvedor."
  },
  {
    "type": "p",
    "text": "O Aplicativo pode criar arquivos temporários no aparelho durante a exportação ou importação de backups. O destino final do arquivo depende da escolha do usuário e dos recursos oferecidos pelo sistema Android ou por outros aplicativos instalados."
  },
  {
    "type": "h2",
    "text": "3. Como utilizamos as informações"
  },
  {
    "type": "p",
    "text": "As informações tratadas pelo Aplicativo são utilizadas para:"
  },
  {
    "type": "ul",
    "items": [
      "permitir que o usuário salve, organize e abra links;",
      "permitir que o usuário crie, edite, consulte e organize notas;",
      "criar e gerenciar pastas;",
      "personalizar cores e preferências visuais;",
      "aplicar proteção local por senha a itens selecionados;",
      "exibir o histórico local de itens recentes, quando aplicável;",
      "exportar e importar backups;",
      "compartilhar links ou notas quando o usuário solicitar;",
      "manter o funcionamento adequado do Aplicativo;",
      "corrigir falhas e melhorar a experiência de uso;",
      "cumprir obrigações legais, quando aplicável."
    ]
  },
  {
    "type": "p",
    "text": "Não utilizamos o conteúdo do usuário para venda, publicidade comportamental, criação de perfis comerciais ou comercialização de informações pessoais."
  },
  {
    "type": "h2",
    "text": "4. Proteção por senha e cofre local"
  },
  {
    "type": "h3",
    "text": "4.1 Natureza da proteção"
  },
  {
    "type": "p",
    "text": "A proteção por senha é uma barreira de acesso dentro do próprio Aplicativo."
  },
  {
    "type": "p",
    "text": "Ela não deve ser confundida com:"
  },
  {
    "type": "ul",
    "items": [
      "login online;",
      "conta de usuário;",
      "criptografia individual de cada nota ou link;",
      "criptografia de ponta a ponta;",
      "sincronização segura em nuvem."
    ]
  },
  {
    "type": "p",
    "text": "Embora a senha seja guardada em uma área protegida do sistema operacional, o conteúdo dos links, notas e pastas continua armazenado nos dados locais do Aplicativo. Portanto, o recurso deve ser entendido como controle de acesso dentro do app, e não como um cofre criptográfico destinado a informações de alta sensibilidade."
  },
  {
    "type": "h3",
    "text": "4.2 Itens que podem ser protegidos"
  },
  {
    "type": "p",
    "text": "A proteção pode ser aplicada individualmente a:"
  },
  {
    "type": "ul",
    "items": [
      "links;",
      "pastas de links;",
      "notas comuns;",
      "pastas de notas."
    ]
  },
  {
    "type": "p",
    "text": "Na versão atual, notas estruturadas não recebem a mesma proteção individual do cofre, salvo se essa funcionalidade vier a ser adicionada em atualização futura."
  },
  {
    "type": "h3",
    "text": "4.3 Ações protegidas"
  },
  {
    "type": "p",
    "text": "Sem a senha correta, um item protegido não pode ser:"
  },
  {
    "type": "ul",
    "items": [
      "aberto;",
      "editado;",
      "movido;",
      "enviado ou compartilhado;",
      "excluído;",
      "desprotegido."
    ]
  },
  {
    "type": "p",
    "text": "Nas notas protegidas, a alteração de cor do card pode permanecer disponível sem a senha, pois modifica apenas a aparência visual do item."
  },
  {
    "type": "h3",
    "text": "4.4 Proteção herdada das pastas"
  },
  {
    "type": "p",
    "text": "Quando uma pasta é protegida, os links ou notas que estiverem dentro dela herdam a proteção da pasta, mesmo que não tenham sido protegidos individualmente."
  },
  {
    "type": "p",
    "text": "Enquanto o item permanecer em uma pasta protegida, as ações de abrir, editar, mover, compartilhar ou excluir exigirão a senha."
  },
  {
    "type": "p",
    "text": "Mover um item para dentro de uma pasta protegida faz com que ele passe a herdar essa proteção. Mover um item para fora da pasta exige a senha. Depois de sair, o item deixa de herdar a proteção, exceto quando também estiver protegido individualmente."
  },
  {
    "type": "p",
    "text": "Retirar a proteção da pasta não remove a proteção individual de itens que já tenham sido protegidos separadamente."
  },
  {
    "type": "h3",
    "text": "4.5 Informações visíveis nas listas"
  },
  {
    "type": "p",
    "text": "Para permitir que o usuário reconheça e organize seus itens, o nome ou título do link, da nota ou da pasta e o símbolo de cadeado podem continuar visíveis nas listas."
  },
  {
    "type": "p",
    "text": "O conteúdo da nota, o endereço do link e as ações protegidas permanecem bloqueados até a confirmação da senha, conforme o comportamento da tela."
  },
  {
    "type": "h3",
    "text": "4.6 Tentativas de acesso e recuperação"
  },
  {
    "type": "p",
    "text": "Uma senha incorreta não libera o item ou a ação solicitada."
  },
  {
    "type": "p",
    "text": "A senha não possui recuperação online. O usuário é responsável por memorizá-la ou guardá-la em local seguro."
  },
  {
    "type": "h3",
    "text": "4.7 Limpeza da senha e exclusão de itens protegidos"
  },
  {
    "type": "p",
    "text": "A opção Limpar senha de proteção é uma ação permanente."
  },
  {
    "type": "p",
    "text": "Ao confirmá-la, o Aplicativo exclui:"
  },
  {
    "type": "ul",
    "items": [
      "links protegidos individualmente;",
      "pastas de links protegidas;",
      "links localizados dentro de pastas de links protegidas;",
      "notas comuns protegidas individualmente;",
      "pastas de notas protegidas;",
      "notas comuns localizadas dentro de pastas de notas protegidas;",
      "a senha local de proteção."
    ]
  },
  {
    "type": "p",
    "text": "Itens que apenas herdavam a proteção da pasta também podem ser excluídos nessa operação, ainda que não estivessem marcados individualmente como protegidos."
  },
  {
    "type": "p",
    "text": "O Aplicativo apresenta uma confirmação antes da exclusão. Depois de concluída, a ação não pode ser desfeita, salvo se o usuário possuir um backup anterior válido."
  },
  {
    "type": "h2",
    "text": "5. Backup, exportação e importação"
  },
  {
    "type": "p",
    "text": "O Links & Notas permite exportar dados para um arquivo de backup com extensão .lu."
  },
  {
    "type": "p",
    "text": "Esse arquivo pode incluir:"
  },
  {
    "type": "ul",
    "items": [
      "links;",
      "pastas de links;",
      "notas comuns;",
      "pastas de notas;",
      "notas estruturadas;",
      "cores, organização e marcações de proteção."
    ]
  },
  {
    "type": "h3",
    "text": "5.1 O backup pode conter itens protegidos"
  },
  {
    "type": "p",
    "text": "O arquivo de backup pode conter o conteúdo de links, notas e pastas protegidas."
  },
  {
    "type": "p",
    "text": "A senha do cofre não é incluída no backup. Isso significa que restaurar um backup em outro aparelho não transfere automaticamente a senha local anterior."
  },
  {
    "type": "h3",
    "text": "5.2 O arquivo não é um backup criptografado"
  },
  {
    "type": "p",
    "text": "O arquivo .lu não deve ser considerado criptografado ou protegido pela senha do cofre."
  },
  {
    "type": "p",
    "text": "Quem obtiver acesso ao arquivo poderá potencialmente visualizar o conteúdo nele armazenado utilizando ferramentas compatíveis."
  },
  {
    "type": "p",
    "text": "Por isso, o usuário deve:"
  },
  {
    "type": "ul",
    "items": [
      "guardar o backup em local seguro;",
      "evitar enviá-lo a pessoas não autorizadas;",
      "proteger contas de e-mail ou armazenamento em nuvem utilizadas para salvá-lo;",
      "excluir cópias antigas que não sejam mais necessárias."
    ]
  },
  {
    "type": "h3",
    "text": "5.3 Compartilhamento com serviços externos"
  },
  {
    "type": "p",
    "text": "Quando o usuário salva ou compartilha um backup por e-mail, aplicativo de mensagens, armazenamento em nuvem ou outro serviço, o tratamento desses dados passa a estar sujeito também às políticas do serviço escolhido."
  },
  {
    "type": "p",
    "text": "O desenvolvedor não controla a segurança, retenção ou uso realizado por esses serviços externos."
  },
  {
    "type": "h3",
    "text": "5.4 Importação e restauração"
  },
  {
    "type": "p",
    "text": "Ao importar um backup, o usuário autoriza o Aplicativo a ler o arquivo selecionado e incorporar os dados compatíveis ao armazenamento local."
  },
  {
    "type": "p",
    "text": "O usuário deve importar apenas arquivos obtidos de fonte confiável e manter uma cópia de segurança antes de restaurar dados importantes."
  },
  {
    "type": "h2",
    "text": "6. Compartilhamento de links e notas"
  },
  {
    "type": "p",
    "text": "O usuário pode optar por compartilhar links ou notas utilizando os recursos do dispositivo."
  },
  {
    "type": "p",
    "text": "O compartilhamento só ocorre após uma ação do usuário."
  },
  {
    "type": "p",
    "text": "Ao escolher um aplicativo externo, como e-mail, mensageiro, rede social ou serviço de nuvem, o conteúdo enviado passa a estar sujeito às políticas e práticas desse terceiro."
  },
  {
    "type": "p",
    "text": "Itens protegidos exigem a senha antes do compartilhamento. A alteração de cor de uma nota protegida não compartilha seu conteúdo."
  },
  {
    "type": "h2",
    "text": "7. Permissões e recursos do dispositivo"
  },
  {
    "type": "p",
    "text": "O Aplicativo utiliza apenas recursos necessários às suas funcionalidades."
  },
  {
    "type": "h3",
    "text": "7.1 Acesso à internet"
  },
  {
    "type": "p",
    "text": "O acesso à internet pode ser utilizado para:"
  },
  {
    "type": "ul",
    "items": [
      "abrir links externos escolhidos pelo usuário;",
      "acessar a Política de Privacidade;",
      "abrir páginas oficiais do desenvolvedor;",
      "acessar conteúdos online relacionados ao link selecionado."
    ]
  },
  {
    "type": "p",
    "text": "Essa permissão não é utilizada pelo desenvolvedor para monitorar a navegação do usuário fora do Aplicativo."
  },
  {
    "type": "h3",
    "text": "7.2 Armazenamento local e seleção de arquivos"
  },
  {
    "type": "p",
    "text": "O Aplicativo utiliza armazenamento local para salvar seus dados e pode solicitar ao sistema que permita selecionar ou criar arquivos durante operações de backup e restauração."
  },
  {
    "type": "h3",
    "text": "7.3 Compartilhamento do sistema"
  },
  {
    "type": "p",
    "text": "Quando o usuário escolhe enviar um link, uma nota ou um backup, o Aplicativo pode abrir o painel de compartilhamento do Android e disponibilizar o conteúdo aos aplicativos selecionados pelo próprio usuário."
  },
  {
    "type": "h2",
    "text": "8. Links e serviços externos"
  },
  {
    "type": "p",
    "text": "O Aplicativo permite abrir sites e serviços externos."
  },
  {
    "type": "p",
    "text": "Ao acessar um link, o usuário passa a interagir diretamente com o serviço de terceiros. Esses serviços podem receber informações técnicas comuns a uma conexão de internet, como endereço IP, tipo de navegador, data e horário do acesso, conforme suas próprias políticas."
  },
  {
    "type": "p",
    "text": "Esta Política não controla nem substitui as políticas de privacidade dos sites, aplicativos, plataformas de armazenamento, serviços de mensagens ou outros terceiros acessados pelo usuário."
  },
  {
    "type": "p",
    "text": "Não somos responsáveis pelo conteúdo, disponibilidade, segurança ou práticas de privacidade desses serviços externos."
  },
  {
    "type": "h2",
    "text": "9. Compartilhamento de dados pelo desenvolvedor"
  },
  {
    "type": "p",
    "text": "Não vendemos, alugamos ou comercializamos dados dos usuários."
  },
  {
    "type": "p",
    "text": "Como regra geral, os dados criados no Links & Notas permanecem no dispositivo."
  },
  {
    "type": "p",
    "text": "O compartilhamento pelo desenvolvedor somente poderá ocorrer:"
  },
  {
    "type": "ul",
    "items": [
      "quando necessário para atender a uma obrigação legal válida;",
      "para exercer ou proteger direitos em processo judicial, administrativo ou arbitral;",
      "para investigar uso abusivo ou incidente de segurança relacionado aos serviços sob nosso controle;",
      "mediante autorização do usuário, quando aplicável."
    ]
  },
  {
    "type": "p",
    "text": "Não compartilhamos dados pessoais para publicidade comportamental ou venda de informações."
  },
  {
    "type": "h2",
    "text": "10. Retenção e exclusão de dados"
  },
  {
    "type": "p",
    "text": "Os dados locais permanecem no aparelho enquanto o Aplicativo estiver instalado e enquanto o usuário não os excluir."
  },
  {
    "type": "p",
    "text": "O usuário pode apagar dados por meio de ações como:"
  },
  {
    "type": "ul",
    "items": [
      "excluir links individualmente;",
      "excluir notas individualmente;",
      "excluir pastas;",
      "limpar a senha e excluir itens protegidos;",
      "restaurar ou reorganizar dados por meio de backup;",
      "limpar os dados do Aplicativo nas configurações do Android;",
      "desinstalar o Aplicativo;",
      "excluir manualmente arquivos de backup exportados."
    ]
  },
  {
    "type": "p",
    "text": "A exclusão de uma pasta comum pode preservar os itens fora dela, conforme informado na tela de confirmação. A limpeza da senha, por outro lado, exclui também o conteúdo protegido ou herdado de pastas protegidas, conforme explicado nesta Política."
  },
  {
    "type": "p",
    "text": "Ao desinstalar o Aplicativo ou limpar seus dados pelo Android, as informações locais podem ser removidas do dispositivo de acordo com o comportamento do sistema operacional."
  },
  {
    "type": "p",
    "text": "Arquivos exportados, mensagens enviadas ou cópias salvas em serviços externos devem ser excluídos manualmente pelo usuário no local onde foram armazenados."
  },
  {
    "type": "h2",
    "text": "11. Segurança das informações"
  },
  {
    "type": "p",
    "text": "Adotamos medidas razoáveis de segurança compatíveis com a natureza local do Aplicativo, incluindo:"
  },
  {
    "type": "ul",
    "items": [
      "minimização da coleta de dados;",
      "armazenamento local do conteúdo;",
      "uso de recurso protegido do sistema para guardar a senha do cofre;",
      "confirmação da senha antes de ações protegidas;",
      "avisos antes de exclusões permanentes;",
      "ausência de envio automático do conteúdo para servidores próprios;",
      "uso de permissões somente quando necessárias."
    ]
  },
  {
    "type": "p",
    "text": "Nenhum sistema é totalmente imune a falhas, perda, acesso indevido ou comprometimento do aparelho."
  },
  {
    "type": "p",
    "text": "Recomendamos que o usuário:"
  },
  {
    "type": "ul",
    "items": [
      "mantenha o Android e o Aplicativo atualizados;",
      "utilize bloqueio de tela no aparelho;",
      "não compartilhe a senha do cofre;",
      "não armazene segredos bancários, documentos extremamente sensíveis ou credenciais críticas no app;",
      "mantenha backups em local seguro;",
      "evite instalar aplicativos de origem desconhecida;",
      "proteja as contas usadas para armazenar backups."
    ]
  },
  {
    "type": "h2",
    "text": "12. Crianças e adolescentes"
  },
  {
    "type": "p",
    "text": "O Links & Notas não é direcionado especificamente a crianças e não exige cadastro ou identificação pessoal para funcionar."
  },
  {
    "type": "p",
    "text": "O Aplicativo não coleta intencionalmente dados pessoais de menores para fins de publicidade, criação de perfil ou comercialização."
  },
  {
    "type": "p",
    "text": "Pais ou responsáveis devem orientar menores quanto ao conteúdo armazenado, ao compartilhamento de informações e ao uso de links externos."
  },
  {
    "type": "p",
    "text": "Caso um responsável acredite que dados pessoais de um menor tenham sido enviados indevidamente ao desenvolvedor por meio de contato ou suporte, poderá solicitar análise pelo e-mail informado nesta Política."
  },
  {
    "type": "h2",
    "text": "13. Direitos do usuário e LGPD"
  },
  {
    "type": "p",
    "text": "Nos termos da legislação aplicável, inclusive da Lei Geral de Proteção de Dados Pessoais — LGPD, o titular pode possuir direitos relacionados ao tratamento de seus dados pessoais, como:"
  },
  {
    "type": "ul",
    "items": [
      "confirmação da existência de tratamento;",
      "acesso aos dados pessoais;",
      "correção de dados incompletos, inexatos ou desatualizados;",
      "informação sobre finalidades e compartilhamentos;",
      "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;",
      "portabilidade, quando aplicável e regulamentada;",
      "revogação de consentimento, quando essa for a base utilizada;",
      "oposição ou revisão, nos casos previstos em lei."
    ]
  },
  {
    "type": "p",
    "text": "Como o Aplicativo não exige conta online e mantém o conteúdo principal localmente, grande parte do controle pode ser exercida diretamente pelo usuário no próprio aparelho, por meio da edição, exclusão, exportação, limpeza dos dados ou desinstalação."
  },
  {
    "type": "p",
    "text": "Pedidos relacionados a dados enviados voluntariamente ao suporte podem ser encaminhados para labdeapp@gmail.com."
  },
  {
    "type": "p",
    "text": "Poderemos solicitar informações razoáveis para confirmar a identidade do solicitante e evitar divulgação indevida de dados a terceiros."
  },
  {
    "type": "h2",
    "text": "14. Serviços de terceiros e distribuição"
  },
  {
    "type": "p",
    "text": "O Aplicativo pode ser distribuído por plataformas como a Google Play Store e utilizar recursos oferecidos pelo Android."
  },
  {
    "type": "p",
    "text": "Essas plataformas e serviços podem tratar dados técnicos, de conta, instalação, diagnóstico, pagamento ou uso conforme suas próprias políticas e configurações. Esse tratamento é realizado pelos respectivos terceiros e não representa coleta direta do conteúdo de links ou notas pelo desenvolvedor."
  },
  {
    "type": "p",
    "text": "Caso o Aplicativo venha a incorporar futuramente serviços de analytics, publicidade, sincronização em nuvem, login online, banco de dados externo, notificações remotas, crash reporting ou outras tecnologias que alterem o tratamento de dados, esta Política será atualizada antes ou juntamente com a nova funcionalidade, quando necessário."
  },
  {
    "type": "h2",
    "text": "15. Incidentes e limitações"
  },
  {
    "type": "p",
    "text": "Se identificarmos incidente de segurança relacionado a dados sob nosso controle e que possa causar risco ou dano relevante aos titulares, adotaremos medidas razoáveis de contenção, investigação e comunicação, observadas as obrigações legais aplicáveis."
  },
  {
    "type": "p",
    "text": "Como o conteúdo principal permanece no aparelho do usuário, problemas decorrentes de perda, roubo, desbloqueio indevido, malware, acesso físico ao dispositivo ou exposição de backups também dependem das medidas de segurança adotadas pelo usuário e pelo sistema operacional."
  },
  {
    "type": "h2",
    "text": "16. Alterações nesta Política"
  },
  {
    "type": "p",
    "text": "Esta Política poderá ser atualizada para refletir:"
  },
  {
    "type": "ul",
    "items": [
      "mudanças nas funcionalidades do Aplicativo;",
      "novas formas de armazenamento ou compartilhamento;",
      "alterações no recurso de proteção por senha;",
      "exigências legais ou regulatórias;",
      "requisitos da loja de aplicativos;",
      "melhorias de segurança e transparência."
    ]
  },
  {
    "type": "p",
    "text": "A data e a versão da Política serão indicadas no início do documento."
  },
  {
    "type": "p",
    "text": "Recomendamos que o usuário consulte periodicamente a versão publicada no endereço oficial:"
  },
  {
    "type": "p",
    "text": "https://www.laboratoriodeapp.com/politicas/links-uteis"
  },
  {
    "type": "h2",
    "text": "17. Contato"
  },
  {
    "type": "p",
    "text": "Em caso de dúvidas, solicitações, reclamações ou preocupações relacionadas à privacidade e ao tratamento de dados no Links & Notas, entre em contato:"
  },
  {
    "type": "p",
    "text": "Desenvolvedor: Pericles Silva Reis"
  },
  {
    "type": "p",
    "text": "E-mail: labdeapp@gmail.com"
  },
  {
    "type": "p",
    "text": "Política oficial: https://www.laboratoriodeapp.com/politicas/links-uteis"
  },
  {
    "type": "p",
    "text": "As solicitações serão analisadas e respondidas dentro de prazo razoável, considerando a natureza do pedido e a legislação aplicável."
  },
  {
    "type": "h2",
    "text": "18. Compromisso com a privacidade"
  },
  {
    "type": "p",
    "text": "O Links & Notas foi criado para oferecer organização e praticidade sem exigir coleta desnecessária de dados pessoais."
  },
  {
    "type": "p",
    "text": "Nosso compromisso é manter o usuário no controle de seus próprios links, notas, pastas, backups e configurações, com informações claras sobre os limites da proteção local e os cuidados necessários para preservar a segurança dos dados."
  }
];

export default function PoliticaLinksNotasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="border-b border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/aplicativos"
            className="mb-6 inline-flex items-center gap-2 text-purple-400 transition hover:text-purple-300"
          >
            <span>←</span>
            <span>Voltar para Aplicativos</span>
          </Link>

          <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text pb-2 text-4xl font-bold leading-[1.15] text-transparent sm:text-5xl md:text-6xl">
            Política de Privacidade
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Links & Notas
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <article className="rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 p-6 shadow-lg shadow-purple-500/10 sm:p-8">
          {policyBlocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="mb-4 mt-10 border-t border-white/10 pt-8 text-2xl font-bold text-purple-300 first:mt-0 first:border-t-0 first:pt-0"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3
                  key={index}
                  className="mb-3 mt-6 text-xl font-bold text-purple-200"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "ul") {
              return (
                <ul
                  key={index}
                  className="mb-5 list-disc space-y-2 pl-6 text-slate-200"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="mb-5 leading-relaxed text-slate-200">
                {block.text}
              </p>
            );
          })}
        </article>
      </main>
    </div>
  );
}
