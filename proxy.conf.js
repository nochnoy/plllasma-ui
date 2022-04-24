const PROXY_CONFIG = [
  {
    context: [
      '/rest',
    ],
    target: 'https://plllasma.com',
    secure: false,
    changeOrigin: true,
    logLevel: 'info'
  }
]

module.exports = PROXY_CONFIG;
