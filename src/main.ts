/*

TODO: 
- https://github.com/Blockstream/esplora/blob/master/API.md
- GET /block-height/:height use height = 680000
- GET /block/:hash/txs[/:start_index] use hash recieved from the previous one, start index = 0 (paginated)
- Example endpoint -> https://blockstream.info/api/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732/txs/0
- Ensure that you check whether or not the parent is present in the block itself or not
- use vin (parent) for constructing the dependency
*/

/* 
Future work:
1. Decouple trasaction parsing logic from the Graph class
2. Use strict typing everywhere 
3. Improve the ancestory set generation algorithm
*/

import { BlockStreamProvider } from "./blockstream.js";
import { Graph } from "./graph.js";


const provider = new BlockStreamProvider()
const hash = await provider.fetchHash(680000)
const transactions = await provider.fetchTransactions(hash)

const graph = new Graph()
graph.parseTransactionsData(transactions)

console.log(graph.generateAncestorySets())