import { Transaction, TransactionType } from '../../models/Transaction.js';
import { TransactionStatus } from '../../models/Wallet.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostTransactionsRouteOptions extends BaseAuthRouteOptions {
	Body: {
		amount: number;
		transactionType: TransactionType;
		description: string;
		from: string | null;
		to: string | null;
	};
	Reply: Transaction | TransactionStatus;
}
