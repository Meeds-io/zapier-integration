const authentication = require('./authentication');
const ruleTrigger = require('./triggers/rule.js');
const challengeTrigger = require('./triggers/challenge.js');
const announcementTrigger = require('./triggers/announcement.js');
const achievementCreate = require('./creates/achievement.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [ruleTrigger.key]: ruleTrigger,
    [challengeTrigger.key]: challengeTrigger,
    [announcementTrigger.key]: announcementTrigger,
  },
  creates: { [achievementCreate.key]: achievementCreate },
};
