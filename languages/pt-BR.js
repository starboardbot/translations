const LOCALE = "pt-BR"

module.exports = {
  name: 'Portuguese (Brazil)',
  HELLO_WORLD: 'Olá mundo!',
  TWEET: authorName => `Tweet de ${authorName}`,
  FROM_SERVER: server => `De ${server}`,
  GET_STARTED: 'Vamos começar',
  GET_STARTED_EMBED: (req, prefix) => `Eu detectei um chat com o nome \`starboard\`, então será para lá que todas as mensagens estreladas irão de agora em diante. Você pode mudar depois, se quiser. 
  Nesse momento nesse servidor, as mensagens precisam de ${req} reação(ões) para serem postadas nesse chat, mas isso também pode ser mudado depois. 
  Você pode começar a me configurar nesse servidor com o comando \`${prefix}setup\`. Esse comando vai passar por todos as minhas configurações.
  E o mais importante, divirta-se!`.stripIndents(),
  GET_STARTED_FOOTER: 'Agradecemos por usar o Starboard!',
  CANT_SPEAK: 'Eu não consigo falar nesse chat! Por favor, peça a um moderador para mudar minha permissão naquele chat, ou tente me usar em outro chat.',
  HELP: 'Ajuda',
  NEED_VOTE: doThis => `Para ${doThis}, você precisa **[votar para o bot](https://top.gg/bot/655390915325591629/vote)**. Assim que votar, espere algun minutos para que eu consiga receber seu voto.`,
  NEED_PREMIUM: doThis => `Para ${doThis}, seu servidor precisa ser um **[Servidor Premium](https://patreon.com/TheNoob27)**.`,
  STAR_REQ_FEAT: 'mudar os requerimentos para aparecerem emojis de estrelas diferentes',
  EMOJIS_FEAT: 'mudar os emojis',
  DOWNVOTE_FEAT: 'rejeitar uma mensagem estrelada',
  MULTIPLE_EMOJIS_FEAT: 'ter vários emojis ao mesmo tempo',
  CHANNEL_SETTINGS_FEAT: 'ter mais de 10 configurações de chats distintas',
  AUTO_STAR_FEAT: 'ativar mensagens estreladas automáticas',
  FIND_USER_MORE_SPECIFIC: users => `Por favor, seja mais específico. Eu achei ${users} usuários disponíveis para a sua ação.`,
  FIND_USER_PROMPT: list => `Eu achei vários usuários disponíveis para a sua ação:
  ${list}
  Por favor, responda com o número correspondente que você deseja.`.stripIndents(),
  SETTINGS: {
    NSFW_STARBOARD_ID: 'Aqui é onde as mensagens estreladas de chats +18 irão. Se não estiver configurado, as mensagens desses chats irão para o starboard normal, com as imagens censuradas pela ferramenta de spoiler.',
    REQUIRED: 'Essa é a quantia de estrelas necessárias para uma mensagem ser postada no starboard.',
    REQUIRED_TO_REMOVE: 'Quanto uma mensagem estrelada perder estrelas e chegue nesse número, ela será removida do starboard.',
    PERMISSION: 'Essa é a permissão que usuários precisam ter para executar várias ações, como deletar mensagens, mudar configurações e adicionar outros usuários à lista negra. \n' +
      'Para executar essa configuração, você pode usar permissões como `MANAGE_MESSAGES`, `Manage Messages`, `Manage-Messages` ou `8192` (precisa ser em inglês). Se você optar por usar mais de uma permissão, use uma calculadora de permissões.',
    ON_DELETION: 'Isso é o que deveria acontecer quando um moderador deleta uma mensagem no starboard. A configuração "repost" faz que mensagens estreladas sejam repostadas automaticamente, enquanto a configuração "freeze" faz que as mensagens estreladas ficam congeladas. A configuração "trash" faz que as mensagens estreladas sejam deletadas.',
    LINK_DELETES: 'Se mensagem original for deletada, a mensage correspondente no starboard também será deletada automaticamente.',
    FILTER_BOTS: 'Determina se as mensagens de um bot serão filtradas (ignoradas) ou não.',
    STAR_SELF: 'Determina se um usuário pode dar uma estrela para uma mensagem que ele mesmo mandou.',
    WATCHING: 'Ative isso se você quiser que o Starboard funcione normalmente mas sem realmente postar mensagens em um quadro de starboard.\n' +
      'Eu acho que isso é útil se você tem um servidor com um segundo bot de Starboard, mas essa opção foi feita principalmente para o servidor Discord Bot List, no qual esse bot não está mais. Ela pode ser removida no futuro.',
    CLEAN: 'Com isso habilitado, [Clique e pule para a mensagem!](https://youtu.be/KvxteMk0e84) e outros links/mídia não vão aparecer no fim das mensagens do starboard.',
    DOWNVOTE: 'Determina se usuários podem dar votos negativos nas mensagens estreladas. Quando uma mensagem é tirada do starboard por votos negativos, ela é automaticamente congelada e não pode mais voltar pra lá.',
    BOTS_ON_LB: 'Determina se bots podem aparecer no placar de líderes.',
    ATTACHMENTS: 'Determina se mídias, tipo vídeos, devem ser anexadas à mensagem do starboard ao invés de apenas adicionadas como links.',
    NO_EXPLORE: p => `Determina se o comando \`${p}explore\` deve ser desativado para o servidor. Suas mensagens ainda vão aparecer nesse comando se a opção **Visible** estiver ativada.`,
    FILTER_BLACKLISTED: 'Determina se usuários na lista negra devem ser retirados do starboard.',
    REMOVE_REACTIONS: 'Determina se reações devem ser removidas caso sejam inválidas. Por exemplo, reações em mensagens de usuários na lista negra.',
    KEEP_ROLES: 'Determina se usuários devem ficar com os cargos de recompensa antigos ao conseguir um novo.',
    MENTION_AUTHOR: 'Determina se o autor de uma mensagem deve ser mencionado (notificado) em suas mensagens do starboard.',
    QUICK_ACTIONS: 'Com isso habilitado, usuários podem fazer ações em uma mensagem estrelada reagindo na mensagem do starboard com emojis específicos.\n' +
      '__Moderadores:__\n' +
      '**Descartar**: 🗑️\n' +
      '**Travar**: 🔒\n' +
      '**Destravar**: 🔓\n' +
      '**Congelar**: 🧊 ou ❄️\n' +
      '**Descongelar**: 🔥\n' +
      '**Recarregar**: 🔄 ou 🔁\n' +
      '**Incluir no Hall da Fama**: 🏆 ou 🏅\n' +
      '**Forçar**: 📌 ou 📍 - somente na mensagem original\n' +
      '__Todos__:\n' +
      '**Salvar**: 📥 ou 💾\n' +
      '**Deletar**: ❌ ou 🇽 - somente em suas próprias mensagens estreladas',
    LINK_EDITS: 'Se uma mensagem for editada, a mensagem do starboard também será atualizada.',
    DISPLAY_NICKNAME: 'Determina se o apelido do autor deve ser mostrado no lugar de sua Discord tag.',
    NO_COMMANDS: 'Determina se os comandos devem ser desativados para membros (exceto moderadores), fazendo o bot "funcionar em segundo plano".',
    AUTO_STAR: 'Determina se o bot deve automaticamente dar estrelas nas mensagens desses canais.',
    DELETE_INVALID: 'Determina se o bot deve deletar mensagens em um canal com AutoStar que não passem dos filtros ou que tenham sido enviadas por um usuário na lista negra.',
    DOWNVOTE_EMOJI: 'O emoji usado para dar voto negativo em mensagens estreladas.',
    STAR_REQUIREMENTS: {
      FIRST: 'A quantidade de estrelas que uma mensagem precisa conseguir antes que o emoji do lado do contador mude da primeira estrela para a segunda estrela.',
      SECOND: 'A quantidade de estrelas que uma mensagem precisa conseguir antes que o emoji do lado do contador mude da segunda estrela para a terceira estrela.',
      THIRD: 'A quantidade de estrelas que uma mensagem precisa conseguir antes que o emoji do lado do contador mude da terceira estrela para a quarta estrela.'
    },
    TYPES: {
      NOT_SET: 'Não Definido',
      NONE: 'Nenhum',
      STARS: 'estrelas',
      CHANNEL: 'canal',
      NUMBER: 'número',
      LANGUAGE: 'idioma',
      PERMISSION: 'permissão',
      EMOJI: 'emoji',
      COLOR: 'role/random/[cor]',
      RANDOM: 'aleatório',
      ROLE: 'a cor do cargo mais alto do autor'
    }
  },
  COMMANDS: {
    COOLDOWN_MESSAGE: time => `Você está usando esse comando muito rápido! Por favor espere ${time} antes de usá-lo novamente.`,
    COOLDOWN: 'Cooldown',
    EVAL: {
      DESCRIPTION: 'Avalia um pedaço de código.',
      USAGE: 'eval <código>',
      NAME: 'eval'
    },
    HELP: {
      DESCRIPTION: 'Veja todos os comandos que o bot tem a oferecer, ou veja informações sobre um comando específico.',
      USAGE: 'help ([comando])',
      EMBED_FOOTER: '() = opcional, <> = obrigatório, [] = espaço reservado, -- = flags opcionais - não inclua esses caracteres ao usar os comandos.',
      NAME: 'ajuda'
    },
    PING: {
      DESCRIPTION: 'Verifica o ping, tempo de resposta e velocidade de edição do bot.',
      USAGE: 'ping',
      PINGING: 'Pingando...',
      CLUSTER: n => `Cluster ${n}`,
      SHARD: n => `Shard ${n}`,
      PING: 'Ping',
      LATENCY: 'Latência',
      EDIT: 'Edição',
      NAME: 'ping'
    },
    RELOAD: {
      DESCRIPTION: 'Recarrega comandos, eventos ou um arquivo.',
      USAGE: 'reload <[comando]/event/file> ([evento]/[arquivo])',
      NAME: 'recarregar'
    },
    CHANGESETTING: {
      DESCRIPTION: 'Altera uma configuração para o canal ou para o servidor, como, por exemplo, o número de estrelas necessário para chegar no starboard. Todas as configurações estão no comando settings, então você pode ver as suas opções lá.',
      USAGE: 'changesetting ([canal]) <[configuração]> <[valor]>',
      UPDATED_SETTINGS: 'Configurações Atualizadas',
      ERRORS: 'Erros',
      CHANNEL_SETTINGS: 'Configurações de Canal',
      NONE: 'Nenhum',
      INVALID_CHANNEL_SETTING: s => `**${s}** não é uma configuração válida para canais, ela só está disponível como configuração de servidor.`,
      INVALID_GUILD_SETTING: s => `**${s}** não é uma configuração válida para servidores, ela só está disponível como configuração de canal.`,
      INVALID_LANGUAGE: l => `**${l}** não é um idioma válido.`,
      LANGUAGE_SET: l => `Idioma ${l} selecionado com sucesso.`,
      INVALID_CHANNEL: 'Esse canal não existe.',
      INVALID_CHANNEL_TYPE: 'O canal precisa ser de texto ou de anúncio.',
      NOT_NSFW: 'O starboard NSFW precisa ser configurado como canal NSFW (Canal de conteúdo adulto).',
      MISSING_PERMISSIONS: 'O bot não tem a permissão `Gerenciar Canais`, necessária para criar canais.',
      CREATE_STARBOARD_FAIL: 'Algo deu errado ao tentar criar um canal de starboard.',
      REQUIRED_TOO_BIG: 'A quantidade de estrelas necessárias para chegar no starboard não pode ser tão grande.',
      REQUIRED_TOO_SMALL: 'A quantidade de estrelas necessárias para chegar no starboard tem que ser maior que 0.',
      RTR_TOO_BIG: 'A quantidade de estrelas necessárias para ser removido do starboard não pode ser tão grande.',
      RTR_TOO_SMALL: 'A quantidade de estrelas necessárias para ser removido do starboard tem que ser maior ou igual a 0.',
      INVALID_PERMISSIONS: 'As permissões fornecidas não foram válidas.',
      PERMISSIONS_SET: p => `Permissões necessárias para realizar várias ações a ${p} definidas com sucesso.`,
      COLOR_SET: (c, r) => `Cor ${c} definida com sucesso para mensagens do starboard com mais de ${r} estrelas.`,
      REQUIREMENT_TOO_HIGH: t => `O requisito **${t}** não pode ser tão alto.`,
      REQUIREMENT_TOO_LOW: t => `O requisito **${t}** tem que ser um número maior que 0.`,
      EMOJI_NOT_FOUND: 'Esse emoji não foi encontrado, ou é inválido.',
      CANNOT_USE_EMOJI: 'Eu não posso usar esse emoji, tem que ser um emoji de um servidor em que eu estou.',
      EMOJIS_SAME: 'Os emojis de voto positivo e voto negativo em mensagens estreladas não podem ser o mesmo emoji.',
      RESERVED_EMOJI: 'Desculpe, esse emoji não pode ser usado.',
      MAX_EMOJIS: 'Você atingiu a quantidade máxima de emojis permitida para 1 servidor.',
      ALREADY_AN_EMOJI: 'Seu emoji já está salvo como um da lista de emojis.',
      NOT_AN_EMOJI: 'Seu emoji não está salvo como um da lista de emojis.',
      EMOJI_ADD_SET: e => `${e} adicionado com sucesso à lista de emojis.`,
      EMOJI_REMOVE_SET: e => `${e} removido com sucesso da lista de emojis.`,
      EMOJI_SET: e => `Emoji ${e} definido com sucesso para reagir a mensagens.`,
      STAR_SET: (e, type) => `Estrela **${type}** mudada para ${e} com sucesso.`,
      DV_EMOJI_SET: e => `Emoji ${e} definido como emoji de voto negativo com sucesso.`,
      ON_DELETION_NOTHING: 'Mensagens do starboard não vão mais ser repostadas, congeladas ou descartadas ao serem deletadas.',
      ON_DELETION_REPOST: 'Mensagens do starboard agora serão automaticamente repostadas quando forem deletadas por um moderador.',
      ON_DELETION_FREEZE: 'Mensagens estreladas agora serão automaticamente congeladas se a mensagem do starboard for deletada por um moderador.',
      ON_DELETION_TRASH: 'Mensagens estreladas agora serão automaticamente descartadas se a mensagem do starboard for deletada por um moderador.',
      NAME: 'configurar'
    },
    LOCK: {
      DESCRIPTION: 'Trava uma mensagem estrelada no starboard, assim ela vai ficar lá até mesmo se chegar a 0 estrelas.',
      USAGE: 'lock <[IDdeMensagem]>',
      SUCCESS: 'Mensagem travada no starboard com sucesso.',
      FAILED: 'Essa mensagem já está travada.',
      NAME: 'travar'
    },
    UNLOCK: {
      DESCRIPTION: 'Destrava uma mensagem estrelada do starboard, assim ela pode ser removida normalmente.',
      USAGE: 'unlock <[IDdeMensagem]>',
      SUCCESS: 'Mensagem destravada do starboard com sucesso.',
      FAILED: 'Essa mensagem não está travada.',
      NAME: 'destravar'
    },
    FREEZE: {
      DESCRIPTION: 'Congela uma mensagem estrelada, assim ninguém pode adicionar ou remover estrelas.',
      USAGE: 'freeze <[IDdeMensagem]>',
      SUCCESS: 'Mensagem congelada com sucesso.',
      FAILED: 'Essa mensagem já está congelada.',
      NAME: 'congelar'
    },
    UNFREEZE: {
      DESCRIPTION: 'Descongela uma mensagem estrelada, assim todos podem adicionar ou remover estrelas normalmente.',
      USAGE: 'unfreeze <[IDdeMensagem]>',
      SUCCESS: 'Mensagem descongelada com sucesso.',
      FAILED: 'Essa mensagem não está congelada.',
      NAME: 'descongelar'
    },
    PREFIXES: {
      DESCRIPTION: 'Adiciona ou remove prefixos para o servidor, ou vê uma lista deles.',
      USAGE: 'prefixes (add/remove) ([prefixo])',
      ALREADY_PREFIX: 'Esse já é um prefixo desse servidor.',
      TOO_MANY_PREFIXES: 'Há prefixos demais definidos para esse servidor.',
      PREFIX_TOO_LONG: 'Esse prefixo é longo demais.',
      NOT_PREFIX: 'Esse não é um prefixo desse servidor.',
      PREFIX_ADD: p => `Prefixo \`${p}\` adicionado com sucesso à lista de prefixos.`,
      PREFIX_REMOVE: p => `Prefixo \`${p}\` removido com sucesso da lista de prefixos.`,
      PREFIX_SET: p => `Prefixo do servidor definido como \`${p}\` com sucesso.`,
      FOOTER: 'Me mencionar também funciona como prefixo.',
      NAME: 'prefixos'
    },
    LINKS: {
      DESCRIPTION: 'Envia os links relacionados ao bot, como, por exemplo, o link de convite dele.',
      USAGE: 'links',
      LINKS: 'Links',
      DONATION: 'Doação',
      OTHER: 'Outros',
      DISCORD_LINKS: (i, s) => `**Convide-me!**\n**Servidor de Suporte**`,
      PATREON_LINK: p => `**Vire um Apoiador!**`,
      OTHER_LINKS: (v, gh, g) => `**Vote no bot!**\n**GitHub Issues**\n**Guia do Starboard**`,
      NAME: 'links'
    },
    BLACKLIST: {
      DESCRIPTION: 'Vê informações sobre usuários, cargos ou canais na lista negra, ou modifica a lista.',
      USAGE: 'blacklist (add/remove) ([usuário/cargo/canal]) --channel ([configuraçõesDeCanal])',
      BLACKLIST: 'Lista negra',
      USERS: 'Usuários',
      ROLES: 'Cargos',
      CHANNELS: 'Canais',
      ALREADY_BLACKLISTED: s => `**${s}** já está na lista negra.`,
      NOT_BLACKLISTED: s => `**${s}** não está na lista negra.`,
      TOO_MANY_BLACKLISTED: 'Há itens demais na lista negra.',
      NOTHING_BLACKLISTED: 'Não há nada na lista negra.',
      BLACKLIST_ADD: s => `**${s}** adicionado à lista negra com sucesso.`,
      BLACKLIST_ADD_CHANNELS: n => `${n} canais adicionados à lista negra com sucesso.`,
      REMOVE_ALL: 'Tudo foi removido da lista negra com sucesso.',
      BLACKLIST_REMOVE: s => `**${s}** removido da lista negra com sucesso.`,
      NAME: 'listanegra'
    },
    WHITELIST: {
      DESCRIPTION: 'Vê informações sobre usuários ou cargos na lista branca, ou modifica a lista.',
      USAGE: 'whitelist (add/remove) ([usuário/cargo]) --channel ([configuraçõesDeCanal])',
      WHITELIST: 'Lista branca',
      USERS: 'Usuários',
      ROLES: 'Cargos',
      NOT_FOUND: 'Eu não consegui encontrar esse usuário ou cargo.',
      ALREADY_WHITELISTED: s => `**${s}** já está na lista branca.`,
      NOT_WHITELISTED: s => `**${s}** não está na lista branca.`,
      TOO_MANY_WHITELISTED: 'Há itens demais na lista branca.',
      NOTHING_WHITELISTED: 'Não há nada na lista branca.',
      WHITELIST_ADD: s => `**${s}** adicionado à lista branca com sucesso.`,
      REMOVE_ALL: 'Tudo foi removido da lista branca com sucesso.',
      WHITELIST_REMOVE: s => `**${s}** removido da lista branca com sucesso.`,
      NAME: 'listabranca'
    },
    REWARDROLES: {
      DESCRIPTION: 'Visualiza as informações ou adiciona/remove cargos de recompensa, ou seja, cargos dados à usuários após conseguirem um número específico de estrelas.',
      USAGE: 'rewardroles ([configuraçõesDeCanal]) (add/remove) ([cargo]) ([estrelas])',
      NO_LEADERBOARD: 'O placar de líderes está desabilitado nesse servidor e, consequentemente, os cargos de recompensa.',
      REWARD_ROLES: 'Cargos de Recompensa',
      ROLE: 'Cargo',
      STARS_NEEDED: 'Estrelas Necessárias',
      RR_FEAT: 'customizar cargos de recompensa',
      ROLE_NOT_FOUND: 'Esse não é um cargo válido.',
      HIGHER_POSITION: 'Esse cargo é maior do que o meu maior cargo, então eu não consigo adicioná-lo a usuários.',
      ROLE_MANAGED: 'Esse cargo é gerenciado automaticamente por uma integração e não pode ser adicionado manualmente a membros.',
      HIGHER_THAN_USER: 'Você não pode adicionar esse cargo já que ele é maior ou igual ao seu maior cargo.',
      TOO_HIGH: 'Esse número é grande demais.',
      TOO_LOW: 'Esse número é pequeno demais.',
      NOT_A_NUMBER: 'A quantidade de estrelas precisa ser um número.',
      ADD_TOO_MANY: 'Você está adicionando estrelas demais a esse cargo de recompensa.',
      SUBTRACT_TOO_MANY: 'Você está subtraindo estrelas demais desse cargo de recompensa.',
      NOT_RR: 'Esse cargo não está definido como cargo de recompensa.',
      NAME: 'cargosderecompensa'
    },
    FORCE: {
      DESCRIPTION: 'Força ou recarrega uma mensagem no starboard.',
      USAGE: 'force ([canal]) <[IDdeMensagem]>',
      NO_MESSAGE_ID: 'Por favor forneça um ID de mensagem. Se você não sabe como conseguir o ID de uma mensagem, você tem que habilitar o **Modo Desenvolvedor** nas configurações, clicar nos 3 pontos em uma mensagem e clicar em **Copiar ID**.',
      INVALID_TYPE: 'O canal precisa ser de texto.',
      TRASHED: 'Essa mensagem foi descartada e não pode ser forçada.',
      FROZEN: 'Essa mensagem está congelada e não pode ser forçada ou recarregada até ser descongelada.',
      NOT_FOUND: 'Eu não consegui encontrar essa mensagem.',
      IS_STARBOARD_MESSAGE: 'Essa mensagem aparenta ser uma mensagem do starboard, então ela não pode ser forçada.',
      IS_EXPLORE_MESSAGE: 'Essa mensagem aparenta ser uma mensagem do comando explore, então ela não pode ser forçada.',
      CHANNEL_BLACKLISTED: 'Esse canal está na lista negra, então essa mensagem não pode ser forçada.',
      FORCE_SUCCESS: 'Mensagem forçada no starboard com sucesso!',
      POST_SUCCESS: 'Mensagem postada no starboard com sucesso!',
      NAME: 'forçar'
    },
    PURGE: {
      DESCRIPTION: 'Limpa e congela um número de mensagens do starboard.',
      USAGE: 'purge ([canal]) <[mensagens]> --before <[IDdeMensagem]> --after <[IDdeMensagem]>',
      NOT_STARBOARD: 'Esse canal não é um canal de starboard.',
      MISSING_PERMISSIONS: sb => `Eu não tenho permissão para excluir mensagens em massa no ${sb}.`,
      MIGRATING: 'Eu não consigo limpar mensagens dos starboards no momento.',
      ARE_YOU_SURE: 'Tem certeza?',
      NOT_PURGED: 'Cancelando a limpeza do starboard.',
      SUCCESS: (n, sb) => `${n} mensagens de ${sb} removidas e congeladas com sucesso.`,
      NAME: 'limpar'
    },
    TRASH: {
      DESCRIPTION: 'Descarta uma mensagem do starboard e mostra as primeiras 5 pessoas que reagiram a ela, checa se uma mensagem está na lista de mensagens descartadas, remove uma mensagem da lista de mensagens descartadas, limpa a lista ou vê os 100 primeiros IDs de mensagens da lista.',
      USAGE: 'lixeira (add/remove/exists/clear/list) ([IDdeMensagem])',
      REASON_TOO_LONG: 'Seu motivo é longo demais.',
      NOT_MESSAGE_ID: 'Por favor forneça um ID de mensagem.',
      NOT_FOUND: 'Eu não consegui encontrar essa mensagem estrelada.',
      ALREADY_TRASHED: 'Essa mensagem já foi descartada.',
      NOT_TRASHED: 'Essa mensagem não foi descartada.',
      TRASHED_MESSAGES: 'Mensagens Descartadas.',
      AND_MORE: n => `\n\n...E mais ${n}.`,
      NO_TRASHED: 'Não há nenhuma mensagem descartada.',
      TRASH_SUCCESS: 'Mensagem descartada com sucesso.',
      UNTRASH_SUCCESS: 'Mensagem removida da lixeira com sucesso. Agora ela pode ser estrelada de novo.',
      CLEAR_TRASH: n => `${n} itens removidos da lixeira com sucesso.`,
      NAME: 'lixeira'
    },
    STARWORTHY: {
      NAME: 'dignodeestrela',
      DESCRIPTION: 'Checa se uma mensagem é digna de ser estrelada ou não :)',
      USAGE: 'dignodeestrela <[IDdeMensagem]>',
      NOT_ID: 'Por favor forneça um ID de mensagem válido.',
      WORTHY: p => `Essa mensagem é ${p}% digna de estrela.`
    },
    CHANNELSETTINGS: {
      NAME: 'configscanal',
      DESCRIPTION: 'Vê informações sobre Configurações de Canal, ou cria/clona conjuntos de configurações de canal.',
      USAGE: 'configscanal (list/create/edit/delete) ([nome]) (...[canais]) --channel ([configuraçõesDeCanal])',
      NO_CHANNEL_SETTINGS: (prefix, guide) => `**Esse servidor não tem nenhuma configuração de canal.**
      Para criar um novo conjunto de configurações de canal, execute \`${prefix}configscanal create ([nome]) <...[canais]>\`
      
      Configurações de Canal são configurações que só se aplicam a um grupo de canais.
      Elas podem ter seus próprios starboard, emojis, cargos de recompensa, filtros e quase todo o resto que as configurações de servidor podem ter.
      
      **Saiba Mais**`.stripIndents(),
      CHANNEL_SETTINGS: 'Configurações de Canal',
      CHANNELS: 'Canais',
      STARBOARD: 'Starboard',
      AUTO_STAR: 'AutoEstrela',
      NONE: 'Não Definido',
      NAME_TOO_LONG: 'O nome não pode ter mais de 64 caracteres.',
      HIT_MAX: 'Você atingiu a quantidade máxima de configurações para um servidor.',
      PROVIDE_CHANNELS: 'Por favor forneça alguns canais para esse conjunto de configurações de canal.',
      INVALID_CHANNELS: 'Você não forneceu canais válidos.',
      DUPLICATE_CHANNELS: 'Os canais a serem fornecidos não podem já ter configurações de canal. Um canal pode estar em apenas um conjunto de configurações de canal.',
      ARE_YOU_SURE: 'Tem certeza?',
      CONFIRMATION_EMBED: name => `Tem certeza que quer deletar o conjunto **${name}** de configurações de canal?
      Você vai perder todos os cargos de recompensa, lista negra/branca, filtros e outras configurações salvas desse conjunto, e elas serão perdidas para sempre.
      Diga **yes** para continuar.`.stripIndents(),
      NOT_DELETED: 'As configurações não serão deletadas.',
      NOTHING_PROVIDED: 'Por favor forneça o nome de um conjunto de configurações de canal.',
      NOTHING_MODIFIED: 'Por favor forneça edições a fazer.',
      MODIFIED_NAME: n => `nome mudado para **${n}**`,
      SUCCESS_DELETE: n => `**${n}** deletado com sucesso.`
    },
    SETTINGS: {
      NAME: 'configs',
      DESCRIPTION: 'Vê as configurações do servidor/canal, ou vê informações sobre uma configuração específica.',
      USAGE: 'configs ([configuraçõesDeCanal]) ([configuração])',
      SETTINGS: 'Configurações',
      CHANNEL_SETTINGS: 'Configurações de Canal',
      MAIN: 'Configurações Principais',
      FILTERING: 'Filtros',
      CUSTOMISATION: 'Customização',
      EVENTS: 'Eventos',
      DOWNVOTING: 'Votos Negativos',
      AUTO_STAR: 'Auto Estrelar',
      MISCELLANEOUS: 'Diversos',
      STARS: 'Estrelas',
      REQUIREMENTS: 'Requisitos',
      COLORS: 'Cores',
      EMBED_FOOTER: prefix => `Para ver informações sobre uma configuração específica, execute ${prefix}configs <configuração>`,
      INVALID_SETTING: s => `**${s}** não é uma configuração válida.`,
      INVALID_CHANNEL_SETTING: s => `**${s}** não é uma configuração válida para canais, ela só está disponível como configuração de servidor.`,
      INVALID_GUILD_SETTING: s => `**${s}** não é uma configuração válida para servidores, ela só está disponível como configuração de canal.`,
      EMBED_DESCRIPTION: (lock, name, desc) => `${lock} **Configuração**: ${name}\n${desc}`,
      DATA: 'Dados',
      VALUE: 'Valor',
      DEFAULT: 'Padrão',
      PERMISSION: 'Permissão',
      SETTING_ALIASES: 'Outros nomes',
      NONE: 'Nenhum',
      MISSING_PERMISSIONS: p => `Você precisa ter as permissões ${p} para alterar configurações.`,
      CANT_CHANGE: reason => `Você não pode alterar essa configuração: ${reason}`,
      USE_ALIASES: 'Você também pode usar qualquer um desses nomes para alterar/ver essa configuração.'
    },
    SETUP: {
      NAME: 'setup',
      DESCRIPTION: 'Configura o bot em um servidor ou canal, guiando você pelas configurações básicas.',
      USAGE: 'setup ([canal])',
      SETUP: 'Setup',
      EMBED_FOOTER: (n, total) => `Você pode parar, pular ou pular para o fim a qualquer momento. Configuração ${n}/${total}`,
      SETTING: 'Configuração',
      SETTING_SKIPPED: 'Pulou a configuração.',
      MISSING_PERMISSIONS: 'O bot não tem a permissão `Gerenciar Canais`, necessária para criar canais.',
      CREATE_CHANNEL_FAIL: 'Algo deu errado ao tentar criar um canal de starboard.',
      CREATE_CHANNEL_SUCCESS: c => `Canal de starboard criado com sucesso: ${c}`,
      REQUIRED_NAN: 'A quantidade de estrelas necessárias para chegar no starboard tem que ser um número.',
      RTR_NAN: 'A quantidade de estrelas que uma mensagem precisa ter para ser removida do starboard tem que ser um número.',
      STARBOARD_ID: 'Se você quer que eu crie um canal de starboard para você, digite `create`. Por padrão ele será nomeado "starboard", mas você também pode especificar o nome, por exemplo `create museu-de-mensagens`.',
      LANGUAGE: 'Note que nem todos os idiomas estão completos ainda, Inglês é o único completo.',
      EMOJIS: 'Esse é o emoji que usuários devem usar para reagir em mensagens que eles querem colocar no starboard. Você também pode reagir a essa mensagem com o emoji que você quer.',
      FILTER_BOTS: 'Se você quer que os bots também cheguem no starboard, não habilite isso.',
      VISIBLE: 'Se você pretende estrelar coisas pessoais/privadas, você definitivamente deve desativar isso. Se isso estiver ativado, um 🌍 vai aparecer em mensagens estreladas que forem encontradas no comando explorar, seguido pelo número de vezes que foi encontrada.',
      CANCELLED_BY_MISTAKES: 'Cancelado devido a muitos erros.',
      WAS_INACTIVE: 'Parado por inatividade.',
      CANCELLED: 'O setup foi cancelado, nenhuma configuração foi alterada.',
      SOMETHING_WRONG: 'Algo deu errado.',
      BULK_DELETE_FAIL: 'Algo deu errado ao tentar deletar meus anexos.'
    },
    MESSAGEINFO: {
      NAME: 'sobremensagem',
      DESCRIPTION: 'Vê informações sobre uma mensagem estrelada.',
      USAGE: 'sobremensagem <[IDdeMensagem]>',
      NO_MESSAGE_ID: 'Por favor forneça um ID de mensagem.',
      NOT_FOUND: 'Eu não consegui achar essa mensagem estrelada.',
      STARRED_MESSAGE_INFO: 'Sobre a Mensagem Estrelada',
      CONTEXT: 'Contexto',
      AUTHOR: 'Autor',
      CHANNEL: 'Canal',
      STARBOARD: 'Starboard',
      STARRED_AT: 'Estrelada em',
      STATS: 'Estatísticas',
      STARS: 'Estrelas',
      UPVOTES: 'Votos positivos',
      DOWNVOTES: 'Votos negativos',
      GLOBAL: 'Pontos Globais',
      OTHER: 'Outros',
      DELETED: 'Mensagem Deletada',
      AT_DATE: d => `(em ${d})`,
      SAVED: 'Mensagem Salva',
      WILL_DELETE: d => `(será deletada em ${d})`,
      ON_STARBOARD: 'No Starboard',
      ON_STARBOARD_BEFORE: 'Esteve no Starboard',
      ATTRIBUTES: 'Atributos',
      NONE: 'Nenhum',
      LINKS: 'Links',
      MESSAGE: 'Mensagem',
      CONVERSATION: 'Conversa',
      STARBOARD_MESSAGE: 'Mensagem do Starboard'
    },
    MIGRATE: {
      NAME: 'migrar',
      DESCRIPTION: 'Escaneia até as últimas 1000 mensagens no starboard procurando por postagens de outros bots de starboard e converte elas em mensagens estreladas desse bot. Opcionalmente, você também pode fornecer um ID de mensagem como referência para o starboard escanear antes ou depois.',
      USAGE: 'migrar ([starboard]) ([limite]) --after <[IDdeMensagem]> --before <[IDdeMensagem]>',
      NO_STARBOARD: 'Não há nenhum starboard definido para esse servidor.',
      MISSING_PERMISSIONS: sb => `Eu não tenho permissão para deletar mensagens em ${sb}. Note que eu não vou deletar uma mensagem antes que ela seja migrada com sucesso.`,
      MIGRATE: 'Migrar',
      ETA: t => `Estimativa: cerca de ${t}`,
      CANCELLED: 'Migração de starboard cancelada.',
      ALREADY_MIGRATING: 'Parece que esse servidor já está migrando mensagens no momento.',
      SUCCESS: n => `${n} mensagens migradas com sucesso.`
    },
    EXPLORE: {
      NAME: 'explorar',
      DESCRIPTION: 'Mostra uma mensagem estrelada aleatória de um usuário, do seu servidor ou de qualquer servidor! Para uma mensagem poder aparecer em qualquer servidor, ela tem que ter 5+ estrelas e o servidor precisa ter a configuração **Visible** ativada.',
      USAGE: 'explorar ([estrelas]) (me/user/server/global) ([user])',
      NOT_FOUND: 'Nenhuma mensagem estrelada visível foi encontrada. Mensagens precisam ter 5+ estrelas para aparecer, então vá e estrele quaisquer mensagens engraçadas!',
      COULD_NOT_FETCH: id => `Eu não consegui achar uma mensagem estrelada de um registro aleatório com o ID \`${id}\``,
      THIS_SERVER: 'esse servidor',
      THIS_USER: 'esse usuário',
      YOU: 'você'
    },
    LEADERBOARD: {
      NAME: 'placar',
      DESCRIPTION: 'Mostra o placar de líderes das pessoas com as estatísticas mais altas. Você pode especificar um usuário para ver a posição dele no placar, ou um canal para filtrar as estatísticas para mensagens estreladas apenas daquele canal.',
      USAGE: 'placar (messages/stars/starboarded/global/trashed/downvotes/channels/servers/reset) ([página]) ([usuário]) ([canal]) --before <[data]> --after <[data]>',
      NO_LEADERBOARD: 'O placar de líderes está desabilitado nesse servidor.',
      NOT_ON_LEADERBOARD: 'Não está no placar de líderes.',
      TITLE: title => `Placar de Líderes - ${title}`,
      SERVERS: 'Servidores',
      NOTHING_TO_DISPLAY: 'Nada para exibir.',
      ARE_YOU_SURE: 'Tem certeza?',
      CONFIRMATION_EMBED: 'Tem certeza que você quer apagar o placar de líderes?\n' +
        'Por favor note que isso não reseta todos os placares de líderes, apenas os de **Estrelas**, **Global**,**Descartadas** e **Vezes no Starboard** desse servidor.\n' +
        'Para outros placares, como o placar de mensagens, você pode usar as flags --before ou --after (ex.: `--after 14/09/2021`).\n' +
        'Diga **yes** para continuar.',
      NOT_RESET: 'Reset do placar de líderes cancelado.',
      SUCCESS_RESET: 'Placar de líderes resetado com sucesso.'
    },
    HALLOFFAME: {
      NAME: 'halldafama',
      DESCRIPTION: 'Mostra o Hall da Fama desse servidor, ou adiciona/remove mensagens dele. Você também pode adicionar mensagens reagindo com o atalho 🏆.',
      USAGE: 'halldafama (add/remove/[página]) ([IDdeMensagem])',
      TITLE: 'Hall da Fama',
      NOTHING: p => `Nada para exibir.\nModeradores podem adicionar uma mensagem ao hall da fama usando \`${p}halldafama add <[IDdeMensagem]>\`, ou reagindo com o atalho 🏆.`,
      EMBED_DESCRIPTION: 'Este é o Hall da Fama, mensagens que "pertencem a um museu" - as melhores mensagens no servidor. Essas mensagens foram escolhidas por vários moderadores, então aparecer aqui é uma grande conquista. Aqui está a lista:',
      PAGE: (p, t) => `Página ${p}/${t}`,
      NOT_FOUND: 'Eu não consegui encontrar essa mensagem estrelada.',
      ALREADY_ON: 'Essa mensagem já está no Hall da Fama.',
      MAX: 'Você atingiu o máximo de 100 mensagens no Hall da Fama.',
      NOT_ON: 'Essa mensagem não está no Hall da Fama.',
      ARE_YOU_SURE: 'Tem certeza?',
      CONFIRMATION_EMBED: 'Tem certeza que você quer remover todas as mensagens do Hall da Fama?\n' +
        'Diga **yes** para continuar.',
      CANCELLED: 'Remoção de todas as mensagens do Hall da Fama cancelada.',
      SUCCESS_ADD: 'Mensagem adicionada ao Hall da Fama com sucesso.',
      SUCCESS_REMOVE: 'Mensagem removida do Hall da Fama com sucesso.',
      SUCCESS_REMOVE_ALL: 'Tudo foi removido do Hall da Fama com sucesso.'
    },
    STATS: {
      NAME: 'stats',
      DESCRIPTION: 'Veja as estatísticas de um usuário, ou resete-as.',
      USAGE: 'stats ([usuário]) --reset',
      SUCCESS_RESET: u => `Estatísticas de **${u}** no placar de líderes resetadas com sucesso. Note que apenas o primeiro conjunto de estatísticas (Estrelas, Vezes no Starboard, Pontos Globais etc) pode ser resetado.`,
      STARS: 'Estrelas',
      STARBOARDED: 'Vezes No Starboard',
      GLOBAL_POINTS: 'Pontos Globais',
      DOWNVOTES: 'Votos Negativos',
      TRASHED: 'Descartadas',
      MESSAGES_STARRED: 'Mensagens Estreladas',
      LOCKED: 'Mensagens Travadas',
      FROZEN: 'Mensagens Congeladas',
      CURRENTLY_TRASHED: 'Mensagens Na Lixeira Agora',
      ON_STARBOARD_BEFORE: 'Mensagens Que Estiveram No Starboard',
      AVG_STARS_PER_MESSAGE: 'Média De Estrelas Por Mensagem',
      STARRED_CHANNEL: 'Mais Estrelas Ganhas Em',
      MOST_STARRED: 'Pico De Estrelas Em Uma Mensagem',
      PERCENT_LOCKED: '% Travado',
      PERCENT_FROZEN: '% Congelado',
      PERCENT_TRASHED: '% Descartado',
      STARRED_MESSAGES_BY_YOU: '% De Mensagens Estreladas Por Você',
      CHANCE_ON_STARBOARD: 'Chance No Starboard',
      WORLDWIDE: 'Estatísticas Globais',
      TOTAL_STARS: 'Total De Estrelas',
      HALL_OF_FAME: 'Mensagens No Hall Da Fama',
      HALL_OF_FAME_BY_YOU: 'Entradas Do Hall Da Fama Por Você',
      NONE: 'Nenhum'
    },
    FILTERS: {
      NAME: 'filtros',
      DESCRIPTION: 'Veja, crie ou edite filtros usados para filtrar mensagens de serem estreladas.',
      USAGE: 'filtros ([configuraçõesDeCanal]) (add/remove/list/edit) (content/attachments/age/[númeroDoFiltro]) (...[opções]) --explain --options',
      SUCCESS_REMOVE: n => `Filtro ${n} removido com sucesso.`,
      SUCCESS_REMOVE_ALL: 'Todos os filtros removidos com sucesso.',
      REGEX_SAME: 'As regex/strings para filtrar e para não filtrar não podem ser iguais.',
      MEDIA_REQUIRED_MAX: 'Você não pode tornar mídia obrigatória quando o máximo de anexos é 0.',
      REQUIRED_MAX: 'Conteúdo não pode ser obrigatório quando o máximo de caracteres é 0.',
      AGE_RELATIVE: 'Um filtro de idade não pode ter tempo relativo (x dias x horas x minutos) e tempo estático (uma data, isto é, dd/mm/aaaa) simultaneamente.',
      INVALID_REGEX: (t, e) => `Uma regex inválida foi fornecida para **${t}**: ${e}`,
      REGEX_TOO_LONG: 'Essa regex é muito longa.',
      AUTO_STAR_AGE: 'A opção **AutoStar** não pode ser usada para filtros de idade.',
      FILTERS: 'Filtros',
      OPTIONS: (p, guide) => `Os tipos de filtro disponíveis no momento são **Content** (Conteúdo), **Attachments** (Anexos) e **Age** (Idade).
      As opções disponíveis são:
      **__Content__**
      - Required yes/no
      - Minimum [número]
      - Maximum [número]
      - IsReply yes/no/none
      - Match [texto/regex]
      - NotMatch [texto/regex]
      - AutoStar yes/no/none
      
      **__Attachments__**
      - Required yes/no
      - Minimum [número]
      - Maximum [número]
      - MediaRequired yes/no
      - AutoStar yes/no/none
      
      **__Age__**
      - NewerThan [tempo/data]
      - OlderThan [tempo/data]
      
      Para criar um filtro, execute \`${p}filters add <content/attachments/age> <...[opções]>\`
      
      **Saiba Mais**`.stripIndents(),
      DESCRIBE: 'Para que uma mensagem seja estrelada, ela precisa:',
      REQUIRED_CONTENT: 'ter conteúdo',
      MIN_CONTENT: n => `ter conteúdo maior ou igual a **${n}** caracteres`,
      MAX_CONTENT: n => `ter conteúdo menor ou igual a **${n}** caracteres`,
      MATCH_REGEX: (rgx, flags) => `corresponder à regex \`/${rgx}/${flags}\``,
      INCLUDES: str => `incluir \`${str}\``,
      NOT_MATCH_REGEX: (rgx, flags) => `não corresponder à regex \`/${rgx}/${flags}\``,
      NOT_INCLUDES: str => `não incluir \`${str}\``,
      REQUIRED_ATTACHMENT: 'ter pelo menos **um** anexo/embed',
      MIN_ATTACHMENTS: n => `não ter menos que **${n}** anexos`,
      MAX_ATTACHMENTS: n => `não ter mais que **${n}** anexos`,
      MEDIA_REQUIRED: 'ter pelo menos **uma** imagem, vídeo ou outras formas de mídia',
      MIN_AGE: t => `ser mais velha que \`${t}\``,
      SENT_BEFORE: t => `ser enviada antes de \`${t}\``,
      MAX_AGE: t => `ser mais nova que \`${t}\``,
      SENT_AFTER: t => `ser enviada depois de \`${t}\``,
      APPLIES_TO: list => `Esse filtro se aplica a ${list}`,
      DOES_NOT_APPLY_TO: list => `Esse filtro não se aplica a ${list}`,
      NOT_SET: 'Não definido',
      REQUIRED_NAME: 'Obrigatório',
      MIN_NAME: 'Mínimo',
      MAX_NAME: 'Máximo',
      IS_REPLY_NAME: 'É Reply',
      MATCH_NAME: 'Regex a Combinar',
      INCLUDES_NAME: 'Inclui',
      NOT_MATCH_NAME: 'Regex a Não Combinar',
      NOT_INCLUDES_NAME: 'Exclui',
      MEDIA_REQUIRED_NAME: 'Mídia Obrigatória',
      MIN_AGE_NAME: 'Mais Velha Que',
      AFTER_NAME: 'Enviada Após',
      MAX_AGE_NAME: 'Mais Nova Que',
      BEFORE_NAME: 'Enviada Antes De',
      APPLIES_TO_NAME: 'Se Aplica a',
      DOES_NOT_APPLY_TO_NAME: 'Não Se Aplica a',
      AUTO_STAR_NAME: 'Mensagens Estreladas Automaticamente',
      NOONE: 'ninguém',
      CONTENT: 'Filtro De Conteúdo Da Mensagem',
      ATTACHMENTS: 'Filtro De Anexos Da Mensagem',
      AGE: 'Filtro De Idade Da Mensagem',
      FILTER_PAGE: (n, t) => `Filtro ${n}/${t}`
    },
    DEBUG: {
      NAME: 'depurar',
      DESCRIPTION: 'Depure e ache o porquê de uma mensagem, mensagens em um canal específico, ou todas as mensagens não estarem sendo estreladas.',
      USAGE: 'depurar ([canal]) ([IDdeMensagem]) --autoStar',
      DEBUG: 'Depuração',
      NO_STARBOARDS: 'Não há nenhum starboard definido para esse servidor.',
      MISSING_READ: c => `Eu não posso ver ${c}, por favor ative a permissão \`Ver Canal\`.`,
      MISSING_HISTORY: c => `Eu não posso ler o histórico de mensagens em ${c}, por favor ative a permissão \`Ver Histórico de Mensagens\`.`,
      MISSING_EMBEDS: c => `Eu não posso enviar embeds em ${c}, por favor ative a permissão \`Inserir Links\`.`,
      MISSING_FILES: c => `Eu não posso anexar arquivos em ${c}, então arquivos não serão anexados na mensagem do starboard mas sim enviados como links. Por favor ative a permissão \`Anexar Arquivos\` se você quer anexos.`,
      MESSAGE_NOT_EXISTS: (id, c) => `Não foi encontrada uma mensagem com o ID \`${id}\` em ${c}`,
      TRASHED: 'Essa mensagem está descartada.',
      FROZEN: 'Essa mensagem está congelada e não pode ganhar ou perder nenhuma estrela.',
      FILTER_BOTS: 'Mensagens enviadas por bots não podem ser estreladas porque a configuração **FilterBots** está ativada.',
      CONTENT_REQUIRED: 'Essa mensagem não tem conteúdo, e conteúdo é obrigatório.',
      CONTENT_MIN: (n, l) => `O comprimento dessa mensagem precisa ser de ${n} ou mais caracteres, e no momento é ${l}.`,
      CONTENT_MAX: (n, l) => `O comprimento dessa mensagem excede o limite de ${n} caracteres. (${l})`,
      ATTACHMENT_REQUIRED: 'Um anexo ou embed é obrigatório e essa mensagem não tem nenhum.',
      ATTACHMENT_MIN: (m, n) => `Essa mensagem precisa ter ${m} ou mais anexos/embeds, e no momento tem ${n}.`,
      MEDIA_REQUIRED: 'Essa mensagem não tem nenhuma mídia, e mídia é obrigatória. (Imagens, GIFs, vídeos, etc)',
      OLDER_THAN: (t, curr) => `Essa mensagem precisa ser mais velha que ${t} para ser estrelada, e no momento tem ${curr} de idade.`,
      SENT_BEFORE: (t, sent) => `Essa mensagem precisa ter sido enviada antes de ${t} para ser estrelada, e ela foi enviada em ${sent}.`,
      NEWER_THAN: (t, curr) => `Essa mensagem precisa ser mais nova que ${t} para ser estrelada, e no momento tem ${curr} de idade.`,
      SENT_AFTER: (t, sent) => `Essa mensagem precisa ter sido enviada depois de ${t} para ser estrelada, e ela foi enviada em ${sent}.`,
      REQUIRED_STARS: (r, s, emojis) => `Essa mensagem precisa de ${r} estrelas (${emojis}) para chegar no starboard, e no momento ela só tem ${s}.`,
      CHANNEL_SETTINGS: 'Configurações de Canal',
      STARBOARD: 'Starboard',
      REQUIRED: 'Necessárias',
      EMOJI: 'Emoji',
      STAR_SELF: 'StarSelf',
      BLACKLISTED_ITEMS: 'Itens na Lista Negra',
      FILTERS: 'Filtros',
      NOT_SET: 'não definido'
    },
    BOTINFO: {
      NAME: 'botinfo',
      DESCRIPTION: 'Veja informações sobre o bot.',
      USAGE: 'botinfo (bot/star)',
      BOT_STATS: 'Estatísticas do Bot',
      STARRED_STATS: 'Estatísticas de Mensagens Estreladas',
      SYSTEM_STATS: 'Estatísticas do Sistema',
      SERVERS: 'Servidores',
      USERS: 'Usuários',
      MESSAGES: 'Mensagens',
      CHANNELS: 'Canais',
      COMMANDS_RUN: 'Comandos Executados',
      PING: 'Ping',
      UPTIME: 'Tempo de Atividade',
      CREATED_AT: 'Criação do Bot',
      JOINED_AT: 'Entrou no Servidor',
      COMMANDS: 'Comandos',
      VERSION: 'Versão',
      STARRED_MESSAGES: 'Mensagens Estreladas',
      LIFETIME_STARRED_MESSAGES: 'Total de Mensagens Estreladas',
      MOST_STARS: 'Maior Quantidade de Estrelas em uma Mensagem',
      TOTAL_STARS: 'Total de Estrelas',
      UPVOTES: 'Estrelas Registradas',
      GLOBAL: 'Pontos Globais Registrados',
      TRASHED: 'Mensagens Descartadas',
      POSTED_MESSAGES: 'Mensagens Postadas',
      EDITED_MESSAGES: 'Mensagens Editadas',
      REWARD_ROLES: 'Cargos de Recompensa Concedidos',
      LOCKED: 'Mensagens Travadas',
      FROZEN: 'Mensagens Congeladas',
      SAVED: 'Mensagens Enviadas a DMs',
      QUICK_ACTIONS: 'Atalhos Executados',
      CPU: 'CPU',
      DISK_USAGE: 'Uso de Disco',
      MEMORY_USAGE: 'Uso de Memória',
      PROCESS_UPTIME: 'Tempo de Atividade do Processo',
      PLATFORM: 'Plataforma',
      LIBRARY: 'Biblioteca'
    },
    SHOW: {
      NAME: 'mostrar',
      DESCRIPTION: 'Visualize qualquer mensagem estrelada, ou a mensagem mais estrelada.',
      USAGE: 'mostrar <moststarred/[IDdeMensagem]>',
      NOT_FOUND: 'Eu não consegui encontrar essa mensagem estrelada.',
      STARRED_MESSAGE: 'Mensagem Estrelada',
      COULD_NOT_OBTAIN: 'Eu não consegui obter essa mensagem estrelada. A razão provável é de que ambas as mensagens foram deletadas, o canal foi deletado ou eu não posso mais ver o canal. Mas de qualquer forma, aqui estão algumas informações sobre isso:',
      STARS: 'Estrelas',
      GLOBAL: 'Pontos Globais',
      AUTHOR: 'Autor',
      CHANNEL: 'Canal'
    },
    SHARDS: {
      NAME: 'shards',
      DESCRIPTION: 'Informações sobre os shards',
      USAGE: 'shards'
    },
    SUGGEST: {
      NAME: 'sugerir',
      DESCRIPTION: 'Sugira qualquer coisa que você acha que esse bot deveria ter/mudar.',
      USAGE: 'sugerir <[sugestão]>',
      NEED_VOTE: (vote, support) => `A fim de reduzir spam, você tem que **votar para o bot** para fazer sugestões fora do **servidor de suporte**.`,
      NO_INPUT: 'Por favor forneça uma sugestão a fazer.',
      ATTACHMENTS_NSFW: 'Anexos não podem ser usados em sugestões se feitas em um canal de conteúdo adulto.',
      SUGGESTION: 'Sugestão',
      THANK_YOU: link => `Muito obrigado pela sua sugestão, elas realmente ajudam bastante o desenvolvimento desse bot. Você pode ver a sua sugestão **aqui**, onde pessoas votam nela.`
    },
    GENERATE: {
      NAME: 'gerar',
      DESCRIPTION: 'Gera um código premium',
      USAGE: 'gerar ([código])'
    },
    REDEEM: {
      NAME: 'resgatar',
      DESCRIPTION: 'Resgata um código premium',
      USAGE: 'resgatar <[código]>',
      SUPPORT: 'Por favor resgate códigos do Starboard Premium no servidor que você realmente quer que tenha o Starboard Premium.',
      CODE_USED: 'Esse código já foi resgatado.',
      CODE_INVALID: 'Desculpe, esse não é um código válido.',
      ALREADY_PREMIUM: 'Esse servidor já tem premium vitalício, então um código não pode ser resgatado.',
      EXTRA_PREMIUM: months => `O código foi resgatado com sucesso. Esse servidor agora tem Starboard Premium por um mês extra, para um total de ${months} meses.`
    },
    PREMIUM: {
      NAME: 'premium',
      DESCRIPTION: 'Veja informações sobre premium, ou seu status premium.',
      USAGE: 'premium',
      PREMIUM: 'Starboard Premium',
      HAVE_PREMIUM: n => `No momento, você tem premium ativo em ${n} servidores.`,
      SINCE: 'Desde',
      EXPIRES: 'Expira em',
      NEVER: 'Nunca',
      DONATED: 'Obrigado por doar e apoiar o desenvolvimento do Starboard!',
      PREMIUM_INFO: idonated => `__**Doando**, você ganha (permanentemente):__
      - Um cargo de Doador e um chat exclusivo para doadores no nosso servidor de suporte.
      - Um emblema ${idonated} que aparece em todas as suas mensagens no starboard.
      
      __Obtendo **Starboard Premium**, você pode:__
      - Reivindicar um cargo de Premium no nosso servidor de suporte.
      *E em um servidor de sua escolha...*
      - Ter até 5 emojis.
      - Ter até 25 conjuntos de configurações de canal.
      - Ter a capacidade de **votar negativamente** em mensagens do starboard.
      - Ter todas as embeds em respostas de comando configuradas para ser a mesma cor definida para mensagens do starboard.`.stripIndents()
    },
    LANGUAGES: {
      NAME: 'idioma',
      DESCRIPTION: 'Veja uma lista de todos os idiomas, ou defina o idioma para o servidor.',
      USAGE: 'idioma ([idioma])',
      LANGUAGES: 'Idiomas',
      SUCCESS: l => `Idioma do servidor definido como **${l}** com sucesso.`
    },
    QUICKACTIONS: {
      NAME: 'atalhos',
      DESCRIPTION: 'Veja mais informações sobre Atalhos.',
      USAGE: 'atalhos',
      QUICK_ACTIONS: 'Atalhos',
      EMBED_DESCRIPTION: (enabled, prefix) => `**Enabled**: ${enabled}
      
      Atalhos permitem que usuários realizem ações rapidamente em mensagens do starboard, como travar, congelar, deletar ou salvar, apenas reagindo na mensagem do starboard com emojis específicos.
      __Aqui está a lista de Atalhos para moderadores:__
      🗑️: Descarta a mensagem
      🔒: Trava a mensagem
      🔓: Destrava a mensagem
      🧊/❄️: Congela a mensagem
      🔥: Descongela a mensagem
      🔄/🔁: Reconta as estrelas da mensagem
      🏆/🏅: Inclui no Hall da Fama
      ❌/🇽: Deleta a mensagem do starboard
      📌/📍: Força no starboard
      
      __E para todos:__
      📥/💾: Salva a mensagem estrelada na DM
      ❌/🇽: Deleta uma mensagem do starboard que lhes pertence.
      
      **Nota**: O atalho forçar 📌/📍 tem que ser usado na mensagem original.
      **Dica**: Se você não quer que usuários usem os Atalhos para todos, você pode desativar a permissão \`Adicionar Reações\` deles.
      
      Para ativar/desativar Atalhos, execute \`${prefix}configurar quickActions <true/false/yes/no>\``.stripIndents()
    },
    SAVE: {
      NAME: 'salvar',
      DESCRIPTION: 'Salva uma mensagem estrelada ou uma mensagem normal na sua DM.',
      USAGE: 'salvar ([canal]) <[IDdeMensagem]>',
      RECENTLY_SAVED: 'Essa mensagem já foi salva recentemente.',
      DMS_CLOSED: 'Eu não posso te mandar essa mensagem porque sua DM está fechada.',
      SUCCESS: 'Essa mensagem foi enviada à sua DM com sucesso.',
      FAIL: 'Algo deu errado ao tentar te enviar essa mensagem.',
      NO_MESSAGE_ID: 'Por favor forneça um ID de mensagem.'
    }
  },
  LANGUAGES: {
    EN_GB: 'Inglês (GB)',
    EN_US: 'Inglês (US)',
    LT_LT: 'Lituano',
    TR_TR: 'Turco',
    FUWWY: 'Fuwwy'
  }
}
