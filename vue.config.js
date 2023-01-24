const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'eu-north-1',
      bucket: 'ponyos-watercolour-artclasses-bucket',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: true,
      pwaFiles: 'index.html,service-worker.js,manifest.json',
      enableCloudfront: true,
      cloudfrontId: 'q',
      cloudfrontMatchers: '/index.html,/service-worker.js,/manifest.json',
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
})
