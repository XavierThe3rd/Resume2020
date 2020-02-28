import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { setup as setupPuppeteer } from 'jest-environment-puppeteer'

import prodConfig from '../webpack.production'
import devConfig from '../webpack.development'

export default globalConfig => {
  return new Promise((resolve, reject) => {
    const compiler = webpack(prodConfig())

    compiler.hooks.done.tap('TestServer', () => {
      setupPuppeteer(globalConfig)
        .then(resolve)
        .catch(reject)
    })
    global.__SERVER__ = new WebpackDevServer(compiler, {
      ...devConfig().devServer,
      noInfo: true
    })
    global.__SERVER__.listen(devConfig().devServer.port, '127.0.0.1')
  })
}
