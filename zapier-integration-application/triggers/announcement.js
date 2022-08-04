module.exports = {
  operation: {
    perform: {
      headers: { Accept: 'application/json' },
      params: { challenge: '{{bundle.inputData.challenge}}' },
      url: 'https://meedsv2-ft.meeds.io/rest/private/zapier/gamification/challenges/{{bundle.inputData.challenge}}/announcements?offset=0&limit=20',
    },
    inputFields: [
      {
        key: 'challenge',
        type: 'number',
        label: 'Gamification Challenge',
        helpText:
          'Select a challenge that will be used for announcements triggering',
        dynamic: 'challenge.id.title',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 7419,
      challengeTitle: 'Challenge Title',
      comment:
        '<div>Announcement description introduced by user with preferred achievement proof.</div>\n',
      activityId: 1170,
      assignee: {
        id: '16',
        fullName: 'Full Name',
        username: 'username',
        avatar: 'Avatar URI',
      },
    },
    outputFields: [
      { key: 'id', type: 'number' },
      { key: 'comment', type: 'text' },
      { key: 'activityId', type: 'number' },
      { key: 'assignee__id', type: 'string' },
      { key: 'assignee__fullName' },
      { key: 'assignee__username' },
      { key: 'assignee__avatar' },
      { key: 'challengeTitle' },
    ],
  },
  key: 'announcement',
  noun: 'Challenge announcement',
  display: {
    label: 'Challenge announcement',
    description:
      'Triggers when a new announcement has been made on a selected challenge',
    hidden: false,
    important: true,
  },
};
