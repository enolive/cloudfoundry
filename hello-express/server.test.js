import request from 'supertest';
import {app} from './server';
import HttpStatus from 'http-status-codes';

test('Greetings are received', async () => {
  const res = await request(app).get('/');

  expect(res.statusCode).toEqual(HttpStatus.OK);
  expect(res.text).toEqual('Hello No Pants!');
});
