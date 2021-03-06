const { request } = require('http');
const fs = require('fs');
const fastify = require('fastify')();
const path = require('path');

const farms = [...JSON.parse(fs.readFileSync(path.join(__dirname, './farms.json')))];
const farmStellarAdresses = farms
    .map(farm => farm.stellar_wallet_addres)
    .filter((value, index, self) => self.indexOf(value) === index);

fastify.get('/api/v1/env', () => {
    return {
        flagsmith: process.env.FLAGSMITH_ENVIROMENT_KEY || 'dev',
        farmerOnly: process.env.FARMER_ONLY || 0,
    };
});

fastify.get('/api/v1/farms', async () => {
    return farms;
});
fastify.get('/api/v1/farms/addresses', async () => {
    return farmStellarAdresses;
});

fastify.get('/api/v1/farms/id/:id', (request, reply) => {
    const _farms = farms.filter(farm => farm.id == request.params.id);

    if (_farms.length === 0) {
        reply.code(404).type('text/html').send();
    }

    reply.code(200).type('text/json').send(_farms);
});

fastify.get('/api/v1/farms/address/:stellar_wallet_address', (request, reply) => {
    const _farms = farms.filter(farm => farm.stellar_wallet_addres == request.params.stellar_wallet_address);

    if (_farms.length === 0) {
        reply.code(404).type('text/html').send();
    }

    reply
        .code(200)
        .type('text/json')
        .send(_farms.map(farm => farm.name));
});

fastify.get('/api/v1/farms/name/:name', (request, reply) => {
    const _farms = farms.filter(farm => farm.name == decodeURI(request.params.name));

    if (_farms.length === 0) {
        reply.code(404).type('text/html').send();
    }

    reply
        .code(200)
        .type('text/json')
        .send(_farms.map(farm => farm.stellar_wallet_addres));
});

fastify.get('/api/v1/farms/:name/:stellar_wallet_address', (request, reply) => {
    const farm = farms.find(f => f.name == decodeURI(request.params.name));

    reply
        .code(200)
        .type('text/json')
        .send({
            canuse: !farm || farm.stellar_wallet_addres === request.params.stellar_wallet_address,
        });
});

fastify.listen(5000, function (err, address) {
    console.log(`server listening on ${address}`);
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
