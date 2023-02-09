import * as path from 'path';

export const port = process.env.PORTDB;
export const host = process.env.HOSTDB; 
export const username = process.env.USERDB;
export const password = process.env.PASSDB;
export const database = process.env.DATABASE;

export const entities = [
  path.resolve(__dirname, '..', 'models/*.ts'),
  path.resolve(__dirname, '..', 'models/*.js'),
];

export const jwt = 
{
  secret: '25e09e6621695cba2583c2f1ae7dcc20',
  expiresIn: '1d',
}