import { type FullConfig } from '@playwright/test'
import secrets from './secrets.json'

async function globalSetup(config: FullConfig) {
    process.env.SIGNIN_USERNAME = 'gdum'
    process.env.SIGNIN_PASSWORD = secrets.SIGNIN_PASSWORD
}
  
module.exports = globalSetup
