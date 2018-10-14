const botkit = require('botkit')
const controller = botkit.slackbot({ debug: process.env.DEBUG })

require('botkit-hashtag')(controller)

controller
  .spawn({
    token: process.env.SLACK_TOKEN
  })
  .startRTM(function(err) {
    if (err) {
      throw new Error(err)
    }
  })
