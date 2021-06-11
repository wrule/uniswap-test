const TestCoin1 = artifacts.require('TestCoin1');
const TestCoin2 = artifacts.require('TestCoin2');
const LiquidityValueCalculator = artifacts.require('LiquidityValueCalculator');

module.exports = (deployer) => {
  deployer.deploy(TestCoin1);
  deployer.deploy(TestCoin2);
  // deployer.deploy(LiquidityValueCalculator, '0xE76Ac258Ca830E31bCB973D6CbeFeB4901360eBF');
};
