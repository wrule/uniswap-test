const TestCoin1 = artifacts.require('TestCoin1');
const TestCoin2 = artifacts.require('TestCoin2');

module.exports = (deployer) => {
  deployer.deploy(TestCoin1);
  deployer.deploy(TestCoin2);
};
