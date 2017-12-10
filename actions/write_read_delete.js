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

vault.read('secret/controller/username')
.then(console.log)
.then(() => vault.write('secret/clients/hello', { value: 'world', lease: '1s' }))
.then(() => vault.read('secret/clients/hello'))
.then(console.log)
.then(() => vault.delete('secret/clients/hello'))
.catch((err) => console.error(err.message));

