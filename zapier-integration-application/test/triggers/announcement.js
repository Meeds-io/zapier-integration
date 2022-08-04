require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - announcement', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },

      inputData: {},
    };

    const results = await appTester(
      App.triggers['announcement'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
