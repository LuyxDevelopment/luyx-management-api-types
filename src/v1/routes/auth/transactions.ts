import mongoose from 'mongoose';
import { Transaction, TransactionType } from '../../models/Transaction.js';
import { TransactionStatus } from '../../models/Wallet.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostTransactionsRouteOptions extends BaseAuthRouteOptions {
	Body: {
		amount: number;
		transactionType: TransactionType;
		description: string;
		from: mongoose.Types.ObjectId | null;
		to: mongoose.Types.ObjectId | null;
	};
	Reply: {
		data: Transaction;
	} | {
		status: TransactionStatus;
	};
}
