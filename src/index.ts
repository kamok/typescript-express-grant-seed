import './config/env' // load env vars
import express from 'express'
import session from 'express-session';
import grant from 'grant-express';
import { config } from './config/grant-config';

const app: express.Application = express();
// Set up express-session
app.use(session({
  secret: process.env.EVE_SERVICE_SESSION_SECRET!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
  resave: true,
  saveUninitialized: true
 }))

// Mounting grant - OAuth2 helper
app.use(grant(config))

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
