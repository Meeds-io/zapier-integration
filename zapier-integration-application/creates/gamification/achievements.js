/*
 * This file is part of the Meeds project (https://meeds.io/).
 * 
 * Copyright (C) 2020 - 2022 Meeds Association contact@meeds.io
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
const gamify = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://meedsv2-ft.meeds.io/rest/private/zapier/gamification/achievements`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ruleTitle: bundle.inputData.rule,
      imUser: bundle.inputData.imUser,
      imType: bundle.inputData.imType,
      url: bundle.inputData.url,
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'gamification',
  noun: 'Gamify',
  display: {
    label: 'Gamify Action',
    description: 'Gamify user action to earn Meeds Token rewarding.'
  },
  operation: {
    inputFields: [
      {key: 'rule', label:'Gamification Rule', required: true, dynamic: 'rule.event'},
      {
        key: 'imType',
        label:'Social Network Type',
        choices: {
          'twitter': 'Twitter'
        },
        required: true
      },
      {key: 'imUser', label:'Social Network username', required: true},
      {key: 'url', label:'Social Network URL of event', required: true}
    ],
    perform: gamify
  }
};
