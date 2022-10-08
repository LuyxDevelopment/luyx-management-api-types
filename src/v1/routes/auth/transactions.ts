import { Transaction } from '../../models/Transaction.js';
import { TransactionStatus } from '../../models/Wallet.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostTransactionRouteOptions extends BaseAuthRouteOptions<Transaction | TransactionStatus> {
	Body: Omit<Transaction, 'transactionStage' | '_id'>
}
