export class Graph {
    constructor() {
        this.visited = [];
        this.count = 0;
        this.adjacencyList = new Map();
    }
    parseTransactionsData(transactions) {
        const validTransactions = transactions.map((transaction) => transaction.transactionId);
        console.log(validTransactions.length);
        for (const transaction of transactions) {
            for (const parent of transaction.parentTransactionIDs) {
                if (validTransactions.includes(parent)) {
                    const currentParents = this.adjacencyList.get(transaction.transactionId) || [];
                    if (!currentParents.includes(parent)) {
                        currentParents.push(parent);
                        this.adjacencyList.set(transaction.transactionId, currentParents);
                    }
                }
            }
        }
    }
    getAdjancencyList() {
        return this.adjacencyList;
    }
    dfs(startingHash) {
        if (this.visited.includes(startingHash)) {
            return;
        }
        this.visited.push(startingHash);
        this.count += 1;
        if (this.adjacencyList.get(startingHash)) {
            for (const parent of this.adjacencyList.get(startingHash))
                this.dfs(parent);
        }
    }
    compare(a, b) {
        if (a.count > b.count)
            return -1;
        return 1;
    }
    generateAncestorySets() {
        const output = [];
        for (const key of this.adjacencyList.keys()) {
            this.visited = [];
            this.count = 0;
            this.dfs(key);
            output.push({ txid: key, count: this.count });
        }
        output.sort(this.compare);
        return output.slice(0, 10);
    }
}
//# sourceMappingURL=graph.js.map