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
  E o mais importante, divirta-se!`,
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
  Por favor, responda com o número correspondente que você deseja.`,
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
    BOTS_ON_LB: 'Determina se bots podem aparecer no leaderboard.',
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
      EMOJI: 'emoji'
    }
  }
}