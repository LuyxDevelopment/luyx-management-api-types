import { Transaction } from '../../models/Transaction.js';
import { TransactionStage } from '../../util/transactions.js';
import { PartialPick } from '../../util/util.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | Transaction[]> {
	Params: Params;
	Querystring: Partial<Pick<Transaction, 'amount' | 'description' | 'from' | 'timestamp' | 'to' | 'transactionStage' | 'transactionType'>>;
}

export interface PostTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | TransactionStage> {
	Body: PartialPick<Transaction, 'from' | 'to', 'amount' | 'description' | 'transactionStage' | 'transactionType'>;
}