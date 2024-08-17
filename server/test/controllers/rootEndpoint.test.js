const requestWithSupertest = require('../setup')

describe('root endpoints', () => {
  it('GET / should return 200 OK', async () => {
    const res = await requestWithSupertest.get('/');
      expect(res.status).toEqual(200);
  });
});