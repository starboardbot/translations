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
  HELP: 'Ajuda'
}