import { writeDotenv, writeJsConfig, launchBabelBuild } from '@jspencev/build-util';
const aliasConfig = require('%root/alias.config').default;
const appRoot = require('%root/alias.config').appRoot;
const path = require('path');

export default async function build(env) {
  if (env === 'development' || !env) {
    await writeJsConfig(aliasConfig, appRoot);
    const dotenvPath = path.join(appRoot, '.env');
    const envs = {
      NODE_ENV: 'development'
    };
    await writeDotenv(dotenvPath, envs);
  }

  await launchBabelBuild(appRoot);
}