module.exports = {
  apps: [
    {
      name: 'frourio-app',
      script: 'index.js',
      cwd: './',
      instances: 1,
      wait_ready: true,
      listen_timeout: 10000,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
