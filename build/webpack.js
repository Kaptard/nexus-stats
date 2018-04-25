process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const rm = require('rimraf')
const ci = process.env.DRONE

// Call webpack build function
async function build () {
  // Only keep one build at a time. This way files are always there for
  // production builds and test units.
  console.log('* Removing old builds...')
  rm.sync(`${process.cwd()}/assets/bundles/*`)

  // Trigger webpack build
  console.log('* Starting webpack build process. This might take a while...')
  const timer = new Date()

  // Load up Cubic to generate routes config file
  const loader = require('cubic-loader')
  loader({ logLevel: 'silent', skipAuthCheck: true })

  // Load up UI node. No Auth needed, we only need to register the endpoints
  // as routes.
  const Ui = require('cubic-ui')
  const redisUrl = 'redis://redis'
  const mongoUrl = 'mongodb://mongodb'
  const config = {
    webpack: {
      skipBuild: true,
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    },
    client: {
      apiUrl: 'https://api.nexus-stats.com',
      authUrl: 'https://auth.nexus-stats.com'
    }
  }
  await cubic.use(new Ui(ci ? {
    api: { redisUrl },
    core: { redisUrl, mongoUrl },
    webpack: config.webpack
  } : config))

  // Generate routes config file
  await cubic.nodes.ui.core.client.api.connections()
  await cubic.nodes.ui.core.webpackServer.registerEndpoints()
  const client = require(cubic.config.ui.webpack.clientConfig)
  const server = require(cubic.config.ui.webpack.serverConfig)

  // Build webpack bundles
  await new Promise((resolve, reject) => {
    webpack([client, server], (err, stats) => {
      if (err || stats.hasErrors()) {
        return reject(err || stats.toJson().errors)
      }
      console.log(`> Webpack build successful (${new Date() - timer}ms)`)
      resolve()
    })
  })
  process.exit()
}

build()
