// required environment variables
[
    'VAULT_ADDR'
].forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`)
    }
});

const options = {
    apiVersion: 'v1', // default
    endpoint: process.env.VAULT_ADDR
};
const vault = require('node-vault')(options);

vault.health()
.then(console.log)
.catch((err) => console.error(err.message));