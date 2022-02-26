require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strategy cost spice social inner argue metal gesture'; 
let testAccounts = [
"0xa6d8e430092d8d3fed051484ac713fa587671cb0bbb6f5f18c2ee04f535bcf5c",
"0x51dacf76a1fc874154817b1176678d3bab47c89057dcc0724b7d006e219e096e",
"0xcd9e05f2389d99ddf70d8d02b93f3963514a8834b8798d24066bd4103db4a454",
"0x409975405bd405a2002bcf61b55933cacc38955202dafea1478ceaac1cf3dccb",
"0x77997d822fe23dd7ff020fca86a67fd83dc5e23178a136565bb3ee5f214ad098",
"0xa364bb72fa719a97a1f229cc7feeb4e37ecd71b7b7eaba21b852e784878b4e9f",
"0xd9c1d0bd2e0144d63a882c24358d91a716a5fd30e4fa7c0f5737b3cec3630570",
"0x09314937c7068f1c6ba128cc35a09a3f16bf3f08c20d270f386528d98b4d0d2f",
"0xe0272446e4d2a6dd1cf51587e9cdd5b012ffbf88e8215cf094565b205221ade1",
"0xa25ebea69288cee6a0469f460d49a84a46c72975c9985843e1ad2286ff072f46"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

