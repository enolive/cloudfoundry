import request from 'supertest';
import {app} from './routes';
import HttpStatus from 'http-status-codes';

test('Greetings are received', async () => {
  await request(app).get('/')
                    .expect(HttpStatus.OK)
                    .then(response => expect(response.text).toEqual('Hello No Pants!'));
});

test.each([
  ['Christoph', 'Hello Christoph!'],
  ['Tofu', 'Hello Tofu!'],
  ['Daniel', 'Hello Daniel!'],
  ['Alex', 'Hello Alex!'],
  ['Valentin', 'Hello Valentin!'],
])('Greetings for specific person %s are received', async (name, expected) => {
  await request(app).get(`/${name}`)
                    .expect(HttpStatus.OK)
                    .then(response => expect(response.text).toEqual(expected));
});
