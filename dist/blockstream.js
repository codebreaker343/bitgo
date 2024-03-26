import axios from "axios";
export class BlockStreamProvider {
    constructor() {
        this.baseUrl = 'https://blockstream.info/api/';
    }
    ;
    async fetchHash(blockHeght) {
        const { data, status } = await axios.get(`${this.baseUrl}block-height/${blockHeght}`, {
            headers: {
                Accept: 'application/json',
            },
        });
        if (status != 200) {
            throw new Error('Fetching block hash failed');
        }
        return data;
    }
    async fetchTransactions(hash) {
        const transactions = [];
        let startIndex = 0;
        while (true) {
            try {
                const { data, status } = await axios.get(`${this.baseUrl}block/${hash}/txs/${startIndex}`, {
                    headers: {
                        Accept: 'application/json',
                    },
                });
                if (status != 200) {
                    break;
                }
                for (const transaction of data) {
                    const currentTransaction = {
                        transactionId: transaction.txid,
                        parentTransactionIDs: transaction.vin.map((parent) => parent.txid)
                    };
                    transactions.push(currentTransaction);
                }
                startIndex += 25;
            }
            catch (err) {
                break;
            }
        }
        return transactions;
    }
}
//# sourceMappingURL=blockstream.js.map