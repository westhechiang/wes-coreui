const Slack = require('slack-node');
const git = require('git-last-commit');
const pjson = require('../package.json');

const webhookUri = 'https://hooks.slack.com/services/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';

const slack = new Slack();
slack.setWebhook(webhookUri);

git.getLastCommit(
  (giterr, commit) => {
    if (giterr) {
      console.log(giterr);
    }

    const lastCommitMessage = commit.subject;
    const text = `The current version of rm-coreui has been upgraded to: *${pjson.version}*. \nThis update includes: *${lastCommitMessage}*`;

    slack.webhook({
      username: 'rm-coreui-bot',
      text,
    }, (slackerr) => {
      if (slackerr) {
        console.log(slackerr);
      }

      console.log(`This was the message sent to #rm-coreui in slack: ${text}`);
    });
  },
);

