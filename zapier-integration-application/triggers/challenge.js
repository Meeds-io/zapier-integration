module.exports = {
  operation: {
    perform: {
      headers: { Accept: 'application/json' },
      url: 'https://meedsv2-ft.meeds.io/rest/private/gamification/challenges?offset=0&limit=20&filter=ALL',
    },
    canPaginate: false,
    sample: {
      id: 75,
      title: 'Test Challenge',
      description:
        '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n',
      points: 20,
      startDate: '2022-08-04T00:00:00',
      endDate: '2022-08-31T00:00:00',
      program: {
        id: 1,
        title: 'Social',
        description: 'Social',
        createdDate: '2022-07-29T12:30:55.000Z',
      },
      space: {
        id: '652',
        prettyName: 'test_space_5',
        displayName: 'Test space 5',
        groupId: '/spaces/test_space_5',
        avatarUrl:
          '/portal/rest/v1/social/spaces/default-image/avatar?lastModified=1659586897234&r=0TeLTlQ%2BbebBjo0VOwVtZaVr%2FkruXkjhNSoyWSD0fRHuJK4ukyRDYRGiZJK6pS%2FL',
        bannerUrl:
          '/portal/rest/v1/social/spaceTemplates/crowdFunding/banner?lastModified=1659586897234',
      },
    },
    outputFields: [
      { key: 'id' },
      { key: 'title' },
      { key: 'description' },
      { key: 'points' },
      { key: 'startDate' },
      { key: 'endDate' },
      { key: 'program__id' },
      { key: 'program__title' },
      { key: 'program__description' },
      { key: 'program__createdDate' },
      { key: 'space__id' },
      { key: 'space__prettyName' },
      { key: 'space__displayName' },
      { key: 'space__groupId' },
      { key: 'space__avatarUrl' },
      { key: 'space__bannerUrl' },
    ],
  },
  key: 'challenge',
  noun: 'Challenge',
  display: {
    label: 'Challenge',
    description: 'Triggers when a new challenge is created.',
    hidden: true,
    important: false,
  },
};
