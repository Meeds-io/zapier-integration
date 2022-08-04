module.exports = {
  key: 'achievement',
  noun: 'User Achievement Gamification',
  display: {
    label: 'Gamify achievement',
    description:
      'Creates an achievement inside Gamification system assigned to a user in order to earn points and rewards',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'rule',
        label: 'Gamification Rule',
        type: 'string',
        helpText:
          'Choose a gamification rule that is triggered to create user achievement into it',
        dynamic: 'rule.event.title',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'imType',
        label: 'Social Network Type',
        type: 'string',
        choices: ['twitter'],
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'imUser',
        label: 'Social Network username',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'url',
        label: 'Social Network URL of event',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        ruleTitle: '{{bundle.inputData.rule}}',
        imType: '{{bundle.inputData.imType}}',
        imUser: '{{bundle.inputData.imUser}}',
        url: '{{bundle.inputData.url}}',
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      url: 'https://meedsv2-ft.meeds.io/rest/private/zapier/gamification/achievements',
    },
  },
};
