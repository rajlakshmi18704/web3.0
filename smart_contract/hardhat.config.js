// https://eth-sepolia.g.alchemy.com/v2/ZiRd7m8PuNiOuvoau21pROGK6fVKBGow

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ZiRd7m8PuNiOuvoau21pROGK6fVKBGow',
      accounts: ['01dacb9fa439e8740315ff2377fd9bade0fb5ed60ee3e25d68b26fe79a25e667'],
    },
  },
};