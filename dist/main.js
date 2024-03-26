import { BlockStreamProvider } from "./blockstream.js";
import { Graph } from "./graph.js";
const provider = new BlockStreamProvider();
const hash = await provider.fetchHash(680000);
const transactions = await provider.fetchTransactions(hash);
const graph = new Graph();
graph.parseTransactionsData(transactions);
console.log(graph.generateAncestorySets());
//# sourceMappingURL=main.js.map