import development from './environments/development'
import production from './environments/production'
import test from './environments/test'

const env = process.env.NODE_ENV || 'development'

const environments = {
  development,
  production,
  test
}

const environment = environments[env]

export default environment
