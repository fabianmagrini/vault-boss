// required environment variables
[
    'VAULT_ADDR',
    'TOKEN'
].forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`)
    }
});

const options = {
    apiVersion: 'v1', // default
    endpoint: process.env.VAULT_ADDR,
    token: process.env.TOKEN
};
const vault = require('node-vault')(options);

vault.tokenRenewSelf()
.then(console.log)
.catch((err) => console.error(err.message));

