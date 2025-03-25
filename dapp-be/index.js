import { ethers } from "ethers";
import abi from "./abi.js";

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/")

const main = async () => {
    const signer = await provider.getSigner(0)

    const contract = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', abi, signer)

    const recipient = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"

    const tx = await contract.sendETH(recipient, {
        value: ethers.parseEther('3'),
        gasLimit: 100000
    })

    console.log('tx', tx.hash)

    await tx.wait()

    console.log("done")
};

const checkBalance = async (address) => {
    const balance = await provider.getBalance(address)

    console.log(11, balance)
}

main()

// checkBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
// checkBalance("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
// checkBalance("0x5FbDB2315678afecb367f032d93F642f64180aa3")
