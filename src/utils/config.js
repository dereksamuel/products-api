const isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  dbConfig: {
    dbUrl: process.env.DATABASE_URL
  }
}
