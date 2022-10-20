import { Transaction } from '../../models/Transaction.js';
import { TransactionStage } from '../../util/transactions.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | Transaction[]> {
	Params: Params;
	Querystring: Pick<Transaction, 'amount' | 'description' | 'from' | 'timestamp' | 'to' | 'transactionStage' | 'transactionType'>;
}

export interface PostTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | TransactionStage> {
	Body: Pick<Transaction, 'amount' | 'description' | 'from' | 'to' | 'transactionStage' | 'transactionType'>;
}