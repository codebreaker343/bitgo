import { Transaction } from "./transaction.js";
export declare class BlockStreamProvider {
    private baseUrl;
    constructor();
    fetchHash(blockHeght: number): Promise<any>;
    fetchTransactions(hash: string): Promise<Transaction[]>;
}
