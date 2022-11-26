import { TransactionStage } from '../../index.js';
import { APITransaction } from '../../models/APITransaction.js';
import { DeepPartial, PartialPick } from '../../utils/util.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetTransactionRouteOptions extends BaseAuthRouteOptions<APITransaction | APITransaction[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<APITransaction, 'amount' | 'description' | 'from' | 'timestamp' | 'to' | 'transactionStage' | 'transactionType'>>;
}

export interface PostTransactionRouteOptions extends BaseAuthRouteOptions<APITransaction | TransactionStage> {
	Body: PartialPick<APITransaction, 'from' | 'to', 'amount' | 'description' | 'transactionStage' | 'transactionType'>;
}