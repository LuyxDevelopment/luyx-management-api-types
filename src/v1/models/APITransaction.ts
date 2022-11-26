import { TransactionStage, TransactionType } from '../utils/transactions.js';
import { Base } from './base.js';

export interface APITransaction extends Base {
	amount: number;
	description: string;
	from: null | string;
	to: null | string;
	timestamp: number;
	transactionStage: TransactionStage;
	transactionType: TransactionType;
}
