import { TransactionStage } from '../../index.js';
import { Transaction } from '../../models/Transaction.js';
import { DeepPartial, PartialPick } from '../../utils/util.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | Transaction[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<Transaction, 'amount' | 'description' | 'from' | 'timestamp' | 'to' | 'transactionStage' | 'transactionType'>>;
}

export interface PostTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | TransactionStage> {
	Body: PartialPick<Transaction, 'from' | 'to', 'amount' | 'description' | 'transactionStage' | 'transactionType'>;
}