const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ETHTransferModule", (m) => {
  const transfer = m.contract("ETHTransfer");

  return { transfer };
});
