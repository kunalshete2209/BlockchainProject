require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/jHNGigc2vwMTND077hWTbZiDdHo3rinW',
      accounts: ['fee5d65fa3a33580f551cb0b3aec026d845e4ff04993f71a90274e90d8c8d10a'],
    },
  },
};