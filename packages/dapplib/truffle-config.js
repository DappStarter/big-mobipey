require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender suspect wage cruise screen quality coral light army general'; 
let testAccounts = [
"0xb0d13a127159c2eef4ae30b49745ec8d7c4dd7a29be8315290986b3911c1e6eb",
"0xc111f5f9411b25c6eab4c3918bf0ed5f094d2d00a3d859c4f98dfd4292533360",
"0x9937513efcb60e296dbe476e7ac3bd431b17c97f1edd3e29239fd76bcf4a6f6d",
"0x0e36340939e23d02e7dfd82563772d1901ac541c2611e3f50f4316d6e15d0142",
"0x9392e946ed49272b33845070d72647a9cdf734560d55458a83872b3462f55853",
"0xd2b073969c4aa2d890c9c565169c35427d188985017d0a16cf92980d5abb39d7",
"0x8be3565e74681e92cd99d36b8e09fb46657bd4729fee725a885d08f9d5ba0222",
"0xb61bf6c72cb3308f12a667639a0d8b22fb3f68b7ca03ebe359a9dc79cbdaa39b",
"0x510dee7079848787e51879d4e9767b5cd7dde4b4189683fece0f189fe9cc14f1",
"0xc0c8e621f4c6e61516258900a4059d8ee1280c0e21f75aef4b94e5047ee1f314"
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
            version: '^0.5.11'
        }
    }
};
