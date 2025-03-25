// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ETHTransfer {
    event TransferSuccessful(address indexed sender, address indexed recipient, uint256 amount);
    event TransferFailed(address indexed sender, address indexed recipient, uint256 amount);

    // Hàm gửi ETH từ msg.sender đến một địa chỉ khác
    function sendETH(address payable _recipient) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        require(_recipient != address(0), "Invalid recipient address");

        (bool success, ) = _recipient.call{value: msg.value}("");
        if (success) {
            emit TransferSuccessful(msg.sender, _recipient, msg.value);
        } else {
            emit TransferFailed(msg.sender, _recipient, msg.value);
        }
    }

    receive() external payable {}
}
