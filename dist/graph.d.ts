import { Transaction } from "./transaction.js";
export declare class Graph {
    private adjacencyList;
    private visited;
    private count;
    constructor();
    parseTransactionsData(transactions: Transaction[]): void;
    getAdjancencyList(): Map<string, string[]>;
    dfs(startingHash: string): void;
    compare(a: any, b: any): 1 | -1;
    generateAncestorySets(): any[];
}
