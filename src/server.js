import path from 'path';
import dotenv from 'dotenv';
import kue from 'kue';

import { Server } from 'gocool';

import JobHandler from 'app/boots/JobHandler';
import PassportHandler from 'app/boots/PassportHandler';
import config from 'config/appConfig';
import routes from 'app/routes';

import GithubDemoPlugin from 'gocool-github-demo-plugin';
import SamplePlugin from 'gocool-sample-plugin';

dotenv.config();

// path to root directory of this app
const rootPath = path.normalize(__dirname);

config.path = {
  view: path.join(rootPath, 'app/views'),
  static: path.join(rootPath, 'static'),
};

const server = new Server({ config });

server
  .setRoutes(routes)
  .addHandlers([
    new JobHandler(),
    new PassportHandler(),
  ])
  .addPlugin('/github-demo', GithubDemoPlugin)
  .addPlugin('/sample', SamplePlugin)
  .addExpressPlugins([
    { path: '/kue', content: kue.app },
  ])
  .start();

export default server;
