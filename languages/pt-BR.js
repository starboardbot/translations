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
      'Para executar essa configuração, você pode usar permissões como `MANAGE_MESSAGES`, `Manage Messages`, `Manage-Messages` ou `8192` (precisa ser em inglês). Se você optar por usar mais de uma permissão, use uma calculadora de permissões.'
  }
}