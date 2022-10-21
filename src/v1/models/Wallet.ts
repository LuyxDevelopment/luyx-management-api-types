import { TransactionStage } from '../util/transactions.js';
import { Base } from './base.js';
import { Transaction } from './Transaction.js';

export interface Wallet extends Base {
	balance: number;
	deposit(amount: number, description: string): Promise<TransactionStage | Transaction>;
	transfer(amount: number, recipient: Wallet, description: string): Promise<TransactionStage | Transaction>;
	withdraw(amount: number, description: string): Promise<TransactionStage | Transaction>;
}
