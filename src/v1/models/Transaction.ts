import { TransactionStage, TransactionType } from '../util/transactions.js';
import { Base } from './base.js';
import { Wallet } from './Wallet.js';

export interface Transaction extends Base {
	amount: number;
	description: string;
	from: null | Wallet;
	to: null | Wallet;
	timestamp: number;
	transactionStage: TransactionStage;
	transactionType: TransactionType;
}
