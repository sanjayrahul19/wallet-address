import Web3 from "web3"

const address = '0x752802BCadB14F455C442Ed254a129474c1Eea04';
const infraUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/"
const bscWeb3 = new Web3(infraUrl)
export const validWalletAddress = async () => {
    if (Web3.utils.isAddress(address)) {
        console.log('Valid wallet address');
    } else {
        console.log('Invalid wallet address');
    }
};

const getBalance = async () => {
    try {
        const address = Web3.utils.toChecksumAddress('0x752802BCadB14F455C442Ed254a129474c1Eea04')
        const chainId = '0x5';
        const symbol = 'ETH';
        let balance, gasBalance, network
        if (chainId) {
            balance = await bscWeb3.eth.getBalance(address, chainId)
            gasBalance = Web3.utils.fromWei(balance, "ether");
            network = { symbol: symbol, balance: gasBalance }
            console.log(network)
        } else {
            console.log("provide chainId")
        }

    } catch (error) {
        console.log(error)
    }
}


getBalance()