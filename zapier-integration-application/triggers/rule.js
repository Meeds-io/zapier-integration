module.exports = {
  operation: {
    perform: {
      headers: { Accept: 'application/json' },
      url: 'https://meedsv2-ft.meeds.io/rest/private/zapier/gamification/rules',
    },
    sample: {
      id: 1,
      event: 'tweetLike',
      description: 'You liked a tweet',
      title: 'Twitter: liked a tweet',
    },
    outputFields: [
      { key: 'id', label: 'Technical identifier of Rule', type: 'number' },
      {
        key: 'event',
        label: 'Gamification Rule Event identifier',
        type: 'string',
      },
      { key: 'title', label: 'Gamification Rule Title', type: 'string' },
      {
        key: 'description',
        label: 'Gamification Rule Description',
        type: 'string',
      },
    ],
  },
  key: 'rule',
  noun: 'Gamification Rule',
  display: {
    label: 'Gamification Rule',
    description: 'Configured Gamification Rules',
    directions: 'Select Gamification Rule',
    hidden: true,
    important: false,
  },
};
