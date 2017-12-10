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

const roleName = 'test-role';

vault.addApproleRole({ role_name: roleName, policies: 'controller' })
.then(() => Promise.all([vault.getApproleRoleId({ role_name: roleName }),
    vault.getApproleRoleSecret({ role_name: roleName })])
)
.then((result) => {
    const roleId = result[0].data.role_id;
    const secretId = result[1].data.secret_id;
    return vault.approleLogin({ role_id: roleId, secret_id: secretId });
})
.then((result) => {
    console.log(result);
})
.catch((err) => console.error(err.message));