# Vault Boss

## Prerequisites
- node
- npm
- docker

## Getting started
```
git clone https://github.com/fabianmagrini/vault-boss.git
cd vault-boss
npm run health
```

## Build docker container
```
docker build -t fabian/vault-boss .
```

## Run command
```
docker run \
  -e "VAULT_ADDR=http://192.168.0.50:8200" \
  -e "TOKEN=<your token here>" \
  -w "/usr/src/app" \
  fabian/vault-boss \
  npm run health
```
